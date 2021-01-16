<template>
    <h1>V-if e V-else</h1>
    <div>
        <h2 v-if="show">Meu Foco é TI</h2>

        <h3 key="available" v-if="tickets >= 50">Há ingressos disponíveis</h3>
        <h3 key="what" v-else-if="tickets > 0">Os ingressos estão acabando</h3>
        <h3 key="empty" v-else> Os ingressos acabaram</h3>

        <input type="text" v-model="tickets">
    </div>
</template>
<script>
export default {
    name: 'VifVelse',
    data: () => {
        return {
            show: true,
            tickets: 100
        }
    }
}
</script>
<style>
    
</style>