<template>
  <div id="app">
    <h1>vue-base</h1>
    <a href="/vue-base1" class="href">/vue-base1</a>
    <br>
    <a href="/vue-base2" class="href1">/vue-base2</a>
    <br>
    
    <a href="/gtm-loan-web" class="href2">/gtm-loan-web</a>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div id="vue-base1"></div>
    <div id="vue-base2"></div>
    <div id="gtm-loan-web"></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
