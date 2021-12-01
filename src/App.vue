<template>
  <Header />
  <router-view />
</template>

<script>
import Header from './components/Header.vue';

export default {
  components: {
    Header,
  },

  created() {
    this.$store.dispatch('loadProducts');
  },
};

</script>

<style lang="scss">
  // Fonts
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap');

  // Variables CSS
  :root {
    --white: hsla(0, 0%, 100%, 1);

    --grey-100: hsla(0, 0%, 67%, 1);
    --grey-200: hsla(0, 0%, 28%, 1);
    --grey-300: hsla(240, 1%, 22%, 1);

    --yellow: hsla(43, 99%, 54%, 1);
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    font-size: 62.5%;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-osx-font-smoothing: auto;
    overflow-wrap: break-word;
  }

  body {
    position: relative;
    margin: 0;
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    -webkit-text-size-adjust: 100%;
    overflow-x: hidden;
  }

  img,
  svg {
    display: block;
    height: auto;
    max-width: 100%;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

</style>
