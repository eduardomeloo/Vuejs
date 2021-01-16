<template>
    <div>
        <h1>Computed - Propriedades Armazenadas</h1>
        <h2>Nome: {{ person.firstName }} {{ person.lastName }} </h2>
        <h3>{{ fullName = 'Eduardo Melo' }}</h3>
        <h2>Nome Completo(Computed): {{ fullName }} </h2>
    </div>
</template>
<script>
export default {
    name: 'Computed3',
    data: () => {
        return {
            person: {
                firstName: 'Edu',
                lastName: 'Melo'
            }
        }
    },
    computed: {
        fullName: {
            get: function() {
                return `${this.person.firstName} ${this.person.lastName}`
            },
            set: function(newValue) {
                let name = newValue.split(' ')

                this.person.firstName = name[0]
                this.person.lastName = name[1]
            }
        }
    }
}
</script>
<style>
    
</style>