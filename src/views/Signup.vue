<template>
  <div class="signup">
    <div class="row">
      <form class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1" v-on:submit.prevent="submit()">
        <h1 class="text-center mb-5">Signup</h1>
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Name:</label> 
          <input type="text" class="form-control" v-bind:class="{'is-valid': name === 'bob'}" v-model="name">
          <div class="valid-feedback">
            Hey, Your name is bob too!
          </div>
          <div class="invalid-feedback">
            You did it wrong
          </div>
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input 
            type="password" class="form-control" 
            :class="{
                     'is-invalid': passwordConfirmation !== '' && password !== passwordConfirmation,
                     'is-valid': passwordConfirmation !== '' && password === passwordConfirmation
                     }" 
            v-model="passwordConfirmation"
          >
          <div class="valid-feedback">
            You password and password confirmation match.
          </div>
          <div class="invalid-feedback">
            Your password must match your password confirmation.
          </div>
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>      
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: []
    };
  },
  methods: {
    submit: function() {
      var params = {
        name: this.name,
        email: this.email,
        password: this.password,
        password_confirmation: this.passwordConfirmation
      };
      axios
        .post("/api/users", params)
        .then(response => {
          this.$router.push("/login");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>