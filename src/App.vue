<template>
  <div>
    <notifications></notifications>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>

export default {
  methods: {
    toggleNavOpen() {
      let root = document.getElementsByTagName('html')[0];
      root.classList.toggle('nav-open');
    }
  },
  mounted() {
    this.$watch('$sidebar.showSidebar', this.toggleNavOpen)
  },
  
};
</script>

<style lang="scss"></style>
