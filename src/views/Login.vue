<template>
    <div class="container">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3>Login</h3>
            </div>
            <div class="panel-body">
                <form>
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input type="text" class="form-control" placeholder="Username" v-model="username" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" placeholder="Password" v-model="password" required>
                    </div>
                    <div class="mt-3 text-center">
                        <div v-if="loading" class="alert alert-success">Logging in...</div>
                        <div v-else-if="error" class="alert alert-danger">Invalid username or password!</div>
                    </div>
                    <div class="mt-3">
                        <router-link to="/" class="btn btn-light">Cancel</router-link>
                        <button @click="login" class="btn btn-primary" :disabled="loading">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
import AuthService from '../services/AuthService'

export default {
    data() {
        return {
            username: '',
            password: '',
            loading: false,
            error: false
        }
    },
    methods: {
        login() {
            // TODO add form validation
            if (this.username && this.password) {
                this.loading = true
                AuthService.login(this.username, this.password).then(() => {
                    this.$emit('loggedIn')
                    this.$router.push('/users')
                }).catch(e => {
                    this.error = true
                    console.error(e)
                }).finally(() => {
                    this.loading = false
                })
            }
        }
    }
}
</script>