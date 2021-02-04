<template>
    <div>
        <li>
            {{ name }}
        </li>
    </div>
</template>
<script>
export default {
    name: 'ComponentLocalTwo',
    props:['name'],
    data: () => {
        return {

        }
    }
}
</script>
<style>
    
</style>