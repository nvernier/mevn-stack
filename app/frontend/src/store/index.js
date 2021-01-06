import Vue from 'vue'
import Vuex from 'vuex'
import api from '../api'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        bearerToken: null,
        user: {
            username: 'guest',
            is_admin: false
        }
    },
    mutations: {
        login (state, payload) {
            state.bearerToken = payload.bearerToken
            api.defaults.headers.Authorization = `Bearer ${state.bearerToken}`
        },
        logout (state) {
            state.bearerToken = null
            api.defaults.headers.Authorization = null
        }
    },
    actions: {
        async login (context, payload) {
            const response = await api.post('login', {
                user: {
                    username: payload.username,
                    password: payload.password
                }
            })
            context.commit('login', { bearerToken: response.data.token })
            return response
        },
        logout (context) {
            context.commit('logout')
        },
        async register (context, payload) {
            const response = await api.post('register', {
                user: {
                    username: payload.username,
                    password: payload.password,
                    password2: payload.password2
                }
            })
            context.commit('login', { bearerToken: response.data.token })
        }
    },
    getters: {
        isAuthenticated: state => {
            return state.bearerToken != null
        }
    },
    modules: {}
})
