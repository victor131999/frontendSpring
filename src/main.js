import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuelidate from 'vuelidate';
import '@babel/polyfill';
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast:true,
    position:'top-end',
    showConfirmButton:false, 
    timer:3000, 
    timerProgressBar: true,
    didOpen: (toast)=>{
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)

    }
})
axios.interceptors.response.use(
    function(response){
        Toast.fire({
            icon: 'success',
            title: 'Listo!'
        });
        return response;
    }, function(err){
        console.log(err.response.data.ModelState)
        var message = []
        if(err.response.data.error_description){
            console.log('1')
            message.push(err.response.data.error_description)
        }
        if(err.response.data.Message){
            
            message.push(err.response.data.Message)
        }
        if(err.response.data.Message && !err.response.data.ModelState){
            console.log('2')
            message.push(err.response.data.Message)
        }
        if(err.response.data.ModelState){
            console.log('3')
            message = Object.keys(err.response.data.ModelState).map(function(key){
                return key + ': ' +err.response.data.ModelState[key]
            }).join('\n');
        }
        Toast.fire({
            icon: 'warning',
            title: message
        });
        return Promise.reject(err)
    }
)
Vue.use(Vuelidate);
axios.interceptors.response
Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
