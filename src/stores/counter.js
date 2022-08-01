import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    },
  },
});

export const useEmployeeStore = defineStore({
  id: "Employees",
  state: () => ({
    employees: [
      {
        id: 0,
        name: "Mr fluffy",
        age: 18,
        title: "Shift manager",
        details: "lorem ipsum",
      },
      {
        id: 1,
        name: "Mrs Betty",
        age: 75,
        title: "Betty boop",
        details: "lorem ipsum",
      },
    ],
  }),
  getters: {
    all: (state) => state.employees,
  },
  actions: {
    // increment() {
    //   this.counter++;
    // },
  },
});
