<template>
    <div>
        <h2 v-upper v-reverse>CustomDirectives</h2>

        <h3 v-capitalize> {{ name }} </h3>

        <input type="text" v-model="name">

        <h3 v-lifeCycle> {{ name }} </h3>

        
    </div>
</template>
<script>
import Vue from 'vue'

Vue.directive('reverse', {
    inserted(el) {
        el.innerText = el.innerText.split('').reverse().join('')
    }
})
Vue.directive('upper', {
    inserted(el) {
        el.innerText = el.innerText.toUpperCase()
    }
})
export default {
    name: 'CustomDirectives',
    data: () => {
        return {
            name: 'meu foco é ti'
        }
    },
    directives: {
        capitalize: function(el) {
            let words = el.innerText.split(' ')

            words.forEach((text, index) => {
                words[index] = text.charAt(0).toUpperCase() + text.slice(1)
            });

            el.innerText = words.join(' ')
        },
        lifeCycle: {
            bind(el) {
                console.log('BIND - Fui vinculado a um elemento')
                return el
            },
            inserted(el) {
                el.innerText = el.innerText.toUpperCase()
                console.log('INSERTED - O elemento foi inserido')
            },
            update(el) {
                console.log('UPDATE - O elemento foi atualizado')
                return el
            },
            unbind(el) {
                console.log('UNBIND - O elemento foi desbinculado')
                return el
            },
            componentUpdated(el) {
                console.log('COMPONENTUPDATED - O component foi atualizado')
                return el
            }
        }
    }
}
</script>
<style>
    
</style>