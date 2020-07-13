<template>
  <div>
    <h1>Medicine Questions</h1>
    <p>
      Here are some of the questions. New questions will be added soon. Just
      hover the card to reveal the answer
    </p>
    <QuizMedicine />
  </div>
</template>

<script>
import QuizMedicine from "../components/QuizMedicine.vue";

export default {
  name: "Medicine",
  components: {
    QuizMedicine
  }
};
</script>

<style></style>
