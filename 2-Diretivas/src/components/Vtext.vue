<template>
    <h1>V-text</h1>
    <div>
        <h3> {{ name }} </h3>
        <h3 v-text="name"></h3>
    </div>
</template>
<script>
export default {
    name: 'Vtext',
    data: () => {
        return {
            name: 'Eduardo Melo'
        }
    }
}
</script>
<style>
    
</style>