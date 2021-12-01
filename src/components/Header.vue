<template>
  <header class="header">
    <div class="header__inner">
      <Logo />
      <NavCart />
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue';
import NavCart from './NavCart.vue';

export default {
  components: {
    Logo,
    NavCart,
  },
};

</script>

<style lang="scss" scoped>
  .header {
    padding: 0 20px;
    box-shadow: 0.1rem 0.1rem 0.4rem rgba(0, 0, 0, 0.15);

    &__inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 8rem;

      &>* {
        height: 100%;
      }
    }
  }

</style>
