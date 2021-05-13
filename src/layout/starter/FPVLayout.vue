<template>
  <div class="wrapper">
    <side-bar>
      <template slot="tools">
        <sidebar-link to="/video-out" name="Video Out" icon="tim-icons icon-triangle-right-17"/>
      </template>
      <template slot="links">
        <sidebar-link to="/about" name="About fpv.wtf" icon="tim-icons icon-spaceship"/>
        <sidebar-link to="/oss" name="Open Source" icon="tim-icons icon-heart-2"/>
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar">

      </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
  import TopNavbar from "./SampleNavbar.vue";
  import ContentFooter from "./SampleFooter.vue";
  import DashboardContent from "./Content.vue";
  export default {
    components: {
      TopNavbar,
      ContentFooter,
      DashboardContent,
    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
