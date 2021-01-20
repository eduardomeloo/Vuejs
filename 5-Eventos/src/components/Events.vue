<template>
    <div>
        <h2>Eventos</h2>
        <b-button 
                class="btn btn-success"
                @click="alerta('Hello World')"
        >
            Clique aqui
        </b-button>
        <hr>
        <b-button @dblclick="add">Adicionar número</b-button>
        <h4>{{ count }}</h4>
    </div>
</template>
<script>
export default {
    name: 'Events',
    data() {
        return {
            count: 0
        }
    },
    methods: {
        alerta(msg) {
            alert(msg)
        },
        add() {
            this.count++
        }
    }

}
</script>
<style>
    
</style>