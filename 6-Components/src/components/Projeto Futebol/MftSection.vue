<template>
    <div>
        <div class="container">
            <div class="row mt-5">
                <h3>Você está vendo as notícias do: {{ championship }}</h3>
            </div>
        </div>

        <MftSectionBanner />
            
        <MftSectionNews />
    </div>
</template>
<script>
import MftSectionBanner from './MftSectionBanner'
import MftSectionNews from './MftSectionNews'
MftSectionNews
export default {
    name: 'MftSection',
    components: {
        MftSectionBanner,
        MftSectionNews
    },
    props: {
        championship: String
    }
}
</script>
<style scoped>
    
</style>