<template>
    <div>
        <h2>Multiplos Eventos</h2>
        <div class="exemplo">

        </div>
        <hr>
        <div :style="{backgroundColor: background, width: '200px',
        height: '200px'}" @mouseenter="changeColor" @mouseout="changeColor">
        </div>
        <hr>
        <div :style="{backgroundColor: background, width: '200px',
        height: '200px'}" v-on="{mouseenter: changeColor, mouseout: changeColor}">
        </div>
    </div>
</template>
<script>
export default {
    name: 'MultipleEvents',
    data: () => {
        return {
            background: 'blue'
        }
    },
    methods: {
        changeColor() {
            let backgroundColor = (this.background == 'blue') ? 'red' : 'blue'

            this.background = backgroundColor
        }
    }
}
</script>
<style>
    .exemplo {
        background-color: blue; 
        width: 200px;
        height: 200px;
    }
</style>