<template>
    <div class="container">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <h3>Edit User</h3>
            </div>
            <div class="panel-body">
                <form>
                    <div class="form-group">
                        <label>First Name</label>
                        <input type="text" class="form-control" v-model="user.firstName" required>
                    </div>
                    <div class="form-group">
                        <label>Last Name</label>
                        <input type="text" class="form-control" v-model="user.lastName" required>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" class="form-control" v-model="user.email" required>
                    </div>
                    <div class="mt-3 text-center">
                        <div v-if="loading" class="alert alert-success">{{ message }}</div>
                        <div v-else-if="error" class="alert alert-danger">Oops something broke, try again!</div>
                    </div>                    
                    <div class="mt-3">
                        <router-link to="/users" class="btn btn-light">Cancel</router-link>
                        <button @click="updateUser" class="btn btn-primary" :disabled="loading">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
  
<script>
import UserService from '@/services/UserService'

export default {
    data() {
        return {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                email: ''
            },
            error: false,
            loading: true,
            message: 'Loading...'
        };
    },
    methods: {
        getUser(id) {
            UserService.getById(id).then(response => {
                this.user = response.data
            }).catch(e => {
                console.error(e)
            }).finally(() => {
                this.loading = false
            });
        },
        updateUser() {
            // TODO Form validation
            if (this.user.firstName && this.user.lastName && this.user.email) {
                this.loading = true
                this.message = 'Updating...'
                UserService.update(this.$route.params.id, {
                    firstName: this.user.firstName,
                    lastName: this.user.lastName,
                    email: this.user.email
                }).then(() => {
                    this.$router.push('/users')
                }).catch(e => {
                    console.error(e)
                }).finally(() => {
                    this.loading = false
                });
            }
        }
    },
    mounted() {
        this.getUser(this.$route.params.id)
    }
}
</script>