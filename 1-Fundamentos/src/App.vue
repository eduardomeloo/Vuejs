<template>
  <h1>Capítulo de Fundamentos</h1>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <DataBinding /> -->
    <!-- <Methods /> -->
    <!-- <Computed /> -->
    <!-- <Computed2 /> -->
    <!-- <Computed3 /> -->
    <!-- <Watchers /> -->
    <!-- <Lifecycle /> -->
    <Filters />


</template>

<script>
// import HelloWorld from './components/1-HelloWorld'
// import DataBinding from './components/DataBinding'
// import Methods from './components/Methods'
// import Computed from './components/Computed'
// import Computed2 from './components/Computed2'
// import Computed3 from './components/Computed3'
// import Watchers from './components/Watchers'
// import Lifecycle from './components/Lifecycle'
import Filters from './components/Filters'
export default {
  name: 'App',
  components: { /*
                HelloWorld, 
                DataBinding 
                Methods
                Computed
                Computed2
                Computed3
                Watchers
                Lifecycle*/
                Filters
                }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
