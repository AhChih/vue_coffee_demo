<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <img style="width:60px" class="logo" src="https://i.imgur.com/4PvYjzf.png" alt="">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/home" class="nav-link" href="#">首頁 <span class="sr-only">(current)</span></router-link>
          <router-link to="/coupon" class="nav-link" href="#">優惠卷</router-link>
          <a class="nav-link disabled" href="#">線上訂購</a>
          <a class="nav-link disabled" href="#">訂單查詢</a>
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">會員管理</a>
        </div>
      </div>
    </nav>
    <div class="coupon_bg">

    </div>
  </div>
</template>
