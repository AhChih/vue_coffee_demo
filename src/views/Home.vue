<template>
  <div class="container">
    <Navbar></Navbar>
    <div class="banner">
      <h3 class="">親愛的{{ $store.state.persone }}，想來杯好咖啡嗎？</h3>
      <h4 class="">目前累積的會員點數：{{ $store.state.point }}</h4>
      <button class="btn btn-danger mt-3 mb-5" @click.prevent="goCoupon()">抽獎去</button>
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
          <a href="#"><li>2020/11/02 現在只要下載 APP 就送優惠卷唷！</li></a>
          <hr>
          <a href="#"><li>2020/10/30 台灣首家最大 APP 正式上線啦！</li></a>
        </ul>
      </div>
    </div>
    <hr>
    <div class="about">
    <h4 class="my-3">關於我們</h4>
      <div class="row my-5">
        <video class="col-lg-6 col-sm-12 video" loop autoplay muted>
          <source type="video/mp4" src="../assets/coffee.mp4">
        </video>
        <div class="col-lg-6 about_text">
          <h4>為什麼比星巴克難喝</h4>
          <span>咖啡是一種極不穩定的液體，因為義式濃縮咖啡的沖煮步驟十分繁雜，
            每一個步驟都會coffee2影響到義式濃縮咖啡的最終品質，並改變咖啡的特性，
            所以瞭解其沖煮方式並選擇適當的咖啡豆十分的重要。義式濃縮咖啡機可以連續萃取數杯咖啡，
            沖煮過程中的高壓能將咖啡豆中的油脂和膠質乳化溶解，咖啡豆中的菁華經由壓力被完全萃取出來，
            使得煮出的咖啡濃度更濃，口味和香味更好。記得不要將咖啡研磨的太細，
            否則萃取出來的咖啡將會太苦
          </span>
        </div>
      </div>
      <hr>
    </div>
    <div class="cooperation">
      <h3 class="my-5 text-center">我們的合作商</h3>
          <div class="row text-center">
      <div class="col-lg-2 col-md-3 rwd">
        <img src="https://i.imgur.com/v2cRZ1Y.png" class="w-75" alt="">
      </div>
      <div class="col-lg-2 col-md-3 rwd">
        <img src="https://i.imgur.com/4A1e4cA.png" class="w-50" alt="">
      </div>
      <div class="col-lg-2 col-md-3 rwd">
        <img src="https://i.imgur.com/D1d2yjl.png" class="w-75" alt="">
      </div>
      <div class="col-lg-2 col-md-3 rwd">
        <img src="https://i.imgur.com/vx4Je5s.png" class="w-75" alt="">
      </div>
      <div class="col-lg-2 col-md-3 rwd">
        <img src="https://i.imgur.com/MVLwOGT.png" class="w-50" alt="">
      </div>
      <div class="col-lg-2 col-md-3 rwd">
        <img src="https://upload.wikimedia.org/wikipedia/zh/1/1d/85c_Daily_Cafe_logo.svg" class="w-50" alt="">
      </div>
      <div class="col-lg-2 col-md-3 rwd">
        <img src="https://upload.wikimedia.org/wikipedia/zh/thumb/b/bf/Starbucks_Coffee.svg/200px-Starbucks_Coffee.svg.png" class="w-50" alt="">
      </div>
      <div class="col-lg-2 col-md-3 rwd">
        <img src="https://picdn.gomaji.com/uploads/stores/893/49893/255331/%E8%90%8A%E7%88%BE%E5%AF%8C%E6%96%B0%E7%89%88LOGO-RGB-(1).png" class="w-75" alt="">
      </div>
      <div class="col-lg-2 col-md-3 rwd">
        <img src="https://buzzorange.com/techorange/wp-content/uploads/sites/2/2018/02/4570.webp?png" class="w-50" alt="">
      </div>
      <div class="col-lg-2 col-md-3 rwd">
        <img src="https://www.vjmedia.com.hk/wp-content/uploads/2020/06/15/207615/24991509_1214722965296209_7229732677529513301_n.jpg" class="w-50" alt="">
      </div>
            <div class="col-lg-2 col-md-3 rwd">
        <img src="https://play-lh.googleusercontent.com/MMBG4AZmpMhSfhF5k7QnFmhvFbaF5ZC_BtEOIKRt9TIkUZjul2lWwPZV75PwTfoSm23-jgMxkroRGA-vkDg=s180-rw" class="w-50" alt="">
      </div>
      <div class="col-lg-2 col-md-3 rwd">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Tainan_City_Government_Logo.svg/1920px-Tainan_City_Government_Logo.svg.png" class="w-75" alt="">
      </div>
    </div>
    </div>
    <h4 class="text-center no-text">----- 以上通通沒有 -----</h4>
    <div class="col-12 footer">
      <h5>Copyright © 2020 好玩工作室 健誌</h5>
    </div>
  </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import Navbar from '../component/navbar'

export default {
  data () {
    return {
    }
  },
  components: {
    VueCal,
    Navbar
  },
  methods: {
    goCoupon () {
      alert('這麼快就想抽獎，慢慢等吧你！')
    },
    onToggle (active) {
    }
  }
}
</script>
