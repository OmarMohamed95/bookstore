<template>
	<div>
		<form id="loginForm" v-on:submit.prevent="handleLogin()">
			<input type="text" name="email" placeholder="email">
			<input type="text" name="password" placeholder="password">
			<input type="submit" value="login">
		</form>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'login',
	data () {
		return {

		}
	},
	computed: {
		...mapGetters({
		})
	},
	methods: {
		...mapActions({
			'login': 'login'
		}),
		handleLogin () {
			const form = document.getElementById('loginForm')
            let formData = new FormData(form)
            this.login(formData)
		}
	},
	created () {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
