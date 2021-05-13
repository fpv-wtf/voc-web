<template>
  <div class="hello">
    <h1>Welcome to fpv.wtf</h1>
    <h2>DJI FPV Goggles Video Out</h2>
    <p>power up goggles and connect them to USB, hit <button v-on:click="boot">le send It</button>, accept the USB connection request, power up your quad and enjoy</p>
    <video style="" controls autoplay poster="images/loader-thumb.jpg" id="player"></video>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    ...mapActions([
      'boot' 
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#player {
  border: 1px solid #333; 
  width: 960px;
  height: 720px; 
}
</style>
