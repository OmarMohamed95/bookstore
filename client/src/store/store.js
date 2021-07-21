import Vue from 'vue'
import Vuex from 'vuex'
import book from './modules/book'
import genre from './modules/genre'
import home from './modules/home'
import author from './modules/author'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        genre,
        home,
        book,
        author,
        auth
    }
})
