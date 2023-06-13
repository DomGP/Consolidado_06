<template>
    <div class="main">
        <Banner/>
        <div class="container_grid">
        <div>
            <h2>Bienvenido</h2> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi, exercitationem quasi quidem dolores eos velit eligendi ea reprehenderit recusandae quisquam quaerat tenetur consequatur perspiciatis quam mollitia cupiditate, unde dolorum.
            Rerum fuga praesentium labore sint eius nostrum eaque voluptates qui porro sit. Expedita voluptates consectetur modi beatae quae saepe? Illo praesentium laboriosam rerum vel. Vero illo nihil quia! Labore, nihil.
            Quod laborum repellat molestiae beatae totam ab itaque, adipisci quo voluptatem inventore accusantium! Possimus optio omnis dolorem maxime! Neque rem fugit eum beatae vitae, ab praesentium iusto porro cum odit.</p>
        </div>
        <div>
            <h2>Juegos</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur fugit dolor architecto, hic nobis rerum ducimus pariatur blanditiis eos minima dignissimos illo perferendis ipsam labore quia necessitatibus, ad quos?
            Ratione odio maxime numquam distinctio! Exercitationem cumque neque enim dolor numquam vel nulla tempore, totam aperiam qui eveniet, dicta, excepturi quis deserunt facilis! Perspiciatis obcaecati impedit eum cum expedita esse!
            Sapiente excepturi illum harum quod mollitia, rerum optio tenetur dolorum, sunt cumque repellendus obcaecati a. Dolorem, ratione illum. Nam necessitatibus voluptatum cumque voluptate debitis, pariatur mollitia molestiae placeat error quibusdam!</p>
        </div>
    </div>
    </div>
</template>

<script>
import Banner from '@/components/Banner.vue'
export default {
    name: 'Inicio-name',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        Banner
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    .main{
            margin-top:80px;
        }
    .container_grid{
        display:grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 40vh auto;
        grid-gap:50px;
        width:80%;
        margin:0 auto;
        text-align: justify;
    }
</style>