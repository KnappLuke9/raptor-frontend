<template>
  <div>
    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" rel="stylesheet" />
    <!-- MDB -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.4.0/mdb.min.css" rel="stylesheet" />
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container-fluid">
        <!-- Navbar brand -->
        <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01" aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarExample01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item active">
              <a class="nav-link" aria-current="page" href="/">
                <img src="https://www.floorballwa.org/wp-content/uploads/2020/06/logo_raptors_2016_128px.png" height="60" style="margin-top: -13px" />
              </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" aria-current="page" href="/about">About</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/articles">News</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/events">Fixtures</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/gallery">Gallery</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">Contact</a>
            </li>
          </ul>

          <ul class="navbar-nav d-flex flex-row">
            <!-- Icons -->
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="https://www.youtube.com/channel/UCQK1yC-IB69HvYeRTUo4gJA" rel="nofollow" target="_blank">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="https://www.facebook.com/RevoRaptors" rel="nofollow" target="_blank">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="https://twitter.com/RevoRaptors" rel="nofollow" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li class="nav-item me-3 me-lg-0">
              <a class="nav-link" href="https://www.instagram.com/revoraptorsfc" rel="nofollow" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
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