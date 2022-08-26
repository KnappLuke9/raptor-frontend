import axios from 'axios'

export const state = () => ({
  teams: []
})

export const getters = {
  //You usually use these when you want to manipulate the data before sending it back.
  // getArticlesButBackwards: state => {
  //   return state.articles.reverse()
  // }
}

export const mutations = {
  saveTeam: (state, team) => {
    //Here we are trying to find if we already have the article in the store, and if so update it with the new one.
    //Else just push it in to an array
    let foundItem = state.teams.find(({id}) => id === team.id)
    if(foundItem) Object.assign(foundItem, team)
    else state.teams.push(team)
  }
}

export const actions = {
  async getTeam({ commit }, teamID) {
    let foundTeam = await (await axios.get('http://localhost:1337/api/teams/' + teamID + '?populate=*')).data.data
    //We need to handle the case that the article was not found. //usually a placeholder page etc. Nuxt does 1 by default
    console.log(foundTeam)
    commit('saveTeam', foundTeam)
    return foundTeam
  },
  async getTeams({ commit }) {

    let foundTeam = await (await axios.get('http://localhost:1337/api/teams/?populate=*')).data.data
    console.log(foundTeam)
    this.articles=foundTeam;
    return foundTeam
  }
}