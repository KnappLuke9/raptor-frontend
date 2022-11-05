<template>
  <v-app>
    <v-container>
    <v-tabs v-model="tab" color="deep-purple accent-4">
      <v-tab v-for="item in statistics" :key="statistics.id">
        {{ item.attributes.division }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in statistics" :key="statistics.id">
        <v-container class="mx-auto" width="1200px">
          <v-data-table :headers="headers" :items="item.attributes.content" mobile-breakpoint="0"> </v-data-table>
        </v-container>
      </v-tab-item>
    </v-tabs-items>
    </v-container>
  </v-app>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      tab: null,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'Name',
        },
        { text: 'Games', value: 'Games' },
        { text: 'Goals', value: 'Goals' },
        { text: 'Assists', value: 'Assists' },
        { text: 'Penalty Minutes', value: 'Penalty Minutes' },
        { text: 'Points', value: 'Points' },
      ],
    }
  },
    async asyncData({ store }) {
    let statistics = await (await axios.get('https://seahorse-app-zkbuk.ondigitalocean.app/api/statistics/')).data.data
    console.log(statistics)
    return { statistics }
  },
}
</script>

<style>
</style>