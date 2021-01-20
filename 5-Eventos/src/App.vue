<template>
    <div id="app">
        <h1>Eventos VueJS</h1>
        <hr>
        <Events v-if="false"/>
        <EventObject v-if="false"/>
        <EventModifiers v-if="false"/>
        <EventKeyModifiers v-if="false"/>
        <EventKeySystemModifiers v-if="false"/>
        <MouseModifiers v-if="false"/>
        <MultipleEvents v-if="true"/>
        
    </div>
</template>

<script>
import Events from "./components/Events";
import EventObject from "./components/EventObject";
import EventModifiers from "./components/EventModifiers";
import EventKeyModifiers from "./components/EventKeyModifiers";
import EventKeySystemModifiers from "./components/EventKeySystemModifiers";
import MouseModifiers from "./components/MouseModifiers";
import MultipleEvents from "./components/MultipleEvents";

export default {
    name: "App",
    components: {
        Events,
        EventObject,
        EventModifiers,
        EventKeyModifiers,
        EventKeySystemModifiers,
        MouseModifiers,
        MultipleEvents
    },
};
</script>

<style>
</style>
