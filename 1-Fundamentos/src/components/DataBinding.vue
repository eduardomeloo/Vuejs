<template>
    <title >Passagem de dados</title>
    <h1 v-bind:title="tagMessage">{{ message }}</h1>
    <h2> {{ message.toUpperCase() }} </h2>
    <div>
        <p>Meu nome é: {{ person.name }}. Tenho {{ person.age }} anos. </p>
        <p>{{ tag }}</p>
        <span v-html="tag"></span>
    </div>
</template>
<script>
export default {
    name: 'DataBinding',
    data: function() {
        return {
            message: 'Mensagem para ser exibida',
            person: {
                name: 'Edu',
                age: 20
            },
            tag: '<button>Clique Aqui</button>',
            tagMessage: 'Essa é uma mensagem do Vue'
        }
    }
}
</script>
<style>
    
</style>