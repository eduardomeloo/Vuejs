<template>
    <div>
        <h2>Style Inline Array</h2>
        <a href="https://google.com" style="font-size: 30px; color: red">
            Google
        </a>
        <hr>
        <a href="https://google.com" :style="[fontSizeStyle, colorStyle, linkStyle]">
            Google
        </a>
    </div>
</template>
<script>
export default {
    name: 'StyleInlineArray',
    data: () => {
        return {
            fontSizeStyle: {
                fontSize: '30px'
            },
            colorStyle: {
                color: 'red'
            },
            linkStyle: {
                textDecoration: 'none'
            }
        }
    }
}
</script>
<style>
    
</style>