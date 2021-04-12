import Vue from 'vue'
import Vuex from 'vuex'

//PRODUCTS:
import products from '../modules/products';
//CART:
import cart from '../modules/cart';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    cart
  }
})
