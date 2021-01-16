<template>
    <div>
        <h2>V-slot</h2>
        <header>
            <slot name="header"></slot>
        </header>
        <p>
            <slot name="paragrafo"></slot>
        </p>
    </div>
</template>
<script>

export default {
    name: 'Vslot',
    data: () => {
        return {

        }
    }
}
</script>
<style>
    
</style>