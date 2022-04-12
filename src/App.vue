<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-info">
    <div class="container-fluid justify-content-center">
      <div class="navbar-nav fs-5">
        <router-link class="nav-link" to="/">Jason</router-link>
        <router-link class="nav-link" to="/work1">First</router-link>
        <router-link class="nav-link" to="/work2">Second</router-link>
        <router-link class="nav-link" to="/work3">Third</router-link>
        <router-link class="nav-link" to="/future">Future</router-link>
        <router-link class="nav-link" to="/vue_hello_world">HelloWorld</router-link>
        <router-link class="nav-link" to="/about">About</router-link>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<style lang="scss">
@import '~bootstrap/scss/bootstrap';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
