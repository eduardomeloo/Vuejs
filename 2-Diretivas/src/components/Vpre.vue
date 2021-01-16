<template>
  <div>
    <h1>V-pre</h1>
    <h3>{{ message }}</h3>
    <h3 v-pre>{{ message }}</h3>
    <p v-pre v-on:click="showMessage">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quos, sed
      vitae porro architecto nesciunt, rerum omnis voluptatibus corporis sint
      corrupti aspernatur illum nulla amet distinctio consectetur aliquid nisi
      alias?
    </p>
  </div>
</template>
<script>
export default {
    name: "Vpre",
    data: () => {
        return {
        message: "Meu foco é TI",
        };
    },
    methods: {
        showMessage: () => {
            alert('Alerta')
        }
    }
};
</script>
<style>
</style>