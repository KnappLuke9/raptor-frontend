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
          text: 'Raptors recognise that the development of floorball players is essential to providing a strong and competitive floorball community within Western Australia.',
        },
        {
          icon: 'mdi-run-fast',
          title: 'Compete',
          text: 'Raptors are a competition focused club, with the FWA State League summer competition and the Revolution Sports junior state leagues the primary focuses.',
        },
        {
          icon: 'mdi-account-plus',
          title: 'Respect',
          text: 'Competition must be tough but fair and new players should feel safe and have a fun pathway forward.',
        },
      ],
    }),
  }
</script>
