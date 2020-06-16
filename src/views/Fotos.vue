<template>
    <div>
        <h1>galeria</h1>
        <!-- to recibe dos objetos name= name que esta en la ruta -->
        <!-- to recibe dos objetos params que tiene un id:  item -->
        <router-link :to="{name :'fotos', params: {id:item} }" 
        v-for="(item,index) of fotosArreglo " :key="index" >
            <button>foto {{item}}</button>
        </router-link>

        <Fotografia></Fotografia>
        <button @click="home" >Home</button>
        <button @click="about" >about</button>
        <br>
        <button @click="anterior" >Anterior</button>
        <button @click="siguiente" >Siguiente</button>
    </div>
</template>

<script>

import Fotografia from '@/components/Fotografia.vue';

export default {

    components:{
        Fotografia
    },
    data() {
        return {
            fotosArreglo:[1,2,3,4,5,99]
        }
    },
    methods: {
        // funcion que va a ir a pagina de inicio
        home(){
            this.$router.push('/')
        },
        // funcion que va a ir a pagina de about
        about(){
            this.$router.push('/about')

        },
        // funcion que va a la pagina anterior
        anterior(){
            this.$router.go(-1)

        },
        // funcion que va a la siguiente pagina
        siguiente(){
            this.$router.go(1)

        }
    },
    
}
</script>