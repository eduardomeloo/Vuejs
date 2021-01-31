import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        championship: 'Campeonato Brasileiro',
        clubName: 'Meu foco é TI',
        news: [{
            id: 1,
            title: 'Começam os treinos para a nova temporada',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ratione ullam temporibus alias exercitationem! Laborum facere suscipit nemo perspiciatis ullam distinctio alias corrupti obcaecati laboriosam beatae, iusto voluptatum, eos itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores, nihil sequi assumenda quisquam corrupti fugit excepturi nisi, quia delectus non vero ipsum explicabo odit numquam velit error ut architecto?',
            date: '2020-01-01',
            img: 'news1.jpg',
            imgInfo: 'Notícia 1'
        },{
            id: 2,
            title: 'Começam os treinos para a nova temporada',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ratione ullam temporibus alias exercitationem! Laborum facere suscipit nemo perspiciatis ullam distinctio alias corrupti obcaecati laboriosam beatae, iusto voluptatum, eos itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores, nihil sequi assumenda quisquam corrupti fugit excepturi nisi, quia delectus non vero ipsum explicabo odit numquam velit error ut architecto?',
            date: '2020-01-20',
            img: 'news2.jpg',
            imgInfo: 'Notícia 2'
        },{
            id: 3,
            title: 'A inauguração do novo estádio será semana que vem',
            content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero ratione ullam temporibus alias exercitationem! Laborum facere suscipit nemo perspiciatis ullam distinctio alias corrupti obcaecati laboriosam beatae, iusto voluptatum, eos itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere maiores, nihil sequi assumenda quisquam corrupti fugit excepturi nisi, quia delectus non vero ipsum explicabo odit numquam velit error ut architecto?',
            date: '2020-01-10',
            img: 'news3.jpg',
            imgInfo: 'Notícia 3'
        }]
    },
    getters: {
        getChampionship(state) {
            return state.championship
        },
        getClubName(state) {
            return state.clubName
        },
        getNews(state) {
            return state.news
        }
    },
    mutations: {
        setChampionship(state, newValue) {
            state.championship = newValue
        }
    },
    actions: {
        changeChampionship(context, value) {
            context.commit('setChampionship', value)
        }
    }
})