<template>
    <div class="main">
        <h1> Contactanos</h1>
        <form class="form-style" action="">
            <div class="mb-3">
                <label for="FormControlInput1" class="form-label">Nombre Completo</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="example example">
            </div>
            <div class="mb-3">
                <label for="FormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="example@example.com">
            </div>
            <div class="mb-3">
                <label for="FormControlTextarea1" class="form-label">Mensaje</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-info">Enviar</button>
    </form>
    </div>
</template>

<script>
export default {
    name: 'contacto-view',
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
    .main{
        margin-top:60px;
    }
    h1{
        margin-top:20px;
        text-align: center;
    }
    .form-style{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: left;
        margin-top: 50px;
        
    }
    .mb-3{
        width: 30%;
    }
    label{
        margin-bottom: 0;
    }
    .btn{
        color:white;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    }
</style>