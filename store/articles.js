import axios from 'axios'

export const state = () => ({
  articles: []
})

export const getters = {
  //You usually use these when you want to manipulate the data before sending it back.
  getArticlesButBackwards: state => {
    return state.articles.reverse()
  }
}

export const mutations = {
  saveArticle: (state, article) => {
    //Here we are trying to find if we already have the article in the store, and if so update it with the new one.
    //Else just push it in to an array
    let foundItem = state.articles.find(({id}) => id === article.id)
    if(foundItem) Object.assign(foundItem, article)
    else state.articles.push(article)
  }
}

export const actions = {
  async getArticle({ commit }, articleId) {

    //Here you do all the axios stuff and then commit the data to save it to the store and make it available App wide.
    console.log("You are now in the store ", articleId)

    let foundArticle = await (await axios.get('http://localhost:1337/api/articles/' + articleId + '?populate=*')).data.data
    console.log(foundArticle)

    //We need to handle the case that the article was not found. //usually a placeholder page etc. Nuxt does 1 by default
    console.log("found that article", foundArticle)
    commit('saveArticle', foundArticle)
    return foundArticle
  },
  async getArticles({ commit }) {

    let foundArticles = await (await axios.get('http://localhost:1337/api/articles/?populate=*')).data.data
    console.log(foundArticles)
    this.articles=foundArticles;
    return foundArticles
  }
}