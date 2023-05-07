<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="https://vuejs.org/">
        <img src="../assets/logo.png" alt="Vue" title="Vue" height="32" width="32" />
      </a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link to="/users" class="nav-link">Users</router-link>
        </li>
        <li class="nav-item" v-if="isAuthenticated">
          <router-link @click="logout" to="/" class="nav-link">Logout</router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link to="/users/add" class="nav-link">Register</router-link>
        </li>
        <li class="nav-item" v-if="!isAuthenticated">
          <router-link to="/login" class="nav-link">Login</router-link>
        </li>
      </div>
    </div>
  </nav>
</template>
  
<script>
export default {
  name: 'Navbar',
  props: {
    isAuthenticated: Boolean
  },
  methods: {
    logout() {
      this.$emit('loggedOut')
    }
  }
}
</script>