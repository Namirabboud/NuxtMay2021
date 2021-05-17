<template>
  <v-container>

    <v-row class="mt-10">
      <div class="col-12">
        1 - To be able to require the CMS package we have to add the private repository link to <code>composer.json</code> in the root directory of the project.
      </div>

      <v-card class="col-12 pa-0">
        <div class="app-code overflow-hidden v-sheet v-sheet--outlined theme--light rounded grey lighten-5" >
        <pre class="language-js"><code class="language-js">"repositories": [
                {
                    "type": "vcs",
                    "url": "https://github.com/Namirabboud/EveVueDynamic.git"
                }
            ],</code></pre>
          <button type="button" class="v-btn--copy mr-n2 mt-n2 v-btn v-btn--absolute v-btn--icon v-btn--right v-btn--round v-btn--top theme--light v-size--default" style="background-color: inherit;"><span class="v-btn__content"><span aria-hidden="true" class="v-icon notranslate theme--light grey--text" style="transform-origin: center top 0px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" class="v-icon__svg"><path d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path></svg></span></span></button></div>
      </v-card>
    </v-row>



    <v-row class="mt-10">
      <div class="col-12">
        2 - After we require the package, by using this command in your terminal <code>composer require eve/CmsVue</code>
      </div>

    </v-row>



  </v-container>
</template>

<script>
export default {
  name: "tutorial"
}
</script>

<style scoped>

</style>
