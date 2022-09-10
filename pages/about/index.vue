<template>
  <v-app>
    <!--Main layout-->
    <main class="v-flex justify-content-center">
      <div class="container">
        <section class="border-bottom mb-4">
          <v-carousel >
            <v-carousel-item v-for="(item, i) in foundLanding[0].attributes.carousel.data" :key="i" :src="item.attributes.url" reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
          </v-carousel>
          <div class="form-control" type="text" id="view-container-wiki" readonly v-html="foundLanding[0].attributes.content"></div>
          <div class="container text-center mt-5 mb-2">
            <h1 class="mb-0">Meet our staff</h1>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</span>
          </div>
          <div class="container mt-3">
            <div class="row">
              <div class="col-md-3">
                <div class="bg-white p-3 text-center rounded box">
                  <img class="img-responsive rounded-circle" src="https://i.imgur.com/uppKNuF.jpg" width="90" />
                  <h5 class="mt-3 name">Matt Smith</h5>
                  <span class="work d-block">President </span>
                  <div class="mt-4 about"><span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span></div>
                  <div class="mt-4"></div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="bg-white p-3 text-center rounded box">
                  <img class="img-responsive rounded-circle" src="https://i.imgur.com/oJmLthK.jpg" width="90" />
                  <h5 class="mt-3 name">Bruce Young</h5>
                  <span class="work d-block">Vice President</span>
                  <div class="mt-4 about"><span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span></div>
                  <div class="mt-4"></div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="bg-white p-3 text-center rounded box">
                  <img class="img-responsive rounded-circle" src="https://i.imgur.com/HFpxxJz.jpg" width="90" />
                  <h5 class="mt-3 name">Chris Lilley</h5>
                  <span class="work d-block">Secretary</span>
                  <div class="mt-4 about"><span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span></div>
                  <div class="mt-4"></div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="bg-white p-3 text-center rounded box">
                  <img class="img-responsive rounded-circle" src="https://i.imgur.com/MZm1LNz.jpg" width="90" />
                  <h5 class="mt-3 name">Sam Clairs</h5>
                  <span class="work d-block">Treasurer</span>
                  <div class="mt-4 about"><span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span></div>
                  <div class="mt-4"></div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3">
                <div class="bg-white p-3 text-center rounded box">
                  <img class="img-responsive rounded-circle" src="https://i.imgur.com/uppKNuF.jpg" width="90" />
                  <h5 class="mt-3 name">Peter Harris</h5>
                  <span class="work d-block">Senior coach</span>
                  <div class="mt-4 about"><span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span></div>
                  <div class="mt-4"></div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="bg-white p-3 text-center rounded box">
                  <img class="img-responsive rounded-circle" src="https://i.imgur.com/oJmLthK.jpg" width="90" />
                  <h5 class="mt-3 name">Blaise Hodges</h5>
                  <span class="work d-block">Senior coach</span>
                  <div class="mt-4 about"><span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span></div>
                  <div class="mt-4"></div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="bg-white p-3 text-center rounded box">
                  <img class="img-responsive rounded-circle" src="https://i.imgur.com/HFpxxJz.jpg" width="90" />
                  <h5 class="mt-3 name">Richard Cram</h5>
                  <span class="work d-block">Senior coach</span>
                  <div class="mt-4 about"><span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span></div>
                  <div class="mt-4"></div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="bg-white p-3 text-center rounded box">
                  <img class="img-responsive rounded-circle" src="https://i.imgur.com/MZm1LNz.jpg" width="90" />
                  <h5 class="mt-3 name">Paul Rayment</h5>
                  <span class="work d-block">Players’ representative</span>
                  <div class="mt-4 about"><span>is a long established fact that eader&nbsp; will be distracted by the readable content.</span></div>
                  <div class="mt-4"></div>
                </div>
              </div>
            </div>
          </div>
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
    </main>
    <!--Main layout-->
    <Footer />
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AboutPage',
  async asyncData({ store }) {
    let foundLanding = await (await axios.get('https://seahorse-app-zkbuk.ondigitalocean.app/api/landingpages/?populate=*')).data.data
    console.log(foundLanding)
    //let landing = await store.dispatch('landing/getLanding')
    //everthing you return from here is then available with this.article. It puts it into 'data'
    return { foundLanding }
  },
}
</script>