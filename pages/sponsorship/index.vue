<template>
  <v-app>
    <main class="v-flex justify-content-center">
      <v-container class="px-md-16 mx-lg-auto">
        <v-container style="max-width: 900px">
          <div type="text" justify="center" readonly v-html="foundLanding.attributes.content"></div>
        </v-container>
      </v-container>
    </main>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AboutPage',
  async asyncData({ store }) {
    let foundLanding = await (await axios.get('https://seahorse-app-zkbuk.ondigitalocean.app/api/sponsorships/1/?populate=*')).data.data
    console.log(foundLanding)
    //let landing = await store.dispatch('landing/getLanding')
    //everthing you return from here is then available with this.article. It puts it into 'data'
    return { foundLanding }
  },
}
</script>