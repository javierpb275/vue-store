<template>
<div>
    {{products.length}}
</div>
    
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex';

export default {
    //get products
    mounted() {
        this.fetchProducts();
    },
    //configure pagination
    data() {
        return {
            paginate: ['products'],//paginate is a required key that has to be an array and it gives name to the pagination (products). It is simply an alias
            perPage: 3 //registries that we wanna show per page
        }
    },
    //access products that the http query returns
    computed: {
        //(module, [stateKey])
        ...mapState('products', ['products'])
    },
    //map the action in order to establish the products
    methods: {
        //(module, [action])
        ...mapActions('products', ['fetchProducts'])
    }
}
</script>
