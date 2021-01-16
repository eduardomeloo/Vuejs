<template>
    <div>
        <h2>V-model</h2>
        <h3 style="font-size: 20px">Meu Foco é TI</h3>
        <h3 :style=" { fontSize: textSize + 'px' } ">Meu Foco é TI</h3>
        <input type="text" placeholder="Digite o tamanho da fonte"
            v-model="textSize">
        
        <h4 :style=" { color: textColor } ">Que texto bacana</h4>

        <input type="text" placeholder="Digite a cor aqui" 
            v-model="textColor">

        <ul>
            <li>Modificadores</li>
            <li>.number -> Transforma o valor da propriedade de string para número</li>
            <li>.trim -> Remove os espaços antes e depois da propriedade</li>
            <li>.lazy -> Definimos que os eventos de mudança serão ouvidos</li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Vmodel',
    data: () => {
        return {
            textSize: 10,
            textColor: 'green'
        }
    }
}
</script>
<style>
    
</style>