import { createProvider } from '../../vue-apollo'
import {
    setToken,
    getToken,
    setUser,
    getUser
} from '../../utils/auth'
import {
    register
} from '../../graphql/mutations/auth'
import {
    login
} from '../../graphql/query/auth'
import router from '../../router'

export default {
    state: {
        user: getUser(),
        token: getToken()
    },
    getters: {
        getUser: state => {
            return state.user
        },
        getToken: state => {
            return state.token
        }
    },
    mutations: {
        SET_USER: (state, value) => {
            state.user = value
        },
        SET_TOEKN: (state, value) => {
            state.token = value
        }
    },
    actions: {
        register: ({ dispatch, commit }, payload) => {
            createProvider().defaultClient
				.mutate({
					mutation: register,
					variables: {
						username: payload.get('username'),
						email: payload.get('email'),
						password: payload.get('password')
					}
				})
				.then(response => {
                    dispatch('setAuthData', response.data.register)
                    router.push({name: 'home'})
				})
                .catch((error) => {
                    console.error(error)
                })
        },
        login: ({ dispatch, commit }, payload) => {
            createProvider().defaultClient
				.query({
					query: login,
					variables: {
						email: payload.get('email'),
						password: payload.get('password')
					}
				})
				.then(response => {
                    dispatch('setAuthData', response.data.login)
                    router.push({name: 'home'})
				})
                .catch((error) => {
                    console.error(error)
                })
        },
        logout: ({ dispatch, commit }, payload) => {
            dispatch('removeAuthData')
            router.push({name: 'home'})
        },
        setAuthData: ({ commit }, payload) => {
            commit('SET_USER', payload.user)
            commit('SET_TOEKN', payload.token)
            setToken(payload.token)
            setUser(payload.user)
        },
        removeAuthData: ({ commit }, payload) => {
            commit('SET_USER', {})
            commit('SET_TOEKN', '')
            setToken('')
            setUser({})
        }
    }
}
