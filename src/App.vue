<template>
  <div id="app">
    <div id="nav">
      <img id="logoimage" alt="Gyan logo" src="./assets/cattips.jpg" />
      <router-link to="/">Home</router-link> |
      <router-link to="/topics">Topics</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import "./styles/index.scss";

export default {};
</script>
