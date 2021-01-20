<template>
    <div>
        <h2>Event Key System Modifiers - Eventos de teclado do Sistema</h2>

        <form action="" class="form" @submit.prevent>
            <div class="form-group">
                <label>Pressione as teclas abaixo</label>

                <input type="text" class="form-control" 
                placeholder="Pressione Ctrl" @keydown.ctrl="exec">

                <input type="text" class="form-control" 
                placeholder="Pressione Alt" @keydown.alt="exec">

                <input type="text" class="form-control" 
                placeholder="Pressione Shift" @keydown.shift="exec">

                <input type="text" class="form-control" 
                placeholder="Pressione Meta" @keydown.meta="exec">
            </div>
        </form>
        <hr>
        <div class="row" >
            <div class="col" @click.ctrl="toggleClass">
                1
            </div>
            <div class="col" @click.ctrl="toggleClass">
                2
            </div>
            <div class="col" @click.ctrl="toggleClass">
                3
            </div>
            <div class="col" @click.ctrl="toggleClass">
                4
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'EventKeySystemModifiers',
    data: () => {
        return {

        }
    },
    methods: {
        exec(e) {
            console.log(e)
            console.log(e.key)
        },
        toggleClass(event) {
            
            // let elemento = event.target
            // let isClass = elemento.classList.contains('bg-info')

            // if(isClass) {
            //     elemento.classList.remove('bg-info')
            // } else {
            //     elemento.classList.add('bg-info')
            // }
            // console.log(elemento)

            //Refatorando o código acima

            let elemento = event.target
            let method = (elemento.classList.contains('bg-info')) ? 'remove' : 'add'
 
            eval(`elemento.classList.${method}('bg-info')`)
            console.log(elemento)

        }
    }
}
</script>
<style>
    
</style>