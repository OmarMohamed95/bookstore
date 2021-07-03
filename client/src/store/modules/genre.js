import { createProvider } from '../../vue-apollo'
import router from '../../router/index'
import {
    getGenre as getGenreQuery,
    getGenres as getGenresQuery
} from '../../graphql/query/genre'

export default {
    state: {
        genre: {
            loading: true,
            data: {}
        },
        genres: {
            loading: true,
            data: {}
        }
    },
    getters: {
        getGenre: state => {
            return state.genre
        },
        getGenres: state => {
            return state.genres
        }
    },
    mutations: {
        SET_GENRE_LOADING: (state, value) => {
            state.genre.loading = value
        },
        SET_GENRE_DATA: (state, value) => {
            state.genre.data = value
        },
        SET_GENRES_LOADING: (state, value) => {
            state.genres.loading = value
        },
        SET_GENRES_DATA: (state, value) => {
            state.genres.data = value
        }
    },
    actions: {
        getGenre: ({ commit }, payload) => {
            createProvider().defaultClient
				.query({
					query: getGenreQuery,
					variables: {
						id: router.currentRoute.params.id
					}
				})
				.then(response => {
                    commit('SET_GENRE_LOADING', false)

                    commit('SET_GENRE_DATA', response.data.genre)
				})
                .catch((error) => {
                    console.error(error)
                })
        },
        getGenres: ({ commit }, payload) => {
            createProvider().defaultClient
				.query({
					query: getGenresQuery,
					variables: {
						limit: 20
					}
				})
				.then(response => {
                    commit('SET_GENRES_LOADING', false)

                    commit('SET_GENRES_DATA', response.data.genres)
				})
                .catch((error) => {
                    console.error(error)
                })
        }
    }
}
