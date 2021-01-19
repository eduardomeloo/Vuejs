<template>
    <div>
        <h2>Orientação da transição</h2>

        <input type="text" v-model="name" />

        <transition name="fade-transition" , mode="in-out">
            <h3 v-if="name.length > 10" key="success" class="alert-success">
                Nome Válido
            </h3>
            <h4 v-else key="error" class="alert-danger">Nome Incorreto</h4>
        </transition>

        <transition name="fade-transition" , mode="out-in">
            <h3 v-if="name.length > 10" key="success" class="alert-success">
                Nome Válido
            </h3>
            <h4 v-else key="error" class="alert-danger">Nome Incorreto</h4>
        </transition>
    </div>
</template>
<script>
export default {
    name: "TransitionOrientation",
    data: () => {
        return {
            name: "Eduardo melo",
        };
    },
};
</script>
<style>
</style>