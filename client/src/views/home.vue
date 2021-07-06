<template>
	<div>
		<div v-if="books.loading">
			loading...
		</div>
		<div v-else-if="books.data">
			<div v-for="book in books.data" :key="book.id">
				<a :href="`/book/${book.id}`"><p>{{ book.name }}</p></a>
				<small>{{ book.author.name }}</small> |
				<small>{{ book.genre.name }}</small>
				<br>
				<b>Price: {{ book.price }}</b>
				<hr>
			</div>
		</div>
		<div v-else>
			No books found.
		</div>
	</div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
	name: 'home',
	data () {
		return {

		}
	},
	computed: {
		...mapGetters({
			'books': 'getBooks'
		})
	},
	methods: {
		...mapActions({
			'getBooks': 'getBooks'
		})
	},
	created () {
		this.getBooks()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
	font-weight: normal;
}
</style>
