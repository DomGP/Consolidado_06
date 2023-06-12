<template>
    <div>
        <footer>
            <router-link to="/"><i class="fa-solid fa-house"></i></router-link>
            | <router-link to="/juegos"><i class="fa-solid fa-gamepad"></i></router-link> |
            <router-link to="/contacto"><i class="fa-solid fa-envelope"></i></router-link>
        </footer>
    </div>
</template>

<script>
export default {
    name: 'Footer-name',
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
    footer{
        display: flex;
        justify-content: center;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        background-color: black;
        padding: 15px;
        box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.3);
        bottom: 0;
        width: 100%;
        text-align: center;
        gap:20px
    }
    p{
        margin-left: 20px;
    }
    router-link{
        margin-right: 50px;
    }
</style>