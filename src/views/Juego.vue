<template>
    <div class="juego-style">
        <h1>{{juego.name}}</h1>
        <div class="card-container">
            <div class="card mt-5" style="width: 18rem;">
                <img :src="juego.background_image" class="card-img-top" alt="...">
                <div class="card-body">
                    
                    <!-- <p class="card-text">Description: {{ Juegos.description }}</p> -->
                </div>
                <ul class="list-group list-group-flush">
                    <h5 class="card-title"></h5>
                    <li class="list-group-item"><strong>Name: {{ juego.name }}</strong></li>
                    <li class="list-group-item"><strong>Rating: </strong>{{ juego.rating }}</li>
                    <li class="list-group-item"><strong>Released: </strong>{{ juego.released }}</li>
                    <li class="list-group-item"><strong>Update: </strong>{{ juego.updated }}</li>
                    <li class="list-group-item"><strong>Plataforms: </strong>{{platformsString}}</li>
                </ul>
            </div>
        </div>
        <router-link to="/Juegos"><button class="btn btn-info mt-5">Volver a Juegos</button></router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Juego-name',
    props: {
        id: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            juego: {
                name: "",
                description: "",
                rating: "",
                released: "",
                updated: "",
                background_image:"",
                platforms:[]
            }
        }
    },
    computed: {
        platformsString() {
            return this.juego.platforms.map(platform => platform.platform.name).join(", ");
        }
    },
    methods: {
        getJuego() {
            axios.get(`https://api.rawg.io/api/games/${this.id}?key=d6158005210f4420b6feb873cc6c2129`)
                .then(result => {
                    this.juego = result.data
                    console.log(result.data)
                })
                .catch(error => {
                    console.error(error)
                })
        }
    },
    created() {
        this.getJuego()
    }
}
</script>

<style scoped>
    .juego-style {
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin-top:70px;
    }

    .card-container {
        display: flex;
        justify-content: center;
        /* align-items: center; */
        height: 60vh;
        text-align: start;
    }
    .card{
        border:2px solid lightgray;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
    .btn{
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        color:white;
    }
</style>
