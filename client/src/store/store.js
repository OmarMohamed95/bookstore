import Vue from 'vue'
import Vuex from 'vuex'
import book from './modules/book'
import genre from './modules/genre'
import home from './modules/home'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        genre: genre,
        home: home,
        book: book
    }
})
