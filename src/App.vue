<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark">
      <router-link class="navbar-brand text-my-green" to="/">Cookbook App</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/recipes/new">New Recipe</router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Authentication
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link class="dropdown-item" to="/signup">Signup</router-link>
              <router-link class="dropdown-item" to="/login">Login</router-link>
              <router-link class="dropdown-item" to="/logout">Logout</router-link>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    
    <div class="container pt-5">
      <router-view/>
    </div>

  </div>
</template>

<style>
body {
  font-family: "Hoefler Text","Baskerville Old Face",Garamond,"Times New Roman",serif;
  background-image: url("/light_honeycomb.png");
}

.navbar {
  background-color: #660066;
}

.card-header.my-header {
  background-color: #660066;
}

a.navbar-brand.text-my-green {
  color: #0A0;
}
</style>
