<template>
    <div>
        <h2>Event Object</h2>
        <b-button pill variant="outline-danger" v-on:click="call($event)">
            Clique aqui para visualizar os eventos do objeto no log
        </b-button>
        <hr>
        <a href="https://knowledgeready.herokuapp.com/"
        @click.prevent="call($event)">Base de Conhecimento</a>
    </div>
</template>
<script>
export default {
    name: 'EventObject',
    data: () => {
        return {

        }
    },
    methods: {
        call(e) {
            console.log(e)
        }
    }
}
</script>
<style>
    
</style>