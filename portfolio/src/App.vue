<template>
  <div id="app">
    <AppHeader />
    <main class="main-content">
      <MainContent msg="I'm Callum Saxon a " />
    </main>
  </div>
</template>

<script>
import MainContent from './components/MainContent.vue';
import AppHeader from './components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    MainContent,
    AppHeader,
  },
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: 0;
}
.main-content {
  padding-top: 80px;
}
</style>
