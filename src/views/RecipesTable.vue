<template>
  <div class="recipes-table">
    <h1 class="text-center mb-5">Recipes</h1>

    <table class="table table-striped">
      <thead class="thead-dark">
        <tr>
          <table-header
            v-for="heading in ['id', 'title', 'prep_time', 'created_at']"
            :heading="heading"
            :sortAttribute="sortAttribute"
            :sortAscending="sortAscending"
            @setSortAttribute="setSortAttribute"
          />
        </tr>
      </thead>
      <tbody>
        <tr v-for="recipe in orderBy(recipes, sortAttribute, sortAscending)">
          <th scope="row">{{ recipe.id }}</th>
          <td><router-link v-bind:to="'/recipes/' + recipe.id">{{ recipe.title }}</router-link></td>
          <td>{{ recipe.prep_time }}</td>
          <td>{{ formatDate(recipe.created_at) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
</style>

<script>
var axios = require("axios");
import moment from "moment";
import Vue2Filters from 'vue2-filters';
import MyButton from "../components/MyButton.vue";
import TableHeader from "../components/TableHeader.vue";

export default {
  data: function() {
    return {
      recipes: [],
      sortAttribute: "title",
      sortAscending: 1
    };
  },
  created: function() {
    axios
      .get("/api/recipes")
      .then(response => {
        this.recipes = response.data;
      });
  },
  methods: {
    relativeDate: function(date) {
      return moment(date).fromNow();
    },
    formatDate: function(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a');
    },
    setSortAttribute: function(inputAttribute) {
      if (this.sortAttribute === inputAttribute) {
        this.sortAscending *= -1;
      } else {
        this.sortAttribute = inputAttribute;
        this.sortAscending = 1;
      }
    }
  },
  mixins: [Vue2Filters.mixin],
  components: {
    MyButton,
    TableHeader
  }
};
</script>