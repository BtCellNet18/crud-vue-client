<template>  
  <Navbar :isAuthenticated="isAuthenticated" @loggedOut="loggedOut" />
  <div class="m-5">  
    <router-view @loggedIn="loggedIn"></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import AuthService from './services/AuthService'

export default {
  name: 'App',
  components: { Navbar },
  data() {
    return {
      isAuthenticated: AuthService.isLoggedIn()
    }
  },
  methods: {
    loggedIn() {
      this.isAuthenticated = true
    },
    loggedOut() {
      AuthService.logout()
      this.isAuthenticated = false
    }
  }
}
</script>
