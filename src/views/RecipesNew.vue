<template>
  <div class="recipes-new">
    <div class="row">
      <form class="col-sm-6" v-on:submit.prevent="createRecipe()">
        <h1 class="text-center mb-5">New Recipe</h1>

        <div class="form-group">
          <label>Title: </label>
          <input class="form-control" type="text" :class="{'is-invalid': errors.title }" v-model="title">
          <div class="invalid-feedback">
            <ul>
              <li class="text-danger" v-for="error in errors.title">{{ error }}</li>
            </ul>
          </div>
        </div>

        <div class="form-group">
          <label>Prep Time: </label>
          <input class="form-control" type="text" :class="{'is-invalid': errors.prep_time }" v-model="prepTime">
          <div class="invalid-feedback">
            <ul>
              <li class="text-danger" v-for="error in errors.prep_time">{{ error }}</li>
            </ul>
          </div>
        </div>

        <div class="form-group">
          <label>Ingredients: </label>
          <input class="form-control" type="text" :class="{'is-invalid': errors.ingredients }" v-model="ingredients">
          <div class="invalid-feedback">
            <ul>
              <li class="text-danger" v-for="error in errors.ingredients">{{ error }}</li>
            </ul>
          </div>
        </div>

        <div class="form-group">
          <label>Directions: </label>
          <input 
            class="form-control" 
            type="text" 
            :class="{'is-invalid': errors.directions, 'is-valid': Object.keys(errors).length !== 0 && !errors.directions }" 
            v-model="directions"
            >
          <div class="invalid-feedback">
            <ul>
              <li class="text-danger" v-for="error in errors.directions">{{ error }}</li>
            </ul>
          </div>
          <div class="valid-feedback">
            <ul>
              <li class="text-success" v-for="error in errors.directions">{{ error }}</li>
            </ul>
          </div>
        </div>

        <div class="form-group">
          <label>Image Url: </label>
          <input class="form-control" type="text" :class="{'is-invalid': errors.image_url }" v-model="imageUrl">
          <div class="invalid-feedback">
            <ul>
              <li class="text-danger" v-for="error in errors.image_url">{{ error }}</li>
            </ul>
          </div>
        </div>

        <input class="btn btn-info" type="submit" value="Create">
      </form>

      <div v-if="status" class="col-sm-6">
        <img class="img-fluid mt-5" :src="`https://http.cat/${status}`">
      </div>
      <div v-else class="col-sm-6">
        <img class="img-fluid mt-5" src="https://en.bcdn.biz/Images/2018/6/12/27565ee3-ffc0-4a4d-af63-ce8731b65f26.jpg">
      </div>
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
      errors: {},
      status: ""
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
          this.$router.push("/recipes/" + response.data.id);
        }).catch(error => {
          if (error.response.data.errors) {
            this.errors = error.response.data.errors;
          }

          this.status = error.response.status;
        });
    }
  }
};
</script>