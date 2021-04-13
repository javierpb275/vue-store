import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist';

//PRODUCTS:
import products from '../modules/products';
//CART:
import cart from '../modules/cart';

//Vuex persistence
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  modules: ['cart']
});

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
  },
  plugins: [vuexLocal.plugin]
})
