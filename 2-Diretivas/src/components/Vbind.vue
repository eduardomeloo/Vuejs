<template>
    <div>
        <h2>V-bind</h2>
        <a :href="url">: - Site da Base de Conhecimento</a>
        <hr>
        <a v-bind:href="url">v-bind - Site da Base de Conhecimento</a>

        <p title="Parágrafo"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Voluptate laboriosam quo, error cum quas earum nihil quam, 
            modi id perferendis magni repudiandae omnis eligendi! 
            Esse nostrum obcaecati vel distinctio ducimus.
        </p>
        <p :[arg]="value"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Voluptate laboriosam quo, error cum quas earum nihil quam, 
            modi id perferendis magni repudiandae omnis eligendi! 
            Esse nostrum obcaecati vel distinctio ducimus.
        </p>
    </div>
</template>
<script>
export default {
    name: 'Vbind',
    data: () => {
        return {
            url: 'https://knowledgeready.herokuapp.com/',
            arg: 'title',
            value: 'Parágrafo de exemplo'
        }
    }
}
</script>
<style>
    
</style>