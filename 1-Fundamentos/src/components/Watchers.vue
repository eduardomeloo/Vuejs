<template>
    <div>
        <h1>Watchers - Propriedades Monitoradas</h1>
        <hr>
        <input type="text" v-model="country">
    </div>
</template>
<script>
export default {
    name: 'Watchers',
    data: () => {
        return {
            country: 'Brasil'
        }
    },
    watch: {
        country: function(newValue, oldValue) {
            console.log(newValue, oldValue)
        }
    }
}
</script>
<style>
    
</style>