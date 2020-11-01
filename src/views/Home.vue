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
    <div class="banner">
      <h3 class="pt-5 pl-5">親愛的，想來杯好咖啡嗎？</h3>
      <button class="btn btn-danger mt-3 mb-5">抽獎去</button>
        <p class="unfinish">今日未完成工作：<span>暫時還沒有</span></p>
        <p class="finish">今日已完成工作：<span>LOL 上鑽石</span></p>
        <p class="doing">正在進行的工作：<span>跟同學們做報告</span></p>
    </div>
    <div class="row mt-3">
      <div class="col-xl-3 col-md-12 col-sm-12">
        <vue-cal class="vuecal--rounded-theme vuecal--green-theme"
          xsmall
          hide-view-selector
          :time="false"
          active-view="month"
          :disable-views="['week']"
          style="height: 300px">
        </vue-cal>
      </div>
      <div class="col-xl-9 news" >
        <h4>最新消息</h4>
        <hr>
        <ul>
          <a href="#"><li>2020/11/04 慶祝南台旗艦店正式開幕囉！憑學生證可享買一送一</li></a>
          <hr>
          <a href="#"><li>2020/11/03 全新漂浮黑咖啡正式上架囉！</li></a>
          <hr>
          <a href="#"><li>2020/11/02 開始只要下載 APP 就送優惠卷唷！</li></a>
          <hr>
          <a href="#"><li>2020/10/30 APP 測試版正式上線</li></a>
        </ul>
      </div>
      <div class="col-12 footer">
        <h5>Copyright © 2020 好玩工作室 健誌</h5>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import $ from 'jquery'
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
