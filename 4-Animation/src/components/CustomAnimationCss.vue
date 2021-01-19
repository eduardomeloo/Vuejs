<template>
    <div>
        <a href="https://animate.style/">Animate CSS</a>
        <hr>
        <transition name="custom"
                    enter-active-class="animated bounce"
                    leave-active-class="animated fadeInDown"
        >
            <h2 v-if="show">Animações CSS Personalizadas</h2>
        </transition>
        <b-button @click="show = !show">Alternar</b-button>
    </div>
</template>
<script>

export default {
    name: 'CustomAnimationCss',
    data: () => {
        return {
            show: true
        }
    }
}
</script>
<style>
    
</style>