<template>
  <div id="app">
    <div class="header">
      <router-link to="/">
      <h1>Vue Movie App</h1>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // And remove the Hello World component here
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  text-align: left;
}

a{
  text-decoration: none;
  color: black;
  margin: 0 
}

body{
  background: #000
}
.header{
  background: #002850;
  padding: 10px;
}
.header a{
  color: #fff;
}
.container{
  padding: 16px
}
</style>
