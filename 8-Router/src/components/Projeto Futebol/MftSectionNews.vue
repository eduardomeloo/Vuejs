<template>
    <section>
        <div class="container">
            <MftSectionNewsItem 
                v-for="notices in news" :key="notices.id"
                :img-url="notices.img"
                :img-info="notices.imgInfo"
                :news-date="notices.date"
            >
                <template v-slot:title>
                    <h2>{{ notices.title }}</h2>
                </template>
                <p>{{ notices.content | truncate(200)}}</p>
            </MftSectionNewsItem>
            
            <!-- <MftSectionNewsItem
                img-url="news1.jpg"
                img-info="Notícia"
                news-title="Começam os treinos para a nova temporada"
                news-content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ratione ullam temporibus alias exercitationem! Laborum facere suscipit nemo perspiciatis ullam distinctio alias corrupti obcaecati laboriosam beatae, iusto voluptatum, eos itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores, nihil sequi assumenda quisquam corrupti fugit excepturi nisi, quia delectus non vero ipsum explicabo odit numquam velit error ut architecto?"
                news-date="01/01/2020"
            />  /> -->
        </div>
    </section>
</template>
<script>
import MftSectionNewsItem from './MftSectionNewsItem'
import { mapGetters } from 'vuex'
export default {
    name: 'MftSectionNews',
    components: {
        MftSectionNewsItem
    },
    data: () => {
        return {
            
        }
    },
    computed: {
        ...mapGetters({
            news: 'getNews'
        })
    }
}
</script>
<style scoped>
    section {
        padding: 50px 0;
        margin-top: 25px;
        background-color: #F37520;
    }
</style>