<template>
    <div>
        <h1>La pagina que buscas no existe</h1>
        <img src="@/assets/found4.jpg" alt="">
        <br>
        <router-link to="/"><button class="btn btn-info">Ir a Inicio</button></router-link>
    </div>
</template>

<script>
export default {
    name: 'NotFound-name',
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
    div{
        text-align: center;
        margin-top:70px;
    }
    img{
        border-radius: 60%;
        border:10px solid black;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
    }
    .btn{
        margin-top:10px;
        color:white;
    }

</style>