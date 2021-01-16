<template>
    <div>
        <h2>Style Class Array</h2>
        <table class="table">
            <tr v-for="city in cities" :key="city">
                <td :class="[selectedClass, statusClass]"> {{city}} </td>
            </tr>
        </table>
        <hr>
        <table class="table">
            <tr v-for="city in cities" :key="city">
                <td :class="[selectedClass, error ? statusErrorClass : statusClass]"> {{city}} </td>
            </tr>
        </table>
        <input type="text" v-model="error">
    </div>
</template>
<script>
export default {
    name: 'StyleClassArray',
    data: () => {
        return {
            cities: ['Orlando', 'Londres', 'Sidney'],
            selectedClass: 'selected',
            statusClass: 'alert-success',
            statusErrorClass: 'alert-danger',
            error: false
        }
    }
}
</script>
<style>
    .selected {
        text-decoration: underline;
    }
</style>