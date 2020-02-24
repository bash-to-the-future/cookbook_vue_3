<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/recipes/new">New Recipe</router-link> |
      <router-link to="/signup">Signup</router-link> | 
      <router-link to="/login">Login</router-link> | 
      <router-link to="/logout">Logout</router-link> 
    </div>

    <router-view/>

  </div>
</template>

<style>

</style>
