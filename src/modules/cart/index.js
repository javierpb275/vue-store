import state from './state';//data
import * as mutations from './mutations';//alter data
import * as getters from './getters';//filter and access data

export default {
    namespaced: true,
    state,
    mutations,
    getters
} 