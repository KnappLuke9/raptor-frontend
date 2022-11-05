<template>
  <v-app>
    <v-container>
    <v-tabs v-model="tab" color="deep-purple accent-4">
      <v-tab v-for="item in ladders" :key="ladders.id">
        {{ item.attributes.division }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item v-for="item in ladders" :key="ladders.id">
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
          text: 'Team',
          align: 'start',
          sortable: false,
          value: 'Team',
        },
        { text: 'Played', value: 'Played' },
        { text: 'Wins', value: 'Wins' },
        { text: 'Draws', value: 'Draws' },
        { text: 'Losses', value: 'Losses' },
        { text: 'Forfeits', value: 'Forfeits' },
        { text: 'For', value: 'For' },
        { text: 'Against', value: 'Against' },
        { text: 'Diff', value: 'Diff.' },
        { text: 'Points', value: 'Points' },
        { text: 'WR1', value: 'WR1' },
      ],
    }
  },
    async asyncData({ store }) {
    let ladders = await (await axios.get('https://seahorse-app-zkbuk.ondigitalocean.app/api/ladders/')).data.data
    return { ladders }
  },
}
</script>

<style>
</style>