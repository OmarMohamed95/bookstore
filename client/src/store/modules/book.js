import { createProvider } from '../../vue-apollo'
import router from '../../router/index'
import { getBook as getBookQuery } from '../../graphql/query/book'

export default {
    state: {
        book: {},
        loading: true
    },
    getters: {
        getBook: state => {
            return state.book
        },
        getLoading: state => {
            return state.loading
        }
    },
    mutations: {
        SET_LOADING: (state, value) => {
            state.loading = value
        },
        SET_BOOK: (state, value) => {
            state.book = value
        }
    },
    actions: {
        getBook: ({ commit }, payload) => {
            createProvider().defaultClient
				.query({
					query: getBookQuery,
					variables: {
						id: router.currentRoute.params.id
					}
				})
				.then(response => {
                    commit('SET_LOADING', false)

                    commit('SET_BOOK', response.data.book)
				})
                .catch((error) => {
                    console.error(error)
                })
        }
    }
}
