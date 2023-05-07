import { createRouter, createWebHashHistory } from 'vue-router'
import { Home, Login, ListUsers, AddUser, EditUser, NotFound } from './views/index.js'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login },
    { path: '/users', name: 'ListUsers', component: ListUsers },
    { path: '/users/add', name: 'AddUser', component: AddUser },
    { path: '/users/edit/:id', name: 'EditUser', component: EditUser }
  ]
})

export default router;
