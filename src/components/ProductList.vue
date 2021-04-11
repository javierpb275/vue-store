<template>
<div v-if="products.length">
    <paginate name="products" :list="products" :per="perPage"> 
        <b-card-group columns>
            <product-item v-for="product in paginated('products')"
            :product="product" :key="product.id" @addToCart="addProductToCart">
            </product-item>
        </b-card-group>
    </paginate>
    <paginate-links for="products" :classes="{
        'ul': 'pagination',
        'li': 'page-item',
        'li > a': 'page-link'
    }">
    </paginate-links>  
</div>
</template>

<script>
import {mapActions, mapMutations, mapState} from 'vuex';
import ProductItem from './ProductItem';

export default {
    components: {
        ProductItem
    },
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
        ...mapActions('products', ['fetchProducts']),
        addProductToCart(product) {
            console.log(product);
        }
    }
}
</script>
