<template>
    <div>
        <div class="row">
            <div class="col-3">
                <img :src="require(`@/assets/${imgUrl}`)" :alt="imgInfo">
            </div>
            <div class="col-9">
                <h2>{{ newsTitle }}</h2>
                <p>{{ newsContent | truncate(200)}}</p>

                <span class="font-italic">{{ newsDate }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'MftSectionNewsItem',
    props: {
        imgUrl: {
            type: String,
            required: true
        },
        imgInfo:{
            type: String,
            required: true
        },
        newsTitle: {
            type: String,
            required: true
        },
        newsContent: {
            type: String,
            required: true
        },
        newsDate: {
            type: String,
            required: true
        }
    }
}
</script>
<style>
    .row {
        margin-bottom: 30px;
    }
    img {
        width: 100%;
    }
    h2 {
        cursor: pointer;
        color: #fff;
    }
</style>