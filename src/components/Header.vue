<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div
        v-for="nav in navigatons"
        :key="nav.name"
        active-class="active"
        class="nav-item">
        <RouterLink
          :class="{ active: isMatch(nav.path) }"
          class="nav-link"
          :to="nav.path"
          >{{ nav.name }}
        </RouterLink>
      </div>
      <div class="user" @click="toAbout">
        <img :src="image" :alt="name" />
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';
import Logo from './Logo.vue';
export default {
  components: {
    Logo,
  },
  data() {
    return {
      navigatons: [
        {
          name: 'Search',
          path: '/',
        },
        {
          name: 'Movie',
          href: '/movie/tt3896198',
          path: /^\/movie/,
        },
        {
          name: 'About',
          path: '/about',
        },
      ],
    };
  },
  computed: {
    ...mapState('about', ['image', 'name']),
  },
  methods: {
    isMatch(path) {
      if (!path) return false;
      if (typeof path === 'string') {
        return this.$route.fullPath === path;
      } else if (path instanceof RegExp) {
        return path.test(this.$route.fullPath);
      }
      return false;
    },
    toAbout() {
      this.$router.push('/about');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../scss/main.scss';

header {
  height: 70px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  position: relative;
  .logo {
    margin-right: 40px;
  }
  .user {
    width: 40px;
    height: 40px;
    padding: 6px;
    border-radius: 50%;
    box-sizing: border-box;
    background-color: $gray-200;
    cursor: pointer;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 40px;
    margin: auto;
    transition: 0.4s;
    &:hover {
      background-color: darken($gray-200, 10%);
    }
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  @include media-breakpoint-down(sm) {
    .nav {
      display: none;
    }
  }
}
</style>
