<template>
    <div>
        <h2>CustomDirectivesArgs</h2>
        <h2 v-custom:left="150" > {{ name }} </h2>
        <hr>
        <h3>Dinâmico</h3>
        <h2 v-custom:[argumento]="distance"> {{ name }} </h2>
        <input type="text" v-model="argumento" v-upper>
        <input type="text" v-model="distance" v-upper>

        <h2 v-custom="{ direction: argumento, distance }"> {{ name }} </h2>
    </div>
</template>
<script>

function setDirection(el, binding) {
    el.style.margin = 0;
    //let direction = binding.arg.toLowerCase() Estava assim
    let direction = binding.value.direction

    //let value = binding.value Estava assim
    let value = binding.value.distance

    // el.style.marginLeft = value + 'px';
    switch(direction) {
        case 'left':
        case 'right':
        case 'bottom':
        case 'top': {
            let newDirection = direction.charAt(0).toUpperCase() + direction.slice(1)
            eval(`el.style.margin${newDirection} = ${value} + 'px'`);
            break
        }
        // default:
        //     console.error('Informe uma opção correta')
    }

    // console.log(el, binding)
    // console.log(direction, value)
}
export default {
    name: 'CustomDirectivesArgsq',
    data: () => {
        return {
            name: 'Meu Foco é TI',
            argumento: 'left',
            distance: 150
        }
    },
    directives: {
        custom: {
            bind(el, binding) {
                setDirection(el, binding)
            },
            update(el,binding) {
                setDirection(el, binding)
            }
        },
        upper: {
            inserted(el){
                el.value = el.value.toLowerCase()
            },
            update(el) {
                el.value = el.value.toLowerCase()
            }
        }
    }
}
</script>
<style>
    
</style>