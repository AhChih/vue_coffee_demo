<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img style="width:60px" class="logo" src="https://i.imgur.com/4PvYjzf.png" alt="">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" href="#">首頁 <span class="sr-only">(current)</span></a>
          <a class="nav-link" href="#">優惠卷</a>
          <a class="nav-link" href="#">訂單查詢</a>
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">會員管理</a>
        </div>
      </div>
    </nav>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://i.imgur.com/Fo2acjx.jpeg" style="heigh: 50px" class="d-block w-100" alt="...">
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-xl-3 col-md-6 col-sm-12">
        <vue-cal class="vuecal--rounded-theme vuecal--green-theme"
          xsmall
          hide-view-selector
          :time="false"
          active-view="month"
          :disable-views="['week']"
          style="height: 300px">
        </vue-cal>
      </div>
    </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
export default {
  data () {
    return {

    }
  },
  components: {
    VueCal
  }
}
</script>
