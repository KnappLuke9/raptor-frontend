<template>
  <v-card>
    <v-card-title>
      Nutrition
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="results"
      :search="search"
        :footer-props="{
    'items-per-page-options': [10, 20, 30, 40, 50]
  }"
    >
      <template #item.title.rendered="{ item }">
    <!-- <a target="_blank" :href="`tel:${item.title.rendered}`">
      {{ item.title.rendered }}
    </a> -->
    <a :href="`/`">
      {{ item.title.rendered }}
    </a>
  </template>
    </v-data-table>
  </v-card>
</template>


<script>
import axios from 'axios'

  export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Title',
            align: 'start',
            sortable: false,
            value: 'title.rendered',
          },
          { text: 'Date', value: 'date' },
          { text: 'League', value: 'leagues[0]' },
          { text: 'Season', value: 'seasons[0]' },
          { text: 'Venue', value: 'venues[0]' },
          { text: 'Result', value: 'main_results' },
          { text: 'Winner', value: 'winner' }
        ]
      }
    },
  async asyncData({ store }) {
    let fixtures = await (await axios.get('https://seahorse-app-zkbuk.ondigitalocean.app/api/fixtures')).data.data
    let results =[];

    fixtures.forEach(element => {
      element.attributes.content.fixtures.forEach(fixture => {
              results.push(fixture)
      });
    });
    return { results }
  },
  }
</script>


<style>

</style>