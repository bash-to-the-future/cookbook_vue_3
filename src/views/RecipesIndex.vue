<template>
  <div class="recipes-index">
    <h1 class="text-center mb-5">Recipes</h1>

    <div class="row">
      <div class="col-sm-4 mb-2" v-for="recipe in recipes">
        <router-link v-bind:to="'/recipes/' + recipe.id">
          <div class="card">
            <img class="card-img-top" v-bind:src="recipe.image_url" v-bind:alt="recipe.title">
            <div class="card-body text-info">
              <h5 class="card-title">{{ recipe.title }}</h5>
              <p class="card-text">Prep Time: {{ recipe.formatted.prep_time }}</p>
            </div>
          </div>
        </router-link>
      </div>

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