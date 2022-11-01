<template>
  <base-section
    id="features"
    style="background-color: #263238"
  >
    <v-responsive
      class="px-md-16 mx-lg-auto"
      max-width="1350"
    >
      <v-container fluid>
        <v-row>
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            sm="4"
            md="4"
          >
            <base-info-card
              align="center"
              dark
              v-bind="card"
            />
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionFeatures',

    data: () => ({
      cards: [
        {
          icon: 'mdi-dumbbell',
          title: 'Develop',
          text: 'Providing a safe, inclusive and professional environment to promote skills on and off the court for all our members.',
        },
        {
          icon: 'mdi-run-fast',
          title: 'Compete',
          text: 'Train hard and play hard to foster a culture of aspiration and achievement.',
        },
        {
          icon: 'mdi-account-plus',
          title: 'Respect',
          text: 'Each player and the club must respect their peers, their opposition and the officials governing the sport.',
        },
      ],
    }),
  }
</script>
