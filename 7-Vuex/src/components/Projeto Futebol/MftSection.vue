<template>
    <div>
        <div class="container">
            <div class="row mt-5">
                <h3>Você está vendo as notícias do: {{ championship }}</h3>
            </div>
        </div>

        <component :is="currentComponent"></component>

        <div class="container">
            <div class="row my-club mt-5">
                <div class="col-6">
                    <h2>Seu club é: {{ myClub }}</h2>
                </div>
                <div class="col-6">
                    <MftInput v-model="myClub" />
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import MftSectionBanner from './MftSectionBanner'
// import MftSectionNews from './MftSectionNews' 
import MftInput from './MftInput'
// import { mapState } from 'vuex'
import { mapGetters } from 'vuex'

export default {
    name: 'MftSection',
    components: {
        MftSectionBanner,
        MftSectionNews: () => import('./MftSectionNews'),
        MftInput
    },
    data: () => {
        return {
            
        }
    },
    props: {
        currentComponent: String
    },
    computed: {
        ...mapGetters({
            championship: 'getChampionship',
            myClub: 'getClubName'
        })
    }

    // computed: {
    //     championship() {
    //         return this.$store.getters.getChampionship
    //     },
    //     myClub() {
    //         return this.$store.getters.getClubName
    //     }
    // }

    // computed: {
    //     ...mapState(['championship']),
    //     ...mapState({
    //         myClub: 'clubName'
    //     })
    // }
    // computed: mapState({
    //     championship: 'championship',
    //     myClub: 'clubName'
    // })
    // computed: {
    //     championship() {
    //         return this.$store.state.championship
    //     },
    //     myClub() {
    //         return this.$store.state.clubName
    //     }
    // }
}
</script>
<style scoped>
    
</style>