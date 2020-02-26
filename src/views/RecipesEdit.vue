<template>
  <div class="recipes-edit">
    <div class="row">
      <form class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1" v-on:submit.prevent="updateRecipe()">
        <h1 class="text-center mb-5">Edit Recipe</h1>

        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>Title: </label>
          <input class="form-control" type="text" v-model="recipe.title">
        </div>

        <div class="form-group">
          <label>Prep Time: </label>
          <input class="form-control" type="number" v-model="recipe.prep_time">
        </div>

        <div class="form-group">
          <label>Ingredients: </label>
          <input class="form-control" type="text" v-model="recipe.ingredients">
        </div>

        <div class="form-group">
          <label>Directions: </label>
          <input class="form-control" type="text" v-model="recipe.directions">
        </div>

        <div class="form-group">
          <label>Image Url: </label>
          <input class="form-control" type="text" v-model="recipe.image_url">
        </div>

        <input class="btn btn-info" type="submit" value="Update">
      </form>
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
      recipe: {
        id: "",
        title: "",
        ingredients: "",
        directions: "",
        formatted: {
          ingredients: [],
          directions: []
        }
      },
      errors: []
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
    updateRecipe: function() {
      var clientParams = {
        title: this.recipe.title,
        prep_time: this.recipe.prep_time,
        ingredients: this.recipe.ingredients,
        directions: this.recipe.directions,
        image_url: this.recipe.image_url
      };

      axios
        .patch("/api/recipes/" + this.$route.params.id, clientParams)
        .then(response => {
          this.$router.push("/recipes/" + this.$route.params.id);
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>