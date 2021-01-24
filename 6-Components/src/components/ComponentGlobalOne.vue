<template>
    <div>
        <h2>Component Global</h2>
        <p>
            Para configurar esse componente como global, foi necessário
            definí-lo no arquivo main.js após isso ele pode ser chamado em
            qualquer módulo, sem a necessidade de importar
        </p>
        <p>{{ text }}</p>

    </div>
</template>
<script>

export default {
    name: "ComponentGlobalOne",
    props: ["text"],
    data: () => {
        return {

        };
    },
};
</script>
<style>
</style>