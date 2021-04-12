<template>
    <div v-if="cart.length">
        <b-table striped hover :items="cart" :fields="fields">
            <template v-slot:cell(actions)="cell">
                <b-button size="sm" variant="danger" 
                @click.stop="removeProductFromCart(cell.item)">
                    Remove 
                </b-button>
            </template>
        </b-table>
        <b-alert show variant="success" class="text-center">
           Total Cost: ${{totalCost}}
        </b-alert>
    </div>
    <b-alert v-else show variant="info">No products in your cart</b-alert>
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
