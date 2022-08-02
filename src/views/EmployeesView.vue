<script setup>
import { useEmployeeStore } from "../stores/employees";
const state = useEmployeeStore();
</script>

<template>
  <main>
    <v-card
      class="mt-8 ml-4"
      color="primary"
      v-for="(employee, idx) in state.employees"
      :key="idx"
      width="400"
      :subtitle="employee.title"
      :text="employee.details"
    >
      <template v-slot:title>
        <v-col>
          <v-row class="justify-space-between">
            <div>{{ employee.name }}</div>
            <div>
              <v-btn flat btn icon="mdi-pencil" color="transparent"></v-btn>
              <v-btn flat btn icon="mdi-delete" color="transparent"></v-btn>
            </div>
          </v-row>
        </v-col>
      </template>
    </v-card>
    <v-btn class="mx-4 mt-8" block color="primary" href="/employees/add">
      Add new employee
    </v-btn>
  </main>
</template>
