<template>
    <div class="container mt-5">
        <img src="@/assets/background_04.jpg" alt="">
    </div>
</template>

<script>
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .container{
        display: flex;
        align-items:flex-start;
        justify-content: center;
        width: 30%;
        margin: 0 auto;
        height: 40vh;
    }
    img{
        width: 100%;
        border: 10px solid white;
        box-shadow: 0px 10px 100px rgba(0, 0, 0, 0.3);
        border-radius: 20px;
    }   
</style>