<template>
    <section>
        <div class="container">
            <MftSectionNewsItem
                img-url="news1.jpg"
                img-info="Notícia"
                news-title="Começam os treinos para a nova temporada"
                news-content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ratione ullam temporibus alias exercitationem! Laborum facere suscipit nemo perspiciatis ullam distinctio alias corrupti obcaecati laboriosam beatae, iusto voluptatum, eos itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores, nihil sequi assumenda quisquam corrupti fugit excepturi nisi, quia delectus non vero ipsum explicabo odit numquam velit error ut architecto?"
                news-date="01/01/2020"
            />

            <MftSectionNewsItem 
                img-url="news2.jpg"
                img-info="Notícia 3"
                news-title="A inauguração do novo estádio será semana que vem"
                news-content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ratione ullam temporibus alias exercitationem! Laborum facere suscipit nemo perspiciatis ullam distinctio alias corrupti obcaecati laboriosam beatae, iusto voluptatum, eos itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores, nihil sequi assumenda quisquam corrupti fugit excepturi nisi, quia delectus non vero ipsum explicabo odit numquam velit error ut architecto?"
                news-date="20/01/2020"
            />

            <MftSectionNewsItem 
                img-url="news3.jpg"
                img-info="Notícia"
                news-title="Começam os treinos para a nova temporada"
                news-content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ratione ullam temporibus alias exercitationem! Laborum facere suscipit nemo perspiciatis ullam distinctio alias corrupti obcaecati laboriosam beatae, iusto voluptatum, eos itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores, nihil sequi assumenda quisquam corrupti fugit excepturi nisi, quia delectus non vero ipsum explicabo odit numquam velit error ut architecto?"
                news-date="01/01/2020"
            />
        </div>
    </section>
</template>
<script>
import MftSectionNewsItem from './MftSectionNewsItem'
export default {
    name: 'MftSectionNews',
    components: {
        MftSectionNewsItem
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