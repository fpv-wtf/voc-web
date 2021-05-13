import Vue from 'vue'
import Vuex from 'vuex'
import JMuxer from 'jmuxer';

Vue.use(Vuex)

const MAGIC = new ArrayBuffer(4)
const view = new DataView(MAGIC)
view.setInt32(0, 0x524d5654)

export default new Vuex.Store({
  state () {
    return {
      device: null,
      jmuxer: null,
      status: null,
      readSize: 4096
      //windows is happy with 20k, chrome on os x only likes powers of 2 but seems okay with 8192, android sort of works at 406
      //512, which is the official packetSize, lags everywhere
    }
  },
  getters: {
    usbSupported() {
        return navigator.usb ? true : false
    },
    device(state) {
        return state.device;
    },
    deviceInfo(state) {
        if(state.device)
            return [
                {name:"VendorId", value: state.device.vendorId},
                {name:"ProductId", value: state.device.productId},
                {name:"Name", value: state.device.productName},
                {name:"Serial", value: state.device.serialNumber}
            ]
        return null
    }
  },
  mutations: {
    setDevice (state, device) {
        state.device = device
    },
    setReadSize (state, size) {
        state.readSize = size
    },
    setStatus (state, status) {
        state.satus = status
    },
    initMuxer (state) {
        if(!state.jmuxer) {
            state.jmuxer = new JMuxer({
                node: 'player',
                mode: 'video',
                fps: '60',
                debug: false
            })
        }
    }
  },
  actions: {
    softboot ({ dispatch }) {
        return navigator
        .usb
        .getDevices()
        .then((devices) => {
            if(devices.length) {
                console.log("paired device detected, connecting")
                dispatch("boot")
            }
        })
    },
    boot ({ state, commit }) {
        console.log("requesting device")

        return navigator
        .usb
        .getDevices()
        .then((devices) => {
            if(devices.length) {
                console.log(devices)
                return devices[0]
            }
            else {
                return navigator
                .usb
                .requestDevice({ 
                    filters: [{ vendorId: 0x2ca3, productId: 0x1f }] 
                })
            }
        })
        .then((device) => {
            commit('setDevice', device)
        })
        .then(() => {
            console.log("opening device")
            return state.device.open()
        })
        .then(() => {
            console.log("selecting configuration")
            return state.device.selectConfiguration(1)
        })
        .then(() => {
            console.log("claiming interface")
            return state.device.claimInterface(3)
        })
        .then(() => {
            //commit('setReadSize', state.device.configuration.interfaces[3].alternate.endpoints[1].packetSize)
            console.log("sending magic packet")
            state.device.transferOut(3, MAGIC)
            //cheap way of ignoring the promise in case the goggles are already steaming
            return
        })
        .then(() => {
            commit('initMuxer')
            this.dispatch('pollForPackets')
        })
        .catch((error) => {
            console.error(error)
            Vue.prototype.$notify({
                message: error.toString(),
                timeout: 20000,
                type: "warning",
                verticalAlign: "bottom"
              })
        })
    },
    pollForPackets ({ dispatch, state }) {
        return state.device.transferIn(4, state.readSize)
        .then((response) => {
            if(response.status !== "ok") {
                console.log(response)
            }
            state.jmuxer.feed({
                video: new Uint8Array(response.data.buffer)
            })
            return dispatch('pollForPackets')
        }).catch((error) => {
            console.error(error)
            Vue.prototype.$notify({
                message: error.toString(),
                timeout: 20000,
                type: "warning",
                verticalAlign: "bottom"
              })
        })
    }
  }
})
