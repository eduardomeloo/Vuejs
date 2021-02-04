<template>
    <input type="text" :value="value" 
    @keyup="changeName($event.target.value)"
    class="form-control" placeholder="Digite seu club">

    <!-- <input type="text" :value="value" 
    @keyup="$emit('input', $event.target.value)"
    class="form-control" placeholder="Digite seu club"> -->
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    name: 'MftInput',
    computed: {
        ...mapGetters({
            value: 'getClubName'
        })
    },
    methods: {
        ...mapActions({
            changeName: 'updateClubName'
        })
    }
    /*
        No caso de utilizar o v-bind no componente, deve se utilizar
        a propriedade padrão "value"
    */

    // props: {
    //     value: String
    // }
}
</script>
<style>
    
</style>