<template>
    <div>
        <h1>Computed - Propriedades Armazenadas</h1>
        <h2>Nome: {{ person.firstName }} {{ person.lastName }} </h2>
        <h2>Nome Completo(Computed): {{ fullName }} </h2>
        <h2>Nome Completo(Computed): {{ fullName }} </h2>
        <h2>Nome Completo(Computed): {{ fullName }} </h2>
        <h2>Nome Completo(Computed): {{ fullName }} </h2>
        <h2>Nome Completo(Computed): {{ fullName }} </h2>
        <h2>Nome Completo(Method): {{ getFullName() }} </h2>
        <h2>Nome Completo(Method): {{ getFullName() }} </h2>
        <h2>Nome Completo(Method): {{ getFullName() }} </h2>
    </div>
</template>
<script>
export default {
    name: 'Computed2',
    data: () => {
        return {
            person: {
                firstName: 'Edu',
                lastName: 'Melo'
            }
        }
    },
    methods: {
        getFullName() {
            console.log('MÉTODO')
            return `${this.person.firstName} ${this.person.lastName}`
        }
    },
    computed: {
        fullName() {
            console.log('COMPUTED')
            return `${this.person.firstName} ${this.person.lastName}`
        }
    }
}
</script>
<style>
    
</style>