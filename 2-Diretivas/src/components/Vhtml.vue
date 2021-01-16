<template>
    <div>
        <h1>V-html</h1>
        <div v-html="headerHTML">
            
        </div>
        <img src="@/assets/logo.png" alt="">
    </div>
</template>
<script>
export default {
    name: 'Vhtml',
    data: function() {
        return {
            headerHTML: `
                    <h2>Meu Foco é TI</h2>
                    <img src="logo2.png" style="max-width: 350px;">
                `
        }
    }
}
</script>
<style>
    
</style>