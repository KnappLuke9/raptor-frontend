<template>
  <v-app>
    <div>

      <!--Main layout-->
      <main>
        <v-container class="px-md-16 mx-lg-auto">
          <v-row>
            <v-col cols="12" md="9">
              <v-carousel cycle>
                <v-carousel-item v-for="(item, i) in foundLanding[0].attributes.carousel.data" :key="i" :src="item.attributes.url" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
              </v-carousel>
              <div type="text" id="view-container-wiki" readonly v-html="foundLanding[0].attributes.content"></div>
            </v-col>
            <v-col cols="6" md="3">
              <v-card min-width="360" max-width="360" outlined color="transparent">
                <h1>Upcoming Events</h1>
              </v-card>
              <v-container grid-list-md>
                <v-card min-width="360" max-width="360" outlined v-for="event in events" :key="event.id">
                    <v-list-item three-line><v-list-item-content>
                      <div class="text-overline mb-4">{{event.Time}} {{event.Date}} {{event.Day}}</div>
                      <v-list-item-title class="text-h5 mb-1"> {{event.Division}} </v-list-item-title>
                      <v-list-item-subtitle>{{event.Home}} - {{event.Away}}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-avatar tile size="80" color="grey"><v-img :src="event.Image"/></v-list-item-avatar>
                  </v-list-item>
                </v-card>
              </v-container>
            </v-col>
          </v-row>
        </v-container>
        <section id="stats">
          <v-parallax :height="imageHeight" src="https://res.cloudinary.com/dpf3gjhvt/image/upload/v1667441008/Raptors_background_2_14ef044c31.jpg?updated_at=2022-11-03T02:03:38.110Z">
            <v-container fill-height>
              <v-row class="mx-auto">
                <v-col v-for="[value, title] of stats" :key="title" cols="12" md="3">
                  <div class="text-center">
                    <div class="display-3 font-weight-black mb-4 orange--text text--darken-2" v-text="value"></div>

                    <div class="title font-weight-regular text-uppercase" v-text="title"></div>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </v-parallax>
        </section>
        <Features />
        <Affiliates />
      </main>
    </div>
  </v-app>
</template>

<script>
import axios from 'axios'
import Affiliates from '../components/Affiliates.vue'

export default {
  components: { Affiliates },
  name: 'IndexPage',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      title: 'Vuetify.js',
    }
  },
  async asyncData({ store }) {
    let foundLanding = await (await axios.get('https://seahorse-app-zkbuk.ondigitalocean.app/api/landingpages/?populate=*')).data.data
    let events = await (await axios.get('https://seahorse-app-zkbuk.ondigitalocean.app/api/events/1/?populate=*')).data.data.attributes.content

    console.log(events)
    //let landing = await store.dispatch('landing/getLanding')
    //everthing you return from here is then available with this.article. It puts it into 'data'
    return { foundLanding , events}
  },
  data() {
    return {
      stats: [
        ['10', 'Seasons'],
        ['420', 'Championships'],
        ['90+', 'Players'],
        ['6', 'Teams'],
      ],
    }
  },
  mounted() {},
  computed: {
      imageHeight () {
        switch (this.$vuetify.breakpoint.name) {
          case 'xs': return '600'
          case 'sm': return '600'
          case 'md': return '200'
          case 'lg': return '200'
          case 'xl': return '200'
        }
      },
    }
}
</script>

<style scoped>
</style>

