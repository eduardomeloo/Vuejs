<template>
    <div>
        <h2>Style Class</h2>

        <input type="text" v-model="isLogged">
        <input type="text" v-model="error">
        <h3 :class="{ logged: isLogged }">Seja bem vindo ao Sistema</h3>
        <hr>
        <h3 :class="classMessage">{{ message }}</h3>
    </div>
</template>
<script>
export default {
    name: 'StyleClass',
    data: () => {
        return {
            isLogged: false,
            error: false
        }
    },
    computed: {
        message: function() {
            return (!this.error) ? 'Está tudo bem!' : 'Há algo errado'
        },
        classMessage: function() {
            return (!this.error) ? 'alert-success' : 'alert-danger'
        }
    }
}
</script>
<style>
    .logged {
        color: red;
        text-decoration: underline;
    }
</style>