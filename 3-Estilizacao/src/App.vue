<template>
	<div id="app">
		<h1>Estilização</h1>
		<div v-if="false"><StyleInlineObject /></div>
		<div v-if="false"><StyleInlineMultiple /></div>
		<div v-if="false"><StyleInlineArray /></div>
		<div v-if="false"><StyleClass /></div>
		<div v-if="true"><StyleClassArray /></div>
		
		
	</div>
</template>

<script>
import StyleInlineObject from "./components/StyleInlineObject";
import StyleInlineMultiple from "./components/StyleInlineMultiple";
import StyleInlineArray from "./components/StyleInlineArray";
import StyleClass from "./components/StyleClass";
import StyleClassArray from "./components/StyleClassArray";

export default {
	name: "App",
	components: {
		StyleInlineObject,
		StyleInlineMultiple,
		StyleInlineArray,
		StyleClass,
		StyleClassArray
	},
};
</script>

<style>
</style>
