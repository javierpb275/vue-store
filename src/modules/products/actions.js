//actions are normally rused to get some data and establish that data

//commit: execute a mutation
export async function fetchProducts({state, commit, dispatch, rootState}) {
    const data = await fetch('/fixtures/products.json');
    const products = await data.json();
    //1: module/mutation, 2: data, 3: leave from root store. This way vuex knows that it has to execute the mutation setProducts()
    commit('products/setProducts', products, {root: true});
} 