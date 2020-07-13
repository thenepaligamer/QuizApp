<template>
  <div>
    <h1>Choose any of the category here:</h1>
    <div id="helloworld">
      <router-link to="/programming"
        ><img
          class="hex-card"
          alt="Programming"
          src="../assets/illustrations/programing.png"
      /></router-link>
    </div>
    <div>
      <router-link to="/computer"
        ><img
          class="hex-card"
          alt="Computer"
          src="../assets/illustrations/day41-desktop.png"
      /></router-link>
    </div>
    <div>
      <router-link to="/medicine"
        ><img
          class="hex-card"
          alt="Medicine"
          src="../assets/illustrations/day48-medical-lab.png"
      /></router-link>
    </div>
    <div>
      <router-link to="/musics"
        ><img
          class="hex-card"
          alt="Musics"
          src="../assets/illustrations/day16-retro-cassette.png"
      /></router-link>
    </div>
  </div>
</template>

<script>
import "../styles/topics.scss";
import Vue from "vue";

new Vue({
  el: "#helloworld",
  methods: {
    say: function(message) {
      alert(message);
    }
  }
});

export default {};
</script>

<style></style>
