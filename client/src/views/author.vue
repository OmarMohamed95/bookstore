<template>
	<div>
		<div v-if="loading">
			loading...
		</div>
		<div v-else-if="author">
			<h1>{{ author.name }}</h1>
			<hr>
			<div v-for="book in author.books" :key="book.id">
				<a :href="`/book/${book.id}`"><p>{{ book.name }}</p></a>
				<b>Genre:</b><a :href="`/genre/${book.genre.id}`"><b>{{ book.genre.name }}</b></a><br>
				<b>Price: {{ book.price }}</b>
				<hr>
			</div>
		</div>
		<div v-else>
			No results found.
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'author',
	data () {
		return {

		}
	},
	computed: {
		...mapGetters({
			'author': 'getAuthor',
			'loading': 'getLoading'
		})
	},
	methods: {
		...mapActions({
			'getAuthor': 'getAuthor'
		})
	},
	created () {
		this.getAuthor()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
