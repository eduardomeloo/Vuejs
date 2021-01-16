<template>
    <div>
        <h1>Ciclo de Vida</h1>
        <h2>Empresa: {{ name }}</h2>
        <ul>
            <li v-for="(state) in states" :key="state">
                {{ state.id }} - {{ state.nome }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Lifecycle',
    data: function() {
        return {
            name: 'Meu Foco é TI',
            states: []
        }
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        //console.log('created')
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(res => {
                res.json().then(data => {
                    this.states = data
                })
            }).catch(err => console.log(err))
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    beforeUnmount() {
        console.log('beforeUnmount')
    },
    unmounted() {
        console.log('destroyed')
    }
}
</script>
<style>
    
</style>