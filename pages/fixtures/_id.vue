<template>
  <div>
    <v-container class="fixture-stack">
      <v-row class="vs-bar">
        <v-col class="team-logo">
          <v-img contain max-height="150" max-width="200" :src="this.fixture.homeTeam.logo" />
        </v-col>
        <v-col class="date-time-score">
          <div>
            <div>{{this.humanDate}}</div>
            <div>{{this.humanTime}}</div>
          </div>
          <div>{{this.homeTeamScore}} - {{this.awayTeamScore}}</div>
        </v-col>
        <v-col class="team-logo">
          <v-img contain max-height="150" max-width="200" :src="this.fixture.awayTeam.logo" />
        </v-col>
      </v-row>
      <v-row>
        <iframe width="600" height="450" style="border:0" loading="lazy" allowfullscreen
          referrerpolicy="no-referrer-when-downgrade" :src="this.fixture.mapsUrl">
        </iframe>
      </v-row>
      <v-row>
        <h5>{{this.fixture.homeTeam.name}}</h5>
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>G</th>
            <th>A</th>
            <th>PM</th>
          </tr>
          <tr v-for="{ number, name, goals, assists, penaltyMinutes } in this.fixture.homeTeam.stats">
            <td>{{number}}</td>
            <td>{{name}}</td>
            <td>{{goals}}</td>
            <td>{{assists}}</td>
            <td>{{penaltyMinutes}}</td>
          </tr>
        </table>
      </v-row>
      <v-row>
        <h5>{{this.fixture.awayTeam.name}}</h5>
        <table>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>G</th>
            <th>A</th>
            <th>PM</th>
          </tr>
          <tr v-for="{ number, name, goals, assists, penaltyMinutes } in this.fixture.awayTeam.stats">
            <td>{{number}}</td>
            <td>{{name}}</td>
            <td>{{goals}}</td>
            <td>{{assists}}</td>
            <td>{{penaltyMinutes}}</td>
          </tr>
        </table>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  async asyncData({ store, route }) {
    const fixture = {
      homeTeam: {
        name: `Raptor's White`,
        logo: `https://floorballwa.org/wp-content/uploads/2020/06/logo_raptors_2016_128px.png`,
        stats: [
          { number: "1", name: `Luke Knapp`, goals: 3, assists: 4, penaltyMinutes: 0 },
          { number: "2", name: `Morgan Trench`, goals: 2, assists: 3, penaltyMinutes: 5 },
        ]
      },
      awayTeam: {
        name: `Western Wolves`,
        logo: `https://floorballwa.org/wp-content/uploads/2020/06/wolves_160px-128x120-1.png`,
        stats: [
          { number: "1", name: `Joe bloggs`, goals: 1, assists: 1, penaltyMinutes: 0 },
          { number: "2", name: `Big Head`, goals: 2, assists: 1, penaltyMinutes: 5 },
        ]
      },
      date: new Date(),
      // venue: "Revo Sports, Lemnos Street, Shenton Park, Western Australia"
      mapsUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211.5787915042358!2d115.79729126090561!3d-31.953824438282904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xae5b73c290f7eb7c!2sRevo%20Fitness%20-%20Shenton%20Park!5e0!3m2!1sen!2sau!4v1664038368751!5m2!1sen!2sau`
    }
    return { fixture }
  },
  data() {
    return {
      key: 'blah',
    }
  },
  mounted() { },
  computed: {
    // mapsUrl(){
    //   // const q = this.fixture.venue.replaceAll(/[\,\ ]+/ig, "+")
    //   // return `https://www.google.com/maps/embed/v1/view?key=AIzaSyA0ZNYfummHURcAOV_lMg6o7HFd0BktDBM&q=${q}`
    // },
    homeTeamScore() {
      return this.fixture.homeTeam.stats.reduce((acc, val) => acc + val.goals, 0);
    },
    awayTeamScore() {
      return this.fixture.awayTeam.stats.reduce((acc, val) => acc + val.goals, 0);
    },
    humanDate() {
      return this.fixture.date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })
    },
    humanTime() {
      return this.fixture.date.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })
    }
  },
}
</script>

<style>
.vs-bar>.date-time-score {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.vs-bar>.date-time-score>div>div {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.team-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fixture-stack>.row {
  /* background-color: lightgrey; */
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
