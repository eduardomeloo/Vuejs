<template>
    <div>
        <h1>Computed - Propriedades Armazenadas</h1>
        <h2>Nome: {{ person.firstName }} {{ person.lastName }} </h2>
        <h2>Nome Completo: {{ fullName }} </h2>
    </div>
</template>
<script>
export default {
    name: 'Computed',
    data: () => {
        return {
            person: {
                firstName: 'Edu',
                lastName: 'Melo'
            }
        }
    },
    computed: {
        fullName() {
            return `${this.person.firstName} ${this.person.lastName}`
        }
    }
}
</script>
<style>
    
</style>