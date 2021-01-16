<template>
    <div>
        <h2>V-cloak</h2>
        <p>v-cloak garante que os elementos
            serão exibidos apenas quando a 
            instância Vue for completamente
            carregada
        </p>
        <p>Necessário adicionar CSS para funcionar</p>
        <hr>
        <h4 v-cloak> {{ name }} </h4>
    </div>
</template>
<script>

export default {
    name: 'Vcloak',
    data: () => {
        return {
            name: 'Eduardo'
        }
    },
}
</script>
<style>
    [v-cloak] {
        display: none;
    }
</style>