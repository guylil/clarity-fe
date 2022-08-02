<template>
  <v-app>
    <v-app-bar app>
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="isShowDrawer = !isShowDrawer">
        </v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>
        <v-btn flat @click="navigate('/')">
          <img
            src="https://global-uploads.webflow.com/62021cd64c762f39eab7f306/6298597f72bfc934fcddfc98_Logo.svg"
            alt="clarity logo"
        /></v-btn>
      </v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer app bottom v-model="isShowDrawer">
      <NavMenu />
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";
import NavMenu from "../src/components/NavMenu.vue";
const isShowDrawer = ref(false);
import { useEmployeeStore } from "./stores/employees";
const { init, navigate } = useEmployeeStore();
init();
</script>
