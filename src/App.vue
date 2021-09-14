<template>
    <v-app>
        <v-main transition="slide-x-transition">
            <div v-if="$store.state.auth.status.loggedIn ">
                <Home/>   
            </div>
            <div  v-if="(!$store.state.auth.status.loggedIn) && !$store.state.isRegisterOpen ">
                <Login/>
            </div>
            <div v-if="(!$store.state.auth.status.loggedIn) && $store.state.isRegisterOpen">
                <Register/>
            </div>
            



            
        </v-main>
      
    </v-app>
    
</template>
<script>
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Home from './views/Home.vue'
export default {
    data(){
        return {
        }
    },
    name: 'App', 
    components: { 
        Login, 
        Register,
        Home,
    }, 
    mounted:function(){
    }
    
}
</script>
