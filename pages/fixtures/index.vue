<template>
  <v-card class="mx-auto" width="1200px">
    <v-card-title>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="results"
      :search="search"
      :footer-props="{
        'items-per-page-options': [10, 20, 30, 40, 50],
      }"
      mobile-breakpoint="0"
    >
      <!-- <template #item.title.rendered="{ item }">
        <a :href="`/fixtures/${item.id}`">
          {{ item.title.rendered }}
        </a>
      </template> -->
      <template v-slot:item.date="{ item }">
        <span>{{ new Date(item.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }) }}</span>
      </template>
      <template v-slot:item.main_results="{ item }">
        <span>{{ item.main_results[0] }} - {{ item.main_results[1] }}</span>
      </template>
    </v-data-table>
  </v-card>
</template>


<script>
import axios from 'axios'
import fixtures2020 from '/assets/upload-2020.json'
import fixtures2021 from '/assets/upload-2021.json'

export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Title',
          align: 'start',
          sortable: false,
          value: 'title.rendered',
        },
        { text: 'Date', value: 'date', filterable: false },
        { text: 'League', value: 'leagues[0]' },
        { text: 'Season', value: 'seasons[0]' },
        { text: 'Venue', value: 'venues[0]' },
        { text: 'Result', value: 'main_results', filterable: false },
        { text: 'Winner', value: 'winner' },
      ],
    }
  },
  async asyncData({ store }) {
    let results = []

    fixtures2021.forEach((element) => {
      results.push(Object.assign({ id: element.id }, element.fixture))
    })

    fixtures2020.forEach((element) => {
      results.push(Object.assign({ id: element.id }, element.fixture))
    })
    console.log(results)

    return { results }
  },
}
</script>


<style>
</style>