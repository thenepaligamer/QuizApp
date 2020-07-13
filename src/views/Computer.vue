<template>
  <div>
    <h1>Computer Questions</h1>
    <p>
      Here are some of the questions. New questions will be added soon. Just
      hover the card to reveal the answer
    </p>
    <QuizComputer />
  </div>
</template>

<script>
import QuizComputer from "../components/QuizComputer.vue";

export default {
  name: "Computer",
  components: {
    QuizComputer
  }
};
</script>

<style></style>
