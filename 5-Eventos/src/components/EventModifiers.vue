<template>
    <div>
        <h2>Eventos Modificadores</h2>
        <b-button @click="viewModifiers = !viewModifiers">
            Exibir Modificadores
        </b-button>
        <b-list-group v-if="viewModifiers">
            <b-list-group-item>
                <b>prevent:</b> Cancela o comportamento padrão do evento. Similar ao preventDefault()
            </b-list-group-item>
            <b-list-group-item>
                <b>stop:</b> Para a propagação de eventos. Similar ao stopPropagation()
            </b-list-group-item>
            <b-list-group-item>
                <b>once:</b> Executa o evento apenas uma vez
            </b-list-group-item>
            <b-list-group-item>
                <b>self:</b> Garante que o evento ocorrerá apenas no elemento que foi aplicado,
                não em elementos filhos.
            </b-list-group-item>
            <b-list-group-item>
                <b>capture:</b> Usa o modelo de captura dos eventos para que a propagação de
                eventos ocorra "de cima para baixo" na árvore do DOM
            </b-list-group-item>
            <b-list-group-item>
                <b>passive:</b> Modificador que melhora a perfomance na questão da barra
                de rolagem da aplicação, principalmente nos dispositivos mobile.
            </b-list-group-item>
        </b-list-group>
        <div class="container">
            <h2>Verificar dados do formulário no Log</h2>
            <!-- form.form>div.row>div.col>div.form-group>label+input -->
            <form action="" class="form">
                <div class="row">
                    <div class="col">
                        <div class="form-group">
                            <label for="">Nome</label>
                            <input type="text" class="form-control" 
                            name="username" placeholder="Digite seu nome">
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="">E-mail</label>
                            <input type="email" class="form-control"
                            name="email" placeholder="Digite seu E-mail">
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <label for="">Digite sua mensagem</label>
                    <textarea class="form-control" name="message" id="" cols="30" rows="10"></textarea>
                </div>
                <button @click.prevent="send($event)" type="submit" class="btn btn-primary">
                    Enviar o formulário
                </button>
            </form>
            <hr>
            <a href="https://knowledgeready.herokuapp.com/" 
            @click.prevent.once="alerta('Olá')" @click.prevent="">Base de Conhecimento</a>
        </div>
    </div>
</template>
<script>
export default {
    name: 'EventModifiers',
    data: () => {
        return {
            viewModifiers: false
        }
    },
    methods: {
        send(event) {
            console.log(event)

            let form = event.target.form
            console.log(form)

            let data = new FormData(form)
            console.log(data)

            for (let value of data.entries()) {
                console.log(`${value[0]}: ${value[1]}`)
            }
        },
        alerta(msg) {
            alert(msg)
        }
    },
}
</script>
<style>
    
</style>