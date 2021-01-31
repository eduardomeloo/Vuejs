<template>
    <input type="text" :value="value" 
    @keyup="$emit('input', $event.target.value)"
    class="form-control" placeholder="Digite seu club">
</template>
<script>
export default {
    name: 'MftInput',
    /*
        No caso de utilizar o v-bind no componente, deve se utilizar
        a propriedade padrão "value"
    */
    props: {
        value: String
    }
}
</script>
<style>
    
</style>