<template>
	<div id="app">
		<navbar></navbar>
		<div class="content-container container-fluid">
			<div class="row">
				<router-view/>
			</div>
		</div>
	</div>
</template>

<script>
import navbar from './components/navbar.vue'

export default {
	name: 'App',
	components: {
		navbar: navbar
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.content-container {
	margin-top: 50px
}
</style>
