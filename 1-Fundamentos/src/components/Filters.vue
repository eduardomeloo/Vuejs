<template>
  <div>
    <h1>Filtros</h1>
    <p>{{ name }}</p>
    <p>{{ upper(name) }}</p>

    <h2>O meu Salário é: {{ real(salary) }}</h2>
    <input type="text" placeholder="Digite seu Salário" v-model="salary" />
    <hr />
    <input type="text" v-model="name" />
    <h3 v-if="name != ''">O nome está correto: {{ name }}</h3>
    <h3 v-else>O nome está vazio</h3>

    <h4> {{ msg }} </h4>
    <h4> {{ truncateString(msg, 10) }} </h4>
  </div>
</template>
<script>
export default {
  name: "Filters",
  data: () => {
    return {
      name: "Meu Foco é TI",
      salary: 0,
      msg: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Distinctio ab laborum nisi eveniet tenetur, dolorem cupiditate 
            similique mollitia aperiam in doloribus nostrum provident 
            consectetur fugit? Illo corporis dolore facere mollitia!`
    };
  },
  methods: {
    upper: function (value) {
      return value.toUpperCase();
    },
    real: function (value) {
      return `R$ ${parseInt(value).toFixed(2)}`;
    },
    truncateString: function(str, number) {
        if(str.length <= number) return str

        return str.slice(0, number) + '...'
    }
    
  },
};
</script>
<style>
</style>