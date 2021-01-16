<template>
    <h1>Métodos</h1>
    <h2> {{ message }} </h2>
    <div>
        <input  type="text" 
                placeholder="Digite uma nova mensaem"
                v-on:blur="replaceMessage($event.target.value)">
    </div>
</template>
<script>
export default {
    name: 'Methods',
    data: function() {
        return {
            message: 'Mensagem para ser exibida'
        }
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        },
        replaceMessage(newMessage) {
            this.message = newMessage
        }
    }
}
</script>
<style>
    
</style>