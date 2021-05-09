<template>
  <div id="app">
    <Navigation
    :nav-links="navLinks"
    :image-path="require('./assets/logo2.jpg')"
    background="#fff"
    link-color="#777"
    hover-background="#DDD"
    />
    <router-view/>
    
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  },

  data: () => ({
    navLinks: [
        {
        text: 'Home',
        path: '/',
        icon: ''
      },
       {
        text: 'About',
        path: '/about',
        icon: ''
      },
       {
        text: 'Commisions',
        path: '/commisions',
        icon: ''
      },
       {
        text: 'Services',
        path: '/services',
        icon: ''
      },
       {
        text: 'Contact',
        path: '/contact',
        icon: ''
      },
    ]
    
  })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 1em;
  border: 1px solid #ccc;
  height: 100vh;
}
</style>
