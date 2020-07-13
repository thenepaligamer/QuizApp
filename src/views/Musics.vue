<template>
  <div>
    <h1>Musics Questions</h1>
    <p>
      Here are some of the questions. New questions will be added soon. Just
      hover the card to reveal the answer
    </p>
    <QuizMusics />
  </div>
</template>

<script>
import QuizMusics from "../components/QuizMusics.vue";

export default {
  name: "Musics",
  components: {
    QuizMusics
  }
};
</script>

<style></style>
