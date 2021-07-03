import { createProvider } from '../../vue-apollo'
import { getBooks as getBooksQuery } from '../../graphql/query/book'

export default {
    state: {
        books: {
            loading: true,
            data: {}
        }
    },
    getters: {
        getBooks: state => {
            return state.books
        }
    },
    mutations: {
        SET_BOOKS_LOADING: (state, value) => {
            state.books.loading = value
        },
        SET_BOOKS_DATA: (state, value) => {
            state.books.data = value
        }
    },
    actions: {
        getBooks: ({ commit }, payload) => {
            createProvider().defaultClient
				.query({
					query: getBooksQuery,
					variables: {
						limit: 20
					}
				})
				.then(response => {
                    commit('SET_BOOKS_LOADING', false)

                    commit('SET_BOOKS_DATA', response.data.books)
				})
                .catch((error) => {
                    console.error(error)
                })
        }
    }
}
