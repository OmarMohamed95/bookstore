<template>
	<div>
		<ApolloQuery
			:query="require('../graphql/query/books.gql')"
			:variables="{ limit }"
		>
			<template v-slot="{ result: { data } }">
				<div v-if="data" class="result apollo">
					<div v-for="book in data.books" :key="book.id">
						<p>{{ book.name }}</p>
						<small>{{ book.author.name }}</small> |
						<small>{{ book.genre.name }}</small>
						<hr>
					</div>
				</div>
			</template>
		</ApolloQuery>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	data () {
		return {
			limit: 5
		}
	},
	methods: {

	},
	created () {

	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
	font-weight: normal;
}
</style>
