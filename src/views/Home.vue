<template>
  <!-- PASSER PROPS POUR PASSER DONNEES + BOUCLE -->
  <Products v-for="(product, index) in products" :key="index" :content="product"/>
</template>

<script>
import {
  mapState,
} from 'vuex';
import Products from '../components/Products.vue';

export default {
  name: 'Home',
  components: {
    Products,
  },

  computed: mapState(['products']),
};

</script>
