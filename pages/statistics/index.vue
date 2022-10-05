<template>
  <v-card>
    <v-card-title>
      Nutrition
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
    ></v-data-table>
  </v-card>
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Player',
          align: 'start',
          sortable: false,
          value: 'player',
        },
        { text: 'Goals', value: 'g' },
        { text: 'Assists', value: 'a' },
        { text: 'Penalty Minutes', value: 'pim' },
        { text: 'Games Played', value: 'games' },
        { text: 'Team', value: 'team' },
      ],
    }
  },
  async asyncData({ store }) {
    let fixtures = await (await axios.get('https://seahorse-app-zkbuk.ondigitalocean.app/api/fixtures')).data.data
    let results = [{0:""}]

    fixtures.forEach((element) => {
      element.attributes.content.fixtures.forEach((fixture) => {
        //iterate through the results array, check if player name already exists
        //update the goals, assists, PIM and games player on the player if exists
        //otherwise add new entry

        if (fixture.performance['Raptors'] !== undefined) {
          Object.keys(fixture.performance['Raptors']).forEach(function (key) {
            let found = false;
            let games = 0
            let assists = 0
            let pim = 0
            let goals = 0
            let team = 'Raptors'

            results.forEach((result) => {
              if (result.player === key) {
                games = Number(result.games)
                assists = Number(result.a)
                pim = Number(result.pim)
                goals = Number(result.g)
                found = true;
              }
            })
            if(found) {
              //results.pop(foundItem)
            }

            if(fixture.performance['Raptors'][key]['g'] !== undefined) {
              goals = Number(fixture.performance['Raptors'][key]['g']) + goals
            }
            if(fixture.performance['Raptors'][key]['a'] !== undefined) {
              assists = Number(fixture.performance['Raptors'][key]['a']) + assists
            }
            if(fixture.performance['Raptors'][key]['pim'] !== undefined) {
              pim = Number(fixture.performance['Raptors'][key]['pim']) + pim
            }
            // if(found) {
            //   let objIndex = results.findIndex((obj => obj.player === key));
            //   results.pop(results[objIndex])
            // }
            results.push({ player: key, g: goals, a: assists, pim: pim, games: games + 1, team: team })
          })
        }
        // results.push(fixture)
      if (fixture.performance['Raptors White'] !== undefined) {
          Object.keys(fixture.performance['Raptors White']).forEach(function (key) {
            let games = 0
            let assists = 0
            let pim = 0
            let goals = 0
            let team = 'Raptors White'
            let found = false

            results.forEach((result) => {
              if (result.player === key) {
                games = Number(result.games)
                assists = Number(result.a)
                pim = Number(result.pim)
                goals = Number(result.g)
                found = true;
              }
            })
            if(fixture.performance['Raptors White'][key]['g'] !== undefined) {
              goals = Number(fixture.performance['Raptors White'][key]['g']) + goals
            }
            if(fixture.performance['Raptors White'][key]['a'] !== undefined) {
              assists = Number(fixture.performance['Raptors White'][key]['a']) + assists
            }
            if(fixture.performance['Raptors White'][key]['pim'] !== undefined) {
              pim = Number(fixture.performance['Raptors White'][key]['pim']) + pim
            }
            // if(found) {
            //   let objIndex = results.findIndex((obj => obj.player === key));
            //   results.pop(results[objIndex])
            // }
            results.push({ player: key, g: goals, a: assists, pim: pim, games: games + 1, team: team })
          })
        }      
      
      })

    })
    return { results }
  },
}
</script>


<style>
</style>