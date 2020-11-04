<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <img style="width:60px" class="logo" src="https://i.imgur.com/4PvYjzf.png" alt="">
      <button class="navbar-toggler" style="border:none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <tasty-burger-button
   :type="buttonType"
   :active="isActive"/>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav">
          <router-link to="/home" style="font-size:25px" class="nav-link" href="#">首頁 <span class="sr-only">(current)</span></router-link>
          <router-link to="/coupon" style="font-size:25px" class="nav-link" href="#">優惠卷</router-link>
          <a class="nav-link disabled" style="font-size:25px" href="#">線上訂購</a>
          <a class="nav-link disabled" style="font-size:25px" href="#">訂單查詢</a>
          <a class="nav-link disabled" style="font-size:25px" href="#" tabindex="-1" aria-disabled="true">會員管理</a>
        </div>
        <div class="ml-auto">
          <router-link to="/" class="nav-link ml-auto p-0" style="font-size:21px" href="#" tabindex="-1" aria-disabled="true">登出</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { TastyBurgerButton } from 'vue-tasty-burgers'
export default {
  data () {
    return {
      buttonType: 'stand',
      isActive: false
    }
  },
  components: {
    TastyBurgerButton
  },
  methods: {

  }
}
</script>
