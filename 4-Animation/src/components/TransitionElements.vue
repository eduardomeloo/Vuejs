
<template>
    <div>
        <h2>Transição Entre Elementos</h2>

        <input type="text" v-model="name">

        <transition name="fade-transition">
            <h3 v-if="name.length >= 10" 
                key="success"
                class="alert-success"
            >
                Nome Válido
            </h3>
            <h4 v-else key="error" class="alert-danger">Nome Incorreto</h4>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'TransitionElements',
    data: () => {
        return {
            name: 'Eduardo Melo'
        }
    }
}
</script>
<style>

    .fade-transition-enter-active,
    .fade-transition-leave-active {
        transition: opacity .3s ease-in-out;
    }

    .fade-transition-enter,
    .fade-transition-leave-to {
        opacity: 0;
    }
</style>