<template>
    <div>
        <h2>Mouse Modifiers</h2>

        <form action="" class="form" @submit.prevent>
            <div class="form-group">
                <label>Pressione as teclas abaixo</label>

                <input type="text" class="form-control" 
                placeholder="Clique no botão Esquerdo do Mouse" @click.left="exec">

                <input type="text" class="form-control" 
                placeholder="Clique no botão Direito do Mouse" @click.prevent.right="exec">

                <input type="text" class="form-control" 
                placeholder="Clique no botão scrol do Mouse" @click.middle="exec">

            </div>
        </form>

    </div>
</template>
<script>
export default {
    name: 'MouseModifiers',
    data: () => {
        return {

        }
    },
    methods: {
        exec(e) {
            console.log(e.type)
        }
    },
}
</script>
<style>
    
</style>