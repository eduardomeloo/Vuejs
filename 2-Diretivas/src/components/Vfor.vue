<template>
    <div>
        <h2>V-for</h2>
        <h3>V-for com Array</h3>
        <ol>
            <li v-for="city in cities" :key="'B' + city">{{ city }}</li>
        </ol>
        <hr>
        <h3>V-for com Objeto</h3>
        <ol>
            <li v-for="cityObject in citiesObject" :key="cityObject.city">
                {{ cityObject }}
                {{ cityObject.city }}
                {{ cityObject.country }}
            </li>
        </ol>
        <hr>
        <h3>Filmes</h3>
        <ul>
            <li v-for="(item, index) in movies" :key="index">
                {{ index }}. {{ item }}
            </li>
        </ul>
        <hr>
        <h3>Empresa</h3>
        <p v-for="(value, key, index) in company" :key="index">
                {{index}} - {{ key }}: {{ value }}
        </p>
    </div>
</template>
<script>
export default {
    name: 'Vfor',
    data: () => {
        return {
            cities: ['Campos', 'Macaé', 'Arraial do Cabo'],
            citiesObject: [{
                city: 'São Fidélis',
                country: 'Brasil'
            }, {
                city: 'São Francisco',
                country: 'Brasil'
            }, {
                city: 'São Sebastião',
                country: 'Brasil'
            }],
            movies: ['Os padrinhos', 'Filme 2', 'Filme3'],
            company: {
                name: 'Meu Foco é TI',
                year: 2020,
                creator: 'Eduardo Melo'
            }
        }
    }
}
</script>
<style>
    
</style>