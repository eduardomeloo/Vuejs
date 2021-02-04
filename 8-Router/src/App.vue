<template>
    <div id="app">
        <h1 v-if="false">Módulo de Components</h1>
        <ComponentGlobalOne v-if="false" text="Propriedade do componente" />
        <ComponentGlobalOne v-if="false" text="Meu foco é TI" />
        <ComponentGlobalTwo v-if="false" />
        <ComponentLocalOne v-if="false" />
        <MftHeader @select-championship="changeChampionship"
                   @change-component="changeComponent" />
        <MftSection :current-component="currentSectionComponent" />
        <MftFooter />
        
        

    </div>
</template>

<script>
import ComponentLocalOne from "./components/ComponentLocalOne";
import MftHeader from "./components/Projeto Futebol/MftHeader";
import MftFooter from "./components/Projeto Futebol/MftFooter";
import MftSection from "./components/Projeto Futebol/MftSection";
// import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'

export default {
    name: "App",
    components: {
        ComponentLocalOne,
        MftHeader,
        MftFooter,
        MftSection
    },
    data: () => {
        return {
            currentSectionComponent: 'MftSectionBanner'
        }
    },
    methods: {
        ...mapActions({
            changeChampionship: 'changeChampionship'
        }),
        // ...mapActions(['changeChampionship']),

        // changeChampionship(value) {
        //     this.$store.dispatch('changeChampionship', value)
        // },

        // ...mapMutations({
        //     changeChampionship: 'setChampionship'
        // }),
        
        // changeChampionship(value) {
        //     this.$store.commit('setChampionship', value)
        // },
        changeComponent(value) {
            
            let component
            switch(value) {
                case 'home':
                default:
                    component = 'MftSectionBanner'
                break
                case 'news':
                    component = 'MftSectionNews'
                break
            }
            this.currentSectionComponent = component
        }
    }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rajdhani&display=swap');
</style>
