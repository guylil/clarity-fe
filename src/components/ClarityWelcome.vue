<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Welcome to the Your app</h1>
        <img
          class="pt-4"
          src="https://global-uploads.webflow.com/62021cd64c762f39eab7f306/6298597f72bfc934fcddfc98_Logo.svg"
          alt="clarity logo"
        />
        <h4 class="pt-8 color-change-text">Have a look around</h4>
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
