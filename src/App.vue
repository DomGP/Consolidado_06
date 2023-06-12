<template>
  <div id="app">
    <Navbar/>
    <Footer/>
    <transition name="router-anim" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar.vue'

import Footer from '@/components/Footer.vue'
export default {
    name: 'NotFound-name',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
      Navbar,
      Footer
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style>

body{
  background-image: url("@/assets/background2.jpg");
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color:white
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: lightslategray;
}

nav a.router-link-exact-active {
  color: white;
}
.router-anim-enter-active{
  animation: coming 1s;
  animation-delay: .5s;
  opacity: 0;
}
.router-anim-leave-active{
  animation: going 1s;
}

@keyframes coming{
  from{
    transform: translateX(-50px);
    opacity:0
  }
  to{
    transform: translateX(0px);
    opacity:1
  }
}

@keyframes going{
  0%{
    transform: translateX(0px);
  }
  100%{
    transform: translateX(-50px);
    opacity:0
  }
}
</style>
