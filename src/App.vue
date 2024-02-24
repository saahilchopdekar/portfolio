<template>
  <v-app class="body">
    <v-app-bar
      app
      color="red"
      
    >
      <div class="d-flex align-center white--text font-weight-black">
       MAGIC WOLF'S ONLINE COACHING PROGRAM
      </div>

    </v-app-bar>

    <v-main >
      <SaahilsPage/>
    </v-main>
  </v-app>
</template>

<script>
import SaahilsPage from './components/SaahilsPage';

export default {
  name: 'App',

  components: {
    SaahilsPage,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
.body{
  font-family: nunito;
  background-color: rgb(241, 237, 237) !important;
}
</style>
