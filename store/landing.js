import axios from 'axios'

export const actions = {
  async getLanding() {

    let foundLanding = await (await axios.get('https://seahorse-app-zkbuk.ondigitalocean.app/api/landing/?populate=*')).data.data
    console.log(foundLanding)
    return foundLanding
  }
}