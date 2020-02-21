<template>
  <div class="recipes-index">
    <h1>All Recipes</h1>

    <div v-for="recipe in recipes">
      <h2>{{ recipe.title }}</h2>
      <h4>Prep Time: {{ recipe.formatted.prep_time }}</h4>
      <p>{{ recipe.ingredients }}</p>
      <br>
    </div>
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