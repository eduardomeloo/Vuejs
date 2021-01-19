<template>
    <div>
        <transition name="first">
            <h2 v-if="show" key="first">Transition CSS</h2>
        </transition>
        <button v-on:click="show = !show">Alternar</button>
        <hr />
        <transition name="second">
            <h2 v-if="show2" key="second">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
                adipisci doloremque aut tenetur, explicabo debitis laboriosam
                ipsum praesentium alias velit quisquam numquam corporis
                cupiditate nostrum, corrupti temporibus, vero deleniti
                voluptatibus!
            </h2>
        </transition>
        <button @click="show2 = !show2">Alternar</button>
    </div>
</template>
<script>
export default {
    name: "TransitionCss",
    data: () => {
        return {
            show: true,
            show2: true,
        };
    },
    methods: {
        changeValue() {
            return (this.show = !this.show);
        },
    },
};
</script>
<style>
    .first-enter-active {
        transition: opacity 0.5s ease;
    }
    .first-leave-active {
        transition: opacity 0.5s ease-out;
    }
    .first-enter,
    .first-leave-to {
        opacity: 0;
    }
    /*  */
    .second-enter-active {
        transition: all .3s linear;
    }

    .second-leave-active {
        transition: all .5s linear;
    }

    .second-enter, .second-leave-to {
        opacity: 0;
    }
</style>