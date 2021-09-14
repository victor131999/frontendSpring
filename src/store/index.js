import Vue from 'vue';
import Vuex from 'vuex';

import { auth } from './auth.module';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        username: '',
        token:'',
        isRegisterOpen: false
    },
    mutations: {
        updateToken(state, token){
            state.token = token;
        },
        openRegister(state){
            state.isRegisterOpen = true;
        },
        closeRegister(state){
            state.isRegisterOpen = false
        }
    },
    actions: {
        updateTokenAction(context, token){
            context.commit('updateToken', token);
        },
        openRegisterAction(context){
            context.commit('openRegister')
        },
        closeRegisterAction(context){
            context.commit('closeRegister')
        }
    },
    modules: {
        auth
    },
    getters: {
        token(state){
            return state.token;
        }
    }
});
