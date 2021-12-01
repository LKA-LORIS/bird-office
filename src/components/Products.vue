<template>
  <div class="products">
    <h2>Title</h2>
    <!-- COMPONENTS CARD avec BOUCLES -->
    <Card v-for="(product, index) in products" :key="index" :content="product" />
  </div>

</template>

<script>
import {
  mapState,
} from 'vuex';
import Card from './Card.vue';

export default {
  props: ['content'],
  components: {
    Card,
  },
  computed: mapState(['products']),

};

</script>

<style>

</style>
