<template>
    <div>
        <h2>ComponentLocalOne</h2>
        <h3>
            Para usar este componente, deve-se importá-lo 
            dentro do módulo em que deseja incluí-lo, pois
            trata-se de um componente local.
        </h3>
        <ul>
            <listItem v-for="person1 in names" :name="person1" :key="person1+1" />
            <list-item v-for="person2 in names" :name="person2" :key="person2+2" />
        </ul>
    </div>
</template>
<script>
import ComponentLocalTwo from './ComponentLocalTwo'

export default {
    name: 'ComponentLocalOne',
    data: () => {
        return {
            names: ['Juninho','Tété']
        }
    },
    components: {
        listItem: ComponentLocalTwo
    }
}
</script>
<style>
    
</style>