<template>
    <div>
        <h2>V-once</h2>
        <h3>{{ person.name }}</h3>
        <h3 v-once>{{ person.age }}</h3>
        <input type="text" v-model="person.name">
        <hr>
        <h3>A idade não é alterada, pois está com a diretiva v-once</h3>
        <input type="text" v-model="person.age">

    </div>
</template>
<script>
export default {
    name: 'Vonce',
    data: () => {
        return {
            person: {
                name: 'Eduardo',
                age: 28
            }
        }
    }
}
</script>
<style>
    
</style>