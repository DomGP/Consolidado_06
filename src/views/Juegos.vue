<template>
    <div class="juegos-style">
        <h1>Juegos</h1>
        <div>
            <div class="grid_game" >
                <div  v-for="(juego, index) in juegos" :key="index">
                    <p class="mb-0">{{juego.name}}</p>
                    <img class="mb-4" @click="redirect(juego.id)" :src="juego.image" alt="img_game">
                </div>
            </div>
        </div>
        <button class="btn btn-info mt-4" @click="getData" >Mostrar Juegos</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Juegos-name',
    // props: {},
    data: function(){
        return {
            juegos:[],
            /* id:1, */
            page:1
        }
    },
    // computed: {},
    methods: {
        getData(){
            axios.get(`https://api.rawg.io/api/games?key=d6158005210f4420b6feb873cc6c2129&page=${this.page}`)
            .then(response=>{
                let results=response.data.results
                results.forEach(juego => {
                    this.juegos.push(juego)
                    juego.image = juego.background_image
                });
                console.log(this.juegos)
                this.page++
            })
            .catch(error=>{
                console.error(error);
            })
        },
        /* getData(){
            axios.get(`https://api.rawg.io/api/games/${this.id}?key=d6158005210f4420b6feb873cc6c2129`)
            .then(response=>{
                let juego = response.data
                juego.image = juego.background_image
                this.juegos.push(juego)
                console.log(this.juegos)
                this.id++
            })
            .catch(error=>{
                console.error(error)
            })
        }, */
        redirect(juegoId) {
            this.$router.push(`/Juegos/${juegoId}`);
        },
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    /* created(){
        this.getData()
    } */
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .juegos-style{
        text-align: center;
        margin-top:60px;
    }
    .grid_game{
        display:grid;
        grid-template-columns:  1fr 1fr 1fr 1fr 1fr;

    }
    img{
        width: 150px;
        height: 150px;
        border-radius: 50%;
        border:2px solid white;
    }
    .btn{
        color:white;
        margin-bottom: 100px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
    .mb-4{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
</style>