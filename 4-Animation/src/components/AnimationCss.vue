<template>
    <div>
        <transition name="animation-first">
            <h2 v-if="show">Animações Css</h2>
        </transition>
        <b-button @click="show = !show">Alternar</b-button>
        <b-button @click="show2 = !show2" variant="outline-primary">
            Alternar
        </b-button>
        <hr />
        <transition name="animation-second">
            <div v-if="show2">Vue.js é demais!!!</div>
        </transition>
    </div>
</template>
<script>
export default {
    name: "AnimationCss",
    data: () => {
        return {
            show: true,
            show2: true,
        };
    },
};
</script>
<style>
    .animation-first-enter-active {
        animation: animation_first 1s;
    }
    .animation-first-leave-active {
        animation: animation_first 1s reverse
    }
    @keyframes animation_first {
        from {
            background: #fff;
        } to {
            background: #999;
        }
    }
    /*  */
    .animation-second-enter-active {
        animation: animation_second 1s;
    }
    .animation-second-leave-active {
        animation: animation_second 1.5s reverse;
    }
    @keyframes animation_second {
        0% {
            background-color: #fff;
            font-size: 20px;
        }
        50% {
            background-color: red;
            font-size: 50px;
        }
        100% {
            background-color: #fff;
            font-size: 20px;
        }
    }
</style>