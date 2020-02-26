<template>
  <div class="recipes-new">
    <div class="row">
      <form class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1" v-on:submit.prevent="createRecipe()">
        <h1 class="text-center mb-5">New Recipe</h1>

        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>

        <div class="form-group">
          <label>Title: </label>
          <input class="form-control" type="text" v-model="title">
        </div>

        <div class="form-group">
          <label>Prep Time: </label>
          <input class="form-control" type="number" v-model="prepTime">
        </div>

        <div class="form-group">
          <label>Ingredients: </label>
          <input class="form-control" type="text" v-model="ingredients">
        </div>

        <div class="form-group">
          <label>Directions: </label>
          <input class="form-control" type="text" v-model="directions">
        </div>

        <div class="form-group">
          <label>Image Url: </label>
          <input class="form-control" type="text" v-model="imageUrl">
        </div>

        <input class="btn btn-info" type="submit" value="Create">
      </form>
    </div>
  </div>
</template>

<style></style>

<script>
var axios = require("axios");

export default {
  data: function() {
    return {
      title: "",
      prepTime: "",
      ingredients: "",
      directions: "",
      imageUrl: "",
      errors: []
    };
  },
  created: function() {},
  methods: {
    createRecipe: function() {
      var clientParams = {
        title: this.title,
        prep_time: this.prepTime,
        ingredients: this.ingredients,
        directions: this.directions,
        image_url: this.imageUrl
      };

      axios
        .post("/api/recipes", clientParams)
        .then(response => {
          this.$router.push("/recipes");
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>