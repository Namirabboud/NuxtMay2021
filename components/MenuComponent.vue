<template>
  <v-app-bar
    color="deep-purple accent-4"
    fixed
    dense
    dark
  >
    <!--
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    -->

    <v-toolbar-title>Kukuxsu</v-toolbar-title>
    <v-list class="transparent ml-4">
      <v-list-item link class="d-inline-flex">
        <!--
        <v-list-item-icon>
          <v-icon></v-icon>
        </v-list-item-icon>
        -->

        <v-list-item-content>
          <v-list-item-title><NuxtLink to="/" class="white--text text-decoration-none">Resume</NuxtLink></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link class="d-inline-flex">
        <!--
        <v-list-item-icon>
          <v-icon></v-icon>
        </v-list-item-icon>
        -->

        <v-list-item-content>
          <v-list-item-title><NuxtLink to="/tutorial" class="white--text text-decoration-none">Tutorial</NuxtLink></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>


    <v-spacer></v-spacer>

    <!--
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    -->

  </v-app-bar>

</template>

<script>

import PdfButton from "./PdfButtonComponent";

export default {
  name: "MenuComponent",

  data: function(){
    return {
      transNavBar: true,
      lastScrollPosition: 0,
    }
  },

  mounted () {
  },

  beforeDestroy () {
  },

  methods:{
  },

  components:{
    PdfButton,
  }

}
</script>

<style scoped>

</style>
