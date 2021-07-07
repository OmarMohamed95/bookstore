import { createProvider } from '../../vue-apollo'
import router from '../../router/index'
import {
    getAuthor as getAuthorQuery
} from '../../graphql/query/author'

export default {
    state: {
        loading: true,
        author: {}
    },
    getters: {
        getAuthor: state => {
            return state.author
        },
        getLoading: state => {
            return state.loading
        }
    },
    mutations: {
        SET_LOADING: (state, value) => {
            state.loading = value
        },
        SET_AUTHOR: (state, value) => {
            state.author = value
        }
    },
    actions: {
        getAuthor: ({ commit }, payload) => {
            createProvider().defaultClient
				.query({
					query: getAuthorQuery,
					variables: {
						id: router.currentRoute.params.id
					}
				})
				.then(response => {
                    commit('SET_LOADING', false)

                    commit('SET_AUTHOR', response.data.author)
				})
                .catch((error) => {
                    console.error(error)
                })
        }
    }
}
