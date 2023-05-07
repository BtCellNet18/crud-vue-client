<template>
    <div class="container">
        <div class="panel panel-primary">
            <div class="panel-heading">
                <div class="row">
                    <div class="col-md-10">
                        <h3>List Users</h3>
                    </div>
                    <div class="col-md-2">
                        <router-link to="/users/add" class="btn btn-success">Add</router-link>
                    </div>
                </div>
            </div>
            <div class="panel-body">
                <div class="table-responsive">
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="loading">
                                <td colspan="7">
                                    Loading...
                                </td>
                            </tr>
                            <tr v-else v-for="(user) in users" v-bind:key="user.id">
                                <td>{{ user.id }}</td>
                                <td>{{ user.firstName }}</td>
                                <td>{{ user.lastName }}</td>
                                <td>{{ user.username }}</td>
                                <td>{{ user.email }}</td>
                                <td>
                                    <router-link v-if="user.id" :to="{
                                        name: 'EditUser',
                                        params: { id: user.id }
                                    }" class="btn btn-primary">Edit</router-link>
                                </td>
                                <td>
                                    <button @click="deleteUser(user.id)" class="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import UserService from '../services/UserService'

export default {
    data() {
        return {
            users: [],
            loading: true
        };
    },
    methods: {
        getUsers() {
            UserService.getAll().then(response => {
                this.users = response.data
            }).catch(error => {
                console.error(error)
            }).finally(() => {
                this.loading = false
            });
        },
        deleteUser(id) {
            // Delete confirmation 
            if (window.confirm(`Delete user ${id} Are you sure?`)) {
                UserService.delete(id).then(() => {
                    this.getUsers()
                }).catch(e => {
                    console.error(e)
                });
            }
        }
    },
    created() {
        this.getUsers()
    }
}
</script>