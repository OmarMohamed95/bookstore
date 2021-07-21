<template>
	<div>
        <b-navbar toggleable="lg" type="dark" variant="dark">
            <b-navbar-brand href="/">Bookstore</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item-dropdown text="Browse" right>
                        <div v-if="genres.loading">
                            loading...
                        </div>
                        <div v-else-if="genres.data">
                            <div v-for="genre in genres.data" :key="genre.id">
                                <b-dropdown-item :href="`/genre/${genre.id}`">{{ genre.name }}</b-dropdown-item>
                            </div>
                        </div>
                        <div v-else>
                            No genres found.
                        </div>
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
                    </b-nav-item-dropdown>
                </b-navbar-nav>
                <b-navbar-nav v-if="isAuth">
                    <b-nav-item @click="handleLogout">Log out</b-nav-item>
                </b-navbar-nav>
                <b-navbar-nav v-else>
                    <b-nav-item href="/register">Register</b-nav-item>
                    <b-nav-item href="/login">Log in</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'navbar',
	data () {
		return {

        }
	},
	computed: {
        ...mapGetters({
            'genres': 'getGenres',
            'isAuth': 'getToken'
        })
	},
	methods: {
        ...mapActions({
            'getGenres': 'getGenres',
            'logout': 'logout'
        }),
        handleLogout () {
            this.logout()
        }
	},
	created () {
        this.getGenres()
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
