<template>
<div class="row">
    <div class="col-md-6 col-lg-6 col-xl-8">
      <card>
        <video ref="player" v-on:dblclick="toggleFullscreen" v-on:click="boot" style="" autoplay poster="img/video-poster.svg" id="player"></video>
      </card>
    </div>
    <div class="col-md-6 col-lg-6 col-xl-4">
      <card>
        <div class="card-header">
          <h3>Device info</h3>
          <p v-if="!deviceInfo">Not connected</p>
          <div v-else>
            <div class="row" v-for="row in deviceInfo" :key="row">
              <div class="col-md-4">{{ row.name }}</div>
              <div class="col-md-8">{{ row.value }}</div>
            </div>
          </div>
        </div>
      </card>
      <card>
        <div class="card-header">
          <h3>Getting started</h3>
        </div>
        <div class="card-body">
          <base-alert v-for="step in steps" :type="step.action ? 'primary' : 'info'" v-bind:key="step.title" with-icon>
            <span data-notify="icon" :class="'tim-icons icon-'+step.icon"></span>
            <span v-on:click="boot" data-notify="message"><p>{{ step.title }}</p></span>
          </base-alert>
        </div>
      </card>
    </div>
  </div>
  
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import { BaseAlert } from '@/components';

export default {
  name: 'VideoOut',
  components: {
    BaseAlert
  },
  mounted () {
    this.$store.dispatch('softboot')
  },
  computed: {
    ...mapGetters([
        "deviceInfo",
    ])
  },
  data() {
    return {
      steps: [
        {title:"Power up Goggles", icon:"button-power"},
        {title:"Connect Goggles to USB", icon:"attach-87"},
        {title:"Request Access", icon:"refresh-02", action:"boot"},
        {title:"Power up Your Quad", icon:"button-power"},
        {title:"Send It", icon:"send"}
      ]
    }
  },
  methods: {
    ...mapActions([
      'boot' 
    ]),
    toggleFullscreen() {
      const elem = this.$refs.player
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#player {
  width: 100%;
}
</style>
