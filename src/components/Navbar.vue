<template>
    <div>
        <nav>
            <router-link to="/">Inicio</router-link> |
            <router-link to="/Juegos">Juegos</router-link> |
            <router-link to="/Contacto">Contacto</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'nav-name',
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
    nav{
        background: black;
        color: antiquewhite;
        display: flex;
        gap:10px;
        padding: 15px;
        margin-bottom: 10px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
        position: fixed;
        top: 0;
        width: 100%;
    }
</style>