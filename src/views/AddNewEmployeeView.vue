<script setup>
import { reactive, ref } from "vue";
import { storeToRefs } from "pinia";
import { useEmployeeStore } from "../stores/employees";

const employeeStore = useEmployeeStore();
const { employeeFields } = storeToRefs(employeeStore);

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
function saveData() {
  let newEmployee = {};
  employeeFields.value.forEach((field) => {
    const employeeData = employeeDetails.filter(
      (item) => item.fieldName === field
    );
    if (!!employeeData[0].userInputData) {
      newEmployee[field] = employeeData[0].userInputData;
    }
  });
  employeeStore.addEmployee(newEmployee);
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
          <v-btn block color="primary" @click.prevent.stop="saveData">
            save
          </v-btn>
        </v-row>
      </v-container>
    </v-form>
  </main>
</template>
