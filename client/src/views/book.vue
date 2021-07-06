<template>
	<div>
		<div v-if="loading">
			loading...
		</div>
		<div v-else-if="book">
			<h1>{{ book.name }}</h1>
			<hr>
			<small>Author: {{ book.author.name }}</small><br>
			<b>Price: {{ book.price }}</b>
			<hr>
		</div>
		<div v-else>
			No results found.
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'book',
	data () {
		return {

		}
	},
	computed: {
		...mapGetters({
			'book': 'getBook',
			'loading': 'getLoading'
		})
	},
	methods: {
		...mapActions({
			'getBook': 'getBook'
		})
	},
	created () {
		this.getBook()
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
