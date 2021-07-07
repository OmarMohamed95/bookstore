import Vue from 'vue'
import Router from 'vue-router'
import 'regenerator-runtime/runtime'

// Views
import home from '@/views/home'
import genre from '@/views/genre'
import book from '@/views/book'
import author from '@/views/author'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'home',
			component: home
		},
		{
			path: '/genre/:id',
			name: 'genre',
			component: genre
		},
		{
			path: '/book/:id',
			name: 'book',
			component: book
		},
		{
			path: '/author/:id',
			name: 'author',
			component: author
		}
	]
})
