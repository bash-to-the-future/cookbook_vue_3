<template>
  <div class="recipes-new">
    <form v-on:submit.prevent="createRecipe()">
      <h1>New Recipe</h1>

      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>

      <div>
        Title: <input type="text" v-model="title">
      </div>

      <div>
        Prep Time: <input type="text" v-model="prepTime">
      </div>

      <div>
        Ingredients: <input type="text" v-model="ingredients">
      </div>

      <div>
        Directions: <input type="text" v-model="directions">
      </div>

      <div>
        Image Url: <input type="text" v-model="imageUrl">
      </div>

      <input type="submit" value="Create">
    </form>
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