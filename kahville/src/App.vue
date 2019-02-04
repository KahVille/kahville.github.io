<template>
  <v-app dark>
    <v-content>
      <Home/>
    </v-content>
      <Footer/>
  </v-app>
</template>

<script>
const Home = () => import('./views/Home')
const Footer = () => import('./components/Footer')
export default {
  name: 'App',
  components: {
    Home,
    Footer
  }
}
</script>
