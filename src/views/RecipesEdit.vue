<template>
  <div class="recipes-edit">
    <form v-on:submit.prevent="updateRecipe()">
      <h1>Edit Recipe</h1>

      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>

      <div>
        Title: <input type="text" v-model="recipe.title">
      </div>

      <div>
        Prep Time: <input type="text" v-model="recipe.prep_time">
      </div>

      <div>
        Ingredients: <input type="text" v-model="recipe.ingredients">
      </div>

      <div>
        Directions: <input type="text" v-model="recipe.directions">
      </div>

      <div>
        Image Url: <input type="text" v-model="recipe.image_url">
      </div>

      <input type="submit" value="Update">
    </form>
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