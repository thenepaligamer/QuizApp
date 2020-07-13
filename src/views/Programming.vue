<template>
  <div>
    <h1>Programming Questions</h1>
    <p>
      Here are some of the questions. New questions will be added soon. Just
      hover the card to reveal the answer
    </p>
    <QuizProgramming />
  </div>
</template>

<script>
import QuizProgramming from "../components/QuizProgramming.vue";

export default {
  name: "Programming",
  components: {
    QuizProgramming
  }
};
</script>

<style></style>
