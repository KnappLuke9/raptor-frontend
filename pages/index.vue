<template>
  <v-app>
    <div>
      <!--Main Navigation-->
      <header>
        <!-- Background image -->
        <div class="p-5 text-center bg-image" style="background-image: url('https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661409326/Raptors_4_4031ef8922.jpg'); height: 600px;">
          <div class="mask" style="background-color: rgba(0, 0, 0, 0.6)">
            <div class="d-flex justify-content-left align-items-center h-100">
              <div class="text-white">
                <h1 class="mb-3">Raptors Floorball Club</h1>
                <h4 class="mb-3">Develop Compete Respect</h4>
              </div>
            </div>
          </div>
        </div>
        <!-- Background image -->
        <!-- Jumbotron -->
      </header>
      <!--Main Navigation-->

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
                <v-carousel>
                  <v-carousel-item v-for="(item, i) in foundLanding[0].attributes.carousel.data" :key="i" :src="item.attributes.url" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
                </v-carousel>
                <div class="form-control" type="text" id="view-container-wiki" readonly v-html="foundLanding[0].attributes.content"></div>
                <!--Section-->
                <h1>Subscribe to our newsletter!</h1>
                <form>
                  <!-- Name input -->
                  <div class="form-outline mb-4">
                    <input type="text" id="form5Example1" class="form-control" />
                    <label class="form-label" for="form5Example1">Name</label>
                  </div>

                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <input type="email" id="form5Example2" class="form-control" />
                    <label class="form-label" for="form5Example2">Email address</label>
                  </div>
                  <!-- Submit button -->
                  <button type="submit" class="btn btn-primary btn-block mb-4">Subscribe</button>
                </form>

                <img src="https://scontent.fper8-1.fna.fbcdn.net/v/t39.30808-6/277076992_2493809074087358_1394302977804886078_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=NLDOq1n6UMgAX_EIzMs&tn=s8oGllexctFveZCD&_nc_ht=scontent.fper8-1.fna&oh=00_AT-0gP_t-QXlqr2TJRxAJfSJgBLnsYIDynSh2BmFLLlv4Q&oe=62FF9CF9" class="img-fluid shadow-1-strong rounded-5 mb-4" alt="" />
              </section>
              <!--Section: Text-->

              <!--Section: Author-->
              <section class="border-bottom mb-4 pb-4">
                <div class="row">
                  <h1>Contact Us!</h1>
                  <form>
                    <!-- Name input -->
                    <div class="form-outline mb-4">
                      <input type="text" id="form4Example1" class="form-control" />
                      <label class="form-label" for="form4Example1">Name</label>
                    </div>

                    <!-- Email input -->
                    <div class="form-outline mb-4">
                      <input type="email" id="form4Example2" class="form-control" />
                      <label class="form-label" for="form4Example2">Email address</label>
                    </div>

                    <!-- Message input -->
                    <div class="form-outline mb-4">
                      <textarea class="form-control" id="form4Example3" rows="4"></textarea>
                      <label class="form-label" for="form4Example3">Message</label>
                    </div>
                    <!-- Submit button -->
                    <button type="submit" class="btn btn-primary btn-block mb-4">Send</button>
                  </form>
                </div>
              </section>
              <!--Section: Author-->
            </div>
            <!--Grid column-->

            <!--Grid column-->
            <div class="col-md-4 mb-4">
              <!--Section: Sidebar-->
              <section class="sticky-top" style="top: 80px">
                <h1>Upcoming Events</h1>
                <section>
                  <div class="card">
                    <div class="row card-body">
                      <img class="col-sm-6" src="https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661763583/placeholder_ac2e377e9f.png" alt="sans" height="120"/>
                      <div class="col-sm-6">
                        <h5 class="card-title">14-12-2022</h5>
                        <p class="card-text">Raptors white - Pirates<br />Super awesome venue<br />00:00pm</p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div class="card">
                    <div class="row card-body">
                      <div class="col-sm-6">
                        <h5 class="card-title">14-12-2022</h5>
                        <p class="card-text">Raptors white - Pirates<br />Super awesome venue<br />00:00pm</p>
                      </div>
                      <img class="col-sm-6" src="https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661763583/placeholder_ac2e377e9f.png" alt="sans" height="120"/>
                    </div>
                  </div>
                </section>
                <section>
                  <div class="card">
                    <div class="row card-body">
                      <div class="col-sm-6">
                        <h5 class="card-title">14-12-2022</h5>
                        <p class="card-text">Raptors white - Pirates<br />Super awesome venue<br />00:00pm</p>
                      </div>
                      <img class="col-sm-6" src="https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661763583/placeholder_ac2e377e9f.png" alt="sans" height="120"/>
                    </div>
                  </div>
                </section>
                <section>
                  <div class="card">
                    <div class="row card-body">
                      <div class="col-sm-6">
                        <h5 class="card-title">14-12-2022</h5>
                        <p class="card-text">Raptors white - Pirates<br />Super awesome venue<br />00:00pm</p>
                      </div>
                      <img class="col-sm-6" src="https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661763583/placeholder_ac2e377e9f.png" alt="sans" height="120"/>
                    </div>
                  </div>
                </section>
                <section>
                  <div class="card">
                    <div class="row card-body">
                      <div class="col-sm-6">
                        <h5 class="card-title">14-12-2022</h5>
                        <p class="card-text">Raptors white - Pirates<br />Super awesome venue<br />00:00pm</p>
                      </div>
                      <img class="col-sm-6" src="https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661763583/placeholder_ac2e377e9f.png" alt="sans" height="120"/>
                    </div>
                  </div>
                </section>
                                <section>
                  <div class="card">
                    <div class="row card-body">
                      <div class="col-sm-6">
                        <h5 class="card-title">14-12-2022</h5>
                        <p class="card-text">Raptors white - Pirates<br />Super awesome venue<br />00:00pm</p>
                      </div>
                      <img class="col-sm-6" src="https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661763583/placeholder_ac2e377e9f.png" alt="sans" height="120"/>
                    </div>
                  </div>
                </section>
                                <section>
                  <div class="card">
                    <div class="row card-body">
                      <div class="col-sm-6">
                        <h5 class="card-title">14-12-2022</h5>
                        <p class="card-text">Raptors white - Pirates<br />Super awesome venue<br />00:00pm</p>
                      </div>
                      <img class="col-sm-6" src="https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661763583/placeholder_ac2e377e9f.png" alt="sans" height="120"/>
                    </div>
                  </div>
                </section>
              </section>
              <!--Section: Sidebar-->
            </div>
            <!--Grid column-->
          </div>
          <!--Grid row-->
        </div>
      </main>
      <!--Main layout-->
      <Footer />
    </div>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'IndexPage',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
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