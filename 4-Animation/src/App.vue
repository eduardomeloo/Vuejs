<template>
    <div id="app">
        <h1>Animações</h1>
        <TransitionCss v-if="false"/>
        <AnimationCss v-if="false"/>
        <CustomAnimationCss v-if="false"/>
        <AnimationJs v-if="false"/>
        <AnimationTime v-if="false"/>
        <TransitionElements v-if="false"/>
        <TransitionOrientation v-if="true"/>
    </div>
</template>

<script>
import TransitionCss from "./components/TransitionCss";
import AnimationCss from "./components/AnimationCss";
import CustomAnimationCss from "./components/CustomAnimationCss";
import AnimationJs from "./components/AnimationJs";
import AnimationTime from "./components/AnimationTime";
import TransitionElements from "./components/TransitionElements";
import TransitionOrientation from "./components/TransitionOrientation";

export default {
    name: "App",
    components: {
                    TransitionCss, 
                    AnimationCss,
                    CustomAnimationCss,
                    AnimationJs,
                    AnimationTime,
                    TransitionElements,
                    TransitionOrientation
                 },
};
</script>

<style>
</style>
