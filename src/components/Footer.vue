<template>
  <footer>
    <Logo />
    <a href="https://money-writing.com" target="_blank">
      (c) {{ new Date().getFullYear() }} SYSTEM_MANIA</a
    >
  </footer>
</template>

<script>
import Logo from './Logo.vue';
export default {
  components: {
    Logo,
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';

footer {
  padding: 70px 0;
  text-align: center;
  opacity: 0.3;
  .logo {
    display: block;
    margin-bottom: 4px;
  }
}
</style>
