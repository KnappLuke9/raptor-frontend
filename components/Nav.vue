<template>
  <nav>
    <v-app-bar fixed >
    </v-app-bar>
  </nav>
</template>


<style scoped>
.ml-auto {
  margin-left: auto;
}
#intro {
  /* Margin to fix overlapping fixed navbar */
  margin-top: 58px;
}
@media (max-width: 991px) {
  #intro {
    /* Margin to fix overlapping fixed navbar */
    margin-top: 45px;
  }
}
</style>