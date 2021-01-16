<template>
    <div>
        <h2>Style Inline - Object</h2>
        <input type="text" v-model="fontSizeProp">
        <h3 :style="{fontSize: fontSizeProp + 'px'}">Eduardo Melo</h3>
        <hr>
        <div style="color: rgb(255,105,80)">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Culpa, est at dolorem provident in nostrum ad nam hic nesciunt. 
             Magnam, cumque. Cumque, aspernatur illo. Ullam saepe delectus 
             voluptatem eaque modi?
        </div>
        <hr>
        <h3>Digite o Valor de cada cor nos campos abaixo</h3>
        <input type="text" placeholder="Vermelho" v-model="styleRed">
        <input type="text" placeholder="Verde" v-model="styleGreen">
        <input type="text" placeholder="Azul" v-model="styleBlue">
        <div :style="styleRgb">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Culpa, est at dolorem provident in nostrum ad nam hic nesciunt. 
             Magnam, cumque. Cumque, aspernatur illo. Ullam saepe delectus 
             voluptatem eaque modi?
        </div>
    </div>
</template>
<script>
export default {
    name: 'StyleInlineObject',
    data: () => {
        return {
            fontSizeProp: 20,
            styleRed: 255,
            styleGreen: 105,
            styleBlue: 80
        }
    },
    computed: {
        styleRgb() {
            return {
                color: `rgb(${this.styleRed},${this.styleGreen},${this.styleBlue})`
            }
        }
    }
}
</script>
<style>
    
</style>