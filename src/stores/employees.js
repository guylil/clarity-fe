import { defineStore } from "pinia";

export const useEmployeeStore = defineStore({
  id: "Employees",
  state: () => ({
    employees: [],
    employeeFields: ["name", "age", "title", "details"],
  }),
  getters: {
    all: (state) => state.employees,
    lastId: (state) => state.employees[state.employees.length - 1].id,
  },
  actions: {
    init(data) {
      this.employees.push(
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
        }
      );
    },
    addEmployee(data) {
      const { name, age, title, details } = data;
      this.employees.push({
        id: this.lastId + 1,
        name,
        age,
        title,
        details,
      });
    },
    navigate(route) {
      this.$router.push(route);
    },
  },
});
