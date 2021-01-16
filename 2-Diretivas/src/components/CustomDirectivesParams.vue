<template>
    <div>
        <div v-if="true">
            <h3>Parâmetros</h3>
        <ul>
            <li>el > Elemento que a diretiva está vinculada</li>
            <li>binding > Um objeto que traz informações úteis, como o valor informado para a diretiva(value), o valor antigo(oldValue) e os modificadores(modifiers)</li>
            <li>vnode > O nó HTMl virtual produzido pelo Vue</li>
            <li>oldVnode > O nó HTMl virtual antigo(Só terá um valor se estivermos nas funções update() ou componentUpdated())</li>
        </ul>
        <h3>Todas as opções da variável binding</h3>
        <ul>
            <li>name: Nome da diretiva, sem o prefixo "v-"</li>
            <li>value: Valor informado para a diretiva</li>
            <li>oldValue: Valor antigo da variável, se ela possuir</li>
            <li>expression: Expressão JavaScript informada para a diretiva</li>
            <li>
                <xmp>
                    modifiers: Um objeto com todos os modificadores informados.
                    Eles são identificados por meio do .(ponto). 
                    Ex:. &ltp v-native.mod1&gt será retornado "{ mod1: true }"
                </xmp>
            </li>
            <li>
                <xmp>
                    Se informarmos algum argumento para a diretiva com : (dois pontos),
                    ele será exibido aqui. Ex: &ltimg v-blank:argumento&gt. 
                    Será retornado "argumento"
                </xmp>
            </li>
        </ul>
        </div>
        <h2>CustomDirectivesParams</h2>
        <input type="text" v-model="name">
        <h2 v-custom> {{ name }} </h2>
        <h2 v-custom="'Informação'"> {{ name }} </h2>
        <h2 v-custom:parametro="'Informação'"> {{ name }} </h2>
        <h2 v-custom:parametro.mod1.mod2="'Informação'"> {{ name }} </h2>
    </div>
</template>
<script>
export default {
    name: 'CustomDirectivesParams',
    data: () => {
        return {
            name: 'Meu foco é TI'
        }
    },
    directives: {
        custom: {
            inserted(el, binding, vnode) {
                console.log(el.innerText)
                console.log(el)
                console.log(binding)
                console.log(vnode)
                
                el.style.color = 'red'
            },
            update(el, binding, vnode, oldvnode) {
                console.log(vnode, oldvnode)

                el.style.textDecoration = 'underline'
            }
        }
    }
}
</script>
<style>
    
</style>