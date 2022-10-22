<template>
  <v-card class="mx-auto"
    width="1200px">
    <v-card-title>
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
    <a :href="`/fixtures/${item.id}`">
      {{ item.title.rendered }}
    </a>
  </template>
    </v-data-table>
  </v-card>
</template>


<script>
import axios from 'axios'
import usersData1 from "/assets/upload-2020.json";
import usersData2 from "/assets/upload-2021.json";

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
          { text: 'Date', value: 'date', filterable: false},
          { text: 'League', value: 'leagues[0]' },
          { text: 'Season', value: 'seasons[0]' },
          { text: 'Venue', value: 'venues[0]' },
          { text: 'Result', value: 'main_results', filterable: false },
          { text: 'Winner', value: 'winner' }
        ]
      }
    },
  async asyncData({ store }) {
        let results =[];

    let fixtures2021 = usersData1
    console.log(fixtures2021)

    fixtures2021.forEach(element => {
              results.push(element.fixture)
    });
    //need to fix the key to be unique
    //move the fixtures from past 2 years into stored data here

    let fixtures2020 = usersData2
    console.log(fixtures2020)

    fixtures2020.forEach(element => {
              results.push(element.fixture)
    });

    return { results }
  },
  }
</script>


<style>

</style>