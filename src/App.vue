<template>
	<div class="app">
		<Header />
		<main class="main">
			<div class="container">
				<RouterView v-slot="{ Component }">
				  <component :is="Component" />
				</RouterView>
			</div>
		</main>
		<Footer />
	</div>
</template>

<script setup lang="ts">
  import Header from './components/inc/Header.vue';
  import Footer from './components/inc/Footer.vue';
</script>
