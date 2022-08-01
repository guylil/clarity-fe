<template>
  <v-container>
    <v-row class="text-center">
      <v-col>
        <h1 class="font-weight-bold mt-4">Welcome to the Your app</h1>

        <h4 class="mt-8 color-change-text">Have a look around</h4>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "ClarityWelcome",

  data: () => ({}),
};
</script>

<style scoped>
.color-change-text {
  animation: color-change 3s ease-in-out infinite;
}
@keyframes color-change {
  0% {
    color: darkred;
  }
  25% {
    color: indianred;
  }
  50% {
    color: deepskyblue;
  }
  100% {
    color: darkblue;
  }
}
</style>
