<template>
    
</template>

<script>
import {mapGetters, mapMutations, mapState} from 'vuex';

export default {
    data() {
        return {
            fields: ['name', 'qty', 'price', 'actions']//fields: definition of columns
        }
    },
    computed: {
        //(module, [state])
        ...mapState('cart', ['cart']),
        //(module, [getter])
        ...mapGetters('cart', ['totalCost']),
    },
    methods: {
        //(module, [mutation])
      ...mapMutations('cart', ['removeProductFromCart'])  
    }
}
</script>
