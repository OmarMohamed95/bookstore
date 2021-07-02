<template>
	<div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="#">Bookstore</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item-dropdown text="Browse" right>
                        <ApolloQuery
                        :query="require('../graphql/query/genres.gql')"
                        :variables="{ limit }"
                        >
                            <template v-slot="{ result: { data } }">
                                <div v-if="data" class="result apollo">
                                    <div v-for="genre in data.genres" :key="genre.id">
                                        <b-dropdown-item :href="genre.id">{{ genre.name }}</b-dropdown-item>
                                    </div>
                                </div>
                            </template>
                        </ApolloQuery>
                    </b-nav-item-dropdown>
                    <b-nav-item href="#">My Books</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown right>
                        <!-- Using 'button-content' slot -->
                        <template #button-content>
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
	name: 'navbar',
	data () {
		return {
			limit: 20
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
.navbar {
    padding-left: 40px;
}

.navbar-nav {
    flex: 1;
}

.form-inline {
    display: flex;
}
</style>
