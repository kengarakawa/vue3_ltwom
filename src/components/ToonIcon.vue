<template>
    <div class="p-2 mx-1 toonIcon" :title="toon.name" @click="onclick">
        {{ toon.name }}
    </div>
</template>


<style>
    .toonIcon {
        width: 75px;
        height:75px;
        background:#CCFF33;
        overflow:hidden ;
        display:inline-block;
        border-radius:33px ;
        cursor:pointer;
    }
</style>


<script>
    export default {
        name : 'ToonIcon' , 
        props: {
            'toon' : {
                required: true 
            } , 
            click : {}
        } , 
        mounted() {
        }
    }
</script>