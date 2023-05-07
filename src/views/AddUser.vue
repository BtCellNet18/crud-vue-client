<template>
    <div class="container">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3>Add User</h3>
            </div>
            <div class="panel-body">
                <form>
                    <div class="form-group">
                        <label>First Name</label>
                        <input type="text" class="form-control" v-model="firstName" required>
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control" v-model="lastName" required>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" v-model="email" required>
                    </div>
                    <div class="form-group">
                        <label>Username</label>
                        <input type="text" class="form-control" v-model="username" required>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" class="form-control" v-model="password" required>
                    </div>
                    <div class="mt-3 text-center">
                        <div v-if="loading" class="alert alert-success">Creating...</div>
                        <div v-else-if="error" class="alert alert-danger">Failed to create user!</div>
                    </div>                    
                    <div class="mt-3">
                        <router-link v-if="loggedIn" to="/users" class="btn btn-light">Cancel</router-link>
                        <router-link v-else to="/login" class="btn btn-light">Cancel</router-link>
                        <button @click="registerUser" class="btn btn-success" :disabled="loading">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
import AuthService from '@/services/AuthService'
import UserService from '@/services/UserService'

export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: '',
            loading: false,
            error: false,
            loggedIn: AuthService.isLoggedIn()
        }
    },
    methods: {
        registerUser() {
            // TODO Form validation
            if (this.firstName && this.lastName && this.email && this.username && this.password) {
                this.loading = true
                UserService.create({
                    firstName: this.firstName,
                    lastName: this.lastName,
                    email: this.email,
                    username: this.username,
                    password: this.password                
                }).then(() => {
                    var url = this.loggedIn ? '/users' : '/login';
                    this.$router.push(url)
                }).catch(e => {
                    this.error = true
                    console.error(e)
                }).finally(() => {
                    this.loading = false
                });
            }
        }
    }
}
</script>