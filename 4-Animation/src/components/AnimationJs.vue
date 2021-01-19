<template>
    <div>
        <transition name="animation-js"
                    @before-enter="beforeEnter"
                    @enter="enter"
                    @after-enter="afterEnter"
                    @enter-cancelled="enterCancelled"

                    @before-leave="beforeLeave"
                    @leave="leave"
                    @after-leave="afterLeave"
                    @leave-cancelled="leaveCancelled"
        >
            <h2 v-if="show">Animação JS</h2>
        </transition>
        <b-button @click="show = !show">Alternar</b-button>
    </div>
</template>
<script>
export default {
    name: 'AnimationJs',
    data: () => {
        return {
            show: true
        }
    },
    methods: {
        beforeEnter() {
            console.log('beforeEnter')
        },
        enter() {
            console.log('enter')
        },
        afterEnter(el) {
            console.log('afterEnter', el)
            document
                .querySelector('h2')
                .style.backgroundColor = '#ccc'
            
            document
                .querySelector('h2')
                .style.color = 'red'
            
        },
        enterCancelled() {
            console.log('enterCancelled')
        },
        beforeLeave() {
            console.log('beforeLeave')
        },
        leave() {
            console.log('leave')
        },
        afterLeave() {
            console.log('afterLeave')
            alert('O elemento foi Oculto')
        },
        leaveCancelled() {
            console.log('leaveCancelled')
        },
    },
}
</script>
<style>
    
</style>