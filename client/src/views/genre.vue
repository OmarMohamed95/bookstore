<template>
	<div>
		<div v-if="genre.loading">
			loading...
		</div>
		<div v-else-if="genre.data">
			<h1>{{ genre.data.name }}</h1>
			<hr>
			<div v-for="book in genre.data.books" :key="book.id">
				<a :href="`/book/${book.id}`"><p>{{ book.name }}</p></a>
				<b>Author: </b><a :href="`/author/${book.author.id}`"><b>{{ book.author.name }}</b></a><br>
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
	name: 'genre',
	data () {
		return {

		}
	},
	computed: {
		...mapGetters({
			'genre': 'getGenre'
		})
	},
	methods: {
		...mapActions({
			'getGenre': 'getGenre'
		})
	},
	created () {
		this.getGenre()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
