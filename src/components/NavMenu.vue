<template>
  <v-col>
    <v-row v-for="(item, idx) in buttons" :key="idx">
      <v-btn color="primary" class="ma-4" @click="state.navigate(item.route)">
        {{ item.text }}
      </v-btn>
    </v-row>
  </v-col>
</template>

<script setup>
import { reactive } from "vue";
import { useEmployeeStore } from "../stores/employees";
const state = useEmployeeStore();

const buttons = reactive([
  {
    text: "All employees",
    route: "/employees/all",
  },
  {
    text: "Add employee",
    route: "/employees/add",
  },
]);
</script>

<style scoped></style>
