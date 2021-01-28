<template>
    <div>
        <div class="container">
            <div class="row mt-5">
                <h3>Você está vendo as notícias do: {{ championship }}</h3>
            </div>
        </div>

        <MftSectionBanner />
            
        <MftSectionNews />

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
import MftSectionNews from './MftSectionNews'
import MftInput from './MftInput'

export default {
    name: 'MftSection',
    components: {
        MftSectionBanner,
        MftSectionNews,
        MftInput
    },
    data: () => {
        return {
            myClub: 'Meu foco é TI'
        }
    },
    props: {
        championship: String
    }
}
</script>
<style scoped>
    
</style>