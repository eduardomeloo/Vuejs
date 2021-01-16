<template>
    <div>
        <h2>Style Inline Multiple</h2>

        <div style="display: -webkit-box">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Culpa, est at dolorem provident in nostrum ad nam hic nesciunt. 
             Magnam, cumque. Cumque, aspernatur illo. Ullam saepe delectus 
             voluptatem eaque modi?
        </div>
        <hr>
        <div :style=" { display: displayStyle} ">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             Culpa, est at dolorem provident in nostrum ad nam hic nesciunt. 
             Magnam, cumque. Cumque, aspernatur illo. Ullam saepe delectus 
             voluptatem eaque modi?
        </div>
    </div>
</template>
<script>
export default {
    name: 'StyleInlineMultiple',
    data: () => {
        return {
            displayStyle: ['-webkit-box','-moz-box-flex','-ms-flexbox']
        }
    }
}
</script>
<style>
    
</style>