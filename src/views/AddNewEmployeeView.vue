<script setup>
import { reactive, ref } from "vue";

const isFormValid = ref(false);
const employeeDetails = reactive([
  {
    fieldName: "name",
    fieldType: "string",
    userInputData: null,
    rules: `required`,
  },
  {
    fieldName: "age",
    fieldType: "number",
    userInputData: null,
  },
  {
    fieldName: "title",
    fieldType: "string",
    userInputData: null,
  },
  {
    fieldName: "details",
    fieldType: "string",
    userInputData: null,
    rules: `required`,
  },
]);

const validationRules = {
  required: (v) => !!v || "field is required",
};
function submit(formData) {
  console.log(employeeDetails);
}
</script>

<template>
  <main>
    <v-form v-model="isFormValid">
      <v-container>
        <v-row v-for="(field, idx) in employeeDetails" :key="idx">
          <v-col>
            {{ field.fieldName }}
          </v-col>
          <v-col>
            <v-text-field
              v-model="field.userInputData"
              :rules="[validationRules[field.rules]]"
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-btn block color="primary" @click="submit">save</v-btn>
        </v-row>
      </v-container>
    </v-form>
  </main>
</template>

<!--
{
    description: "Personal details",
    name: "",
    age: 0,
    title: "Enter title",
    details: "Add some details",
  },-->
