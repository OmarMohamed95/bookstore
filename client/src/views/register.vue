<template>
	<div>
		<form id="registerForm" v-on:submit.prevent="handleRegister()">
			<input type="text" name="username" placeholder="username">
			<input type="text" name="email" placeholder="email">
			<input type="text" name="password" placeholder="password">
			<input type="submit" value="register">
		</form>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
	name: 'register',
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
			'register': 'register'
		}),
		handleRegister () {
			const form = document.getElementById('registerForm')
            let formData = new FormData(form)
            this.register(formData)
		}
	},
	created () {
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
