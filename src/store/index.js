import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    loadProducts(state, products) {
      console.log(products);
      state.products = products;
    },

  },
  actions: {

    loadProducts({ commit }) {
      axios
        .get('/products.json')
        .then((response) => {
          console.log(response);
          commit('loadProducts', response.data.products);
          console.log(response.data.products.featured);
        });
    },
  },
  modules: {
  },
});
