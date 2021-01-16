<template>
    <div>
        <h2>V-on</h2>

        <p v-on:click="reverseMessage">{{ message }}</p>
        <p @click="reverseMessage">{{ message }}</p>

        <p v-on:[eventname]="reverseMessage">{{ message }}</p>
        <input type="text" placeholder="Informe o evento" v-model="eventname">
        <hr>
        <input type="text" placeholder="Filtrar Nomes" @keyup="filterPersons">
        <ul>
            <li v-for="(person, index) in personsFiltred" :key="index">
                {{ person }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Von',
    data: () => {
        return {
            message: 'Vue.js é demais!!!',
            eventname: 'click',
            persons: ['Eduardo','Ester','juninho','Juninha','Teté','Jasminia'],
            personsFiltred: []
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
        },
        filterPersons(event) {
            this.personsFiltred = this.persons.filter(name => {
                return name.toUpperCase().includes(event.target.value.toUpperCase())
            })
        }
    },
    created() {
        this.personsFiltred = this.persons
    },
}
</script>
<style>
    
</style>