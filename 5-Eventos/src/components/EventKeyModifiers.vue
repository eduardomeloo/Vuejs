<template>
    <div>
        <h2>Event Key Modifiers - Modificadores de teclado</h2>

        <form action="" class="form" @submit.prevent>
            <div class="row">
                <div class="col">
                    <div class="form-group">
                        <label for="">Nome</label>
                        <input class="form-control" type="text" 
                        name="username" placeholder="Digite seu nome"
                        @keyup.enter="send($event)">
                    </div>
                </div>
            </div>
        </form>
        <div class="form-group">
            <label>Pressione as teclas abaixo</label>

            <input type="text" class="form-control" 
            placeholder="Pressione Enter" @keyup.enter="exec">

            <input type="text" class="form-control" 
            placeholder="Pressione Tab" @keydown.tab="exec">

            <input type="text" class="form-control" 
            placeholder="Pressione Delete" @keyup.delete="exec">

            <input type="text" class="form-control" 
            placeholder="Pressione Esc" @keyup.esc="exec">

            <input type="text" class="form-control" 
            placeholder="Pressione Space" @keyup.space="exec">

            <input type="text" class="form-control" 
            placeholder="Pressione Up" @keyup.up="exec">

            <input type="text" class="form-control" 
            placeholder="Pressione Down" @keyup.down="exec">

            <input type="text" class="form-control" 
            placeholder="Pressione Left" @keyup.left="exec">

            <input type="text" class="form-control" 
            placeholder="Pressione Right" @keyup.right="exec">

        </div>
    </div>
</template>
<script>

export default {
    name: 'EventKeyModifiers',
    data: () => {
        return {

        }
    },
    methods: {
        send(event) {
            let form = event.target.form
            console.log(form)

            let data = new FormData(form)
            console.log(data)

            console.log(data.entries())

            for (let value of data.entries()) {
                console.log(`${value[0]}: ${value[1]}`)
            }
        },
        exec(e) {
            console.log(e)
            console.log(e.key)
        }
    }
}
</script>
<style>
    
</style>