<template>
    <div id="app">
        <h1>Módulo de Components</h1>
        <ComponentGlobalOne v-if="false" text="Propriedade do componente" />
        <ComponentGlobalOne v-if="false" text="Meu foco é TI" />
        <ComponentGlobalTwo  v-if="false" />
        <ComponentLocalOne v-if="true" />

    </div>
</template>

<script>
import ComponentLocalOne from "./components/ComponentLocalOne";

export default {
    name: "App",
    components: {
        ComponentLocalOne
    },
};
</script>

<style>
</style>
