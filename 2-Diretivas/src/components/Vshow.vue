<template>
    <h1>V-show</h1>
    <div>
        <h2 v-show="isLogged">v-show - Seja bem vindo a área administrativa</h2>

        <h2 v-if="isLogged">v-if - Seja bem vindo a área administrativa</h2>
    </div>
</template>
<script>
export default {
    name: 'Vshow',
    data: function() {
        return {
            isLogged: true
        }
    }
}
</script>
<style>
    
</style>