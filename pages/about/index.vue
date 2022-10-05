<template>
  <v-app>
    <!--Main layout-->
    <main class="v-flex justify-content-center">
                <v-img
    dark
    src="https://res.cloudinary.com/dpf3gjhvt/image/upload/v1661815079/277585247_401806131945425_368506300352004029_n_d21dc25dae.jpg"
      max-height="600"

  >
  </v-img>
      <v-container class="px-md-16 mx-lg-auto">
        <section class="mb-4">
          <div type="text" id="view-container-wiki" readonly v-html="foundLanding[0].attributes.content"></div>
          <div class="container text-center mt-5 mb-2">
            <h1 class="mb-0">Meet our staff</h1>
            <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</span>
          </div>
          <v-container class="px-md-16 mx-lg-auto">
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
          </v-container>
        </section>
      </v-container>
    </main>
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