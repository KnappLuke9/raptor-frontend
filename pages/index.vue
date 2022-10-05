<template>
  <v-app>
    <div>
        <div class="bg-image" style="background-image: url('https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661409326/Raptors_4_4031ef8922.jpg'); height: 600px;">
          <div class="mask" style="background-color: rgba(0, 0, 0, 0.6)">
            <div class="d-flex justify-content-left align-items-center h-100">
              <div class="text-white">
                <h1 class="mb-3">Raptors Floorball Club</h1>
                <h4 class="mb-3">Develop Compete Respect</h4>
              </div>
            </div>
          </div>
        </div>
      <!--Main layout-->
      <main class="mt-4 mb-5">
        <div class="container">
          <!--Grid row-->
          <div class="row">
            <!--Grid column-->
            <div class="col-md-8 mb-4">
              <!--Section: Post data-mdb-->
              <section class="border-bottom mb-4">
                <!--Section: Landing Page Strapi content-->
                <v-carousel cycle>
                  <v-carousel-item v-for="(item, i) in foundLanding[0].attributes.carousel.data" :key="i" :src="item.attributes.url" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
                </v-carousel>
                <div type="text" id="view-container-wiki" readonly v-html="foundLanding[0].attributes.content"></div>
                <!--Section-->
              </section>
              <!--Section: Text-->
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-md-4 mb-4 ">
              <!--Section: Sidebar-->
              <section>
                <h1>Upcoming Events</h1>
                  <div class="card">
                    <div class="row card-body ma-0 pa-0">
                      <img class="col-sm-4" src="https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661763583/placeholder_ac2e377e9f.png" alt="sans" height="120"/>
                      <div class="col-sm-8">
                        <p class="card-text">Raptors white - Pirates Black<br />Super awesome venue<br />12-12-2022 00:00pm <br />Sunday</p>
                      </div>
                    </div>
                  </div>
                                    <div class="card">
                    <div class="row card-body ma-0 pa-0">
                      <img class="col-sm-4" src="https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661763583/placeholder_ac2e377e9f.png" alt="sans" height="120"/>
                      <div class="col-sm-8">
                        <p class="card-text">Raptors white - Pirates Black<br />Super awesome venue<br />12-12-2022 00:00pm <br />Sunday</p>
                      </div>
                    </div>
                  </div>
                                    <div class="card">
                    <div class="row card-body ma-0 pa-0">
                      <img class="col-sm-4" src="https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661763583/placeholder_ac2e377e9f.png" alt="sans" height="120"/>
                      <div class="col-sm-8">
                        <p class="card-text">Raptors white - Pirates Black<br />Super awesome venue<br />12-12-2022 00:00pm <br />Sunday</p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="row card-body ma-0 pa-0">
                      <img class="col-sm-4" src="https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661763583/placeholder_ac2e377e9f.png" alt="sans" height="120"/>
                      <div class="col-sm-8">
                        <p class="card-text">Raptors white - Pirates Black<br />Super awesome venue<br />12-12-2022 00:00pm <br />Sunday</p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="row card-body ma-0 pa-0">
                      <img class="col-sm-4" src="https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661763583/placeholder_ac2e377e9f.png" alt="sans" height="120"/>
                      <div class="col-sm-8">
                        <p class="card-text">Raptors white - Pirates Black<br />Super awesome venue<br />12-12-2022 00:00pm <br />Sunday</p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="row card-body ma-0 pa-0">
                      <img class="col-sm-4" src="https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661763583/placeholder_ac2e377e9f.png" alt="sans" height="120"/>
                      <div class="col-sm-8">
                        <p class="card-text">Raptors white - Pirates Black<br />Super awesome venue<br />12-12-2022 00:00pm <br />Sunday</p>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                    <div class="row card-body ma-0 pa-0">
                      <img class="col-sm-4" src="https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661763583/placeholder_ac2e377e9f.png" alt="sans" height="120"/>
                      <div class="col-sm-8">
                        <p class="card-text">Raptors white - Pirates Black<br />Super awesome venue<br />12-12-2022 00:00pm <br />Sunday</p>
                      </div>
                    </div>
                  </div>
              </section>
              <!--Section: Sidebar-->
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </div>
        <Features/>
        <Affiliates/>
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
    console.log(foundLanding)
    //let landing = await store.dispatch('landing/getLanding')
    //everthing you return from here is then available with this.article. It puts it into 'data'
    return { foundLanding }
  },
  data() {
    return {
      key: 'blah',
    }
  },
  mounted() {},
}
</script>

<style scoped>

</style>

