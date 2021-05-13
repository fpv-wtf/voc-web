<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="copyright">
        © {{year}} made with <i class="tim-icons icon-heart-2"></i> by
        <a href="https://www.fpv.wtf" target="_blank" rel="noopener">Joonas Trussmann</a>&nbsp; and TONS of <a href="/oss">OSS</a> for the FPV community.
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    data() {
      return {
        year: new Date().getFullYear()
      }
    }
  };
</script>
<style>
</style>
