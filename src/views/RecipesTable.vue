<template>
  <div class="recipes-table">
    <h1 class="text-center mb-5">Recipes</h1>

    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">Prep Time</th>
          <th scope="col">Created On</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="recipe in recipes">
          <th scope="row">{{ recipe.id }}</th>
          <td><router-link v-bind:to="'/recipes/' + recipe.id">{{ recipe.title }}</router-link></td>
          <td>{{ recipe.prep_time }}</td>
          <td>{{ recipe.created_at }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
</style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      recipes: []
    };
  },
  created: function() {
    axios
      .get("/api/recipes")
      .then(response => {
        this.recipes = response.data;
      });
  },
  methods: {}
};
</script>