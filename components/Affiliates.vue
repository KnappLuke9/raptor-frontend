<template>
  <v-container class="px-md-16 mx-lg-auto">
    <base-section-heading title="Who's supporting the Raptors?" />

    <v-slide-group v-model="model" class="pa-4" active-class="success" show-arrows>
      <template v-for="n in 6">
        <v-slide-item :key="n" class="align-self-center">
          <base-img :src="require(`@/assets/logo-${n}-light.png`)" color="grey" contain height="40" width="128" />
        </v-slide-item>

        <v-responsive v-if="n < 6" :key="`divider-${n}`" class="text-center" height="56" width="48">
          <v-divider vertical />
        </v-responsive>
      </template>
    </v-slide-group>
  </v-container>
</template>

<script>
export default {
  name: 'SectionAffiliates',
}
</script>
