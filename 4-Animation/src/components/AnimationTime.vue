<template>
    <div>
        <h2>Animation Time</h2>
        <hr>
        <transition
            name="animation-time"
            enter-active-class="bounceIn"
            leave-active-class="bounceOut"
            :duration="800"
        >
            <h3 v-if="show">Meu Foco é TI - Duração fixa</h3>
        </transition>

        <transition
            name="animation-time2"
            enter-active-class="animated rollIn"
            leave-active-class="animated zoomOut"
            :duration="{ enter: enter, leave: leave }"
        >
            <h3 v-if="show2">Meu Foco é TI - Duração dinâmica</h3>
        </transition>

        <b-button @click="show = !show">Alternar</b-button>
        <b-button @click="show2 = !show2">Alternar</b-button>
    </div>
</template>
<script>
export default {
    name: 'AnimationTime',
    data: () => {
        return {
            show: true,
            show2: true,
            enter: 10000,
            leave: 10000
        }
    }
}
</script>
<style>
    
</style>