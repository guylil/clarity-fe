<template>
  <v-app>
    <v-app-bar app color="primary" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="isShowDrawer = !isShowDrawer">
        </v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>app bar</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer app bottom v-model="isShowDrawer">
      <div>navigation-drawer</div>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    isShowDrawer: false,
  }),
};
</script>
