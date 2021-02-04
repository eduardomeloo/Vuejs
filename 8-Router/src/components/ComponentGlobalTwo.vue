<template>
    <div>
        <h2>ComponentGlobalTwo</h2>
        <ul>
            <li v-for="name in names" :key="name">
                {{ name }}
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'ComponentGlobalTwo',
    data: () => {
        return {
            names: ['Juninho','Tété']
        }
    }
}
</script>
<style>
    
</style>