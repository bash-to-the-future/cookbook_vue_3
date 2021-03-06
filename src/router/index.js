import Vue from 'vue';
import VueRouter from 'vue-router';

import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';

import RecipesIndex from '../views/RecipesIndex.vue';
import RecipesTable from '../views/RecipesTable.vue';
import RecipesNew from '../views/RecipesNew.vue';
import RecipesShow from '../views/RecipesShow.vue';
import RecipesEdit from '../views/RecipesEdit.vue';
import Magic from '../views/Magic.vue';


Vue.use(VueRouter)

const routes = [
  {path: '/signup', name: 'signup', component: Signup},
  {path: '/login', name: 'login', component: Login},
  {path: '/logout', name: 'logout', component: Logout},

  {path: '/', name: 'root', component: RecipesIndex},
  {path: '/recipes', name: 'recipes-index', component: RecipesIndex},
  {path: '/recipes/table', name: 'recipes-table', component: RecipesTable},
  {path: '/recipes/new', name: 'recipes-new', component: RecipesNew},
  {path: '/recipes/:id', name: 'recipes-show', component: RecipesShow},
  {path: '/recipes/:id/edit', name: 'recipes-edit', component: RecipesEdit},

  {path: '/magic', name: 'magic', component: Magic}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
