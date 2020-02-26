<template>
  <div class="recipes-show">
    <div class="row">
      <div class="col-md-6">
        <h2 class="text-center">{{ recipe.title }}</h2>
        <h4 class="text-center">Prep Time: {{ recipe.formatted.prep_time }}</h4>

        <div class="card text-left mb-4">
          <div class="card-header my-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <span class="nav-link active">Ingredients</span>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <p class="card-text">
              <ul>
                <li v-for="ingredient in recipe.formatted.ingredients">{{ ingredient }}</li>
              </ul>
            </p>
          </div>
        </div>

        <div class="card text-left mb-4">
          <div class="card-header my-header">
            <ul class="nav nav-tabs card-header-tabs">
              <li class="nav-item">
                <span class="nav-link active">Directions</span>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <p class="card-text">
              <ol>
                <li v-for="direction in recipe.formatted.directions">{{ direction }}</li>
              </ol>
            </p>
          </div>
        </div>

        <div>
          <router-link class="btn btn-info m-2" v-bind:to="'/recipes/' + recipe.id + '/edit'">Edit</router-link>
          <button class="btn btn-info m-2" v-on:click="destroyRecipe()">Delete</button>
        </div>
      </div>
      <div class="col-md-6">
        <img class="img-fluid w-100 mt-5" v-bind:src="recipe.image_url" v-bind:alt="recipe.title">
      </div>
    </div>
    
    
  </div>
</template>

<style>
</style>

<script>
var axios = require('axios');

export default {
  data: function() {
    return {
      recipe: {
        id: "",
        title: "",
        ingredients: "",
        directions: "",
        formatted: {
          ingredients: [],
          directions: []
        }
      }
    };
  },
  created: function() {
    axios
      .get("/api/recipes/" + this.$route.params.id)
      .then(response => {
        this.recipe = response.data;
      });
  },
  methods: {
    destroyRecipe: function() {
      axios
        .delete("/api/recipes/" + this.$route.params.id)
        .then(response => {
          this.$router.push("/");
        });
    }
  }
};
</script>