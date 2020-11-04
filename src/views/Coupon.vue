<template>
  <div class="container">
   <Navbar></Navbar>
    <div>
      <div class="coupon-box text-center">
        <h4 class="text-coffee">命運的轉盤</h4>
        <h4>目前累積點數： {{ $store.state.point }} </h4>
        <div class="coupon-turntable pt-3">
          <div class="coupon-turntable-bg" @click.prevent="getRandom()">
            <div class="coupon-turntable-arrow"></div>
          </div>
        </div>
      </div>
      <!-- modal -->
      <div class="modal" id="couponModal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered d-flex justify-content-center"
          role="document">
          <div class="modal-content bg-transparent border-0 text-center modal-box">
            <div class="modal-body modal-item" v-if="prizeShow">
              <h3 class="mb-2 pt-3">恭喜獲得</h3>
              <h3 class="mb-2 pt-3 text-danger">{{ prize.name }}</h3>
              <img src="https://i.imgur.com/bmffpEl.jpg" alt="" class="pt-3" />
            </div>
            <div class="modal-btn justify-content-center" v-if="prizeShow">
              <button type="button" class="btn btn-success px-5 my-3"
                data-dismiss="modal" @click="shareFriend()">
                與好友分享
              </button>
            </div>
            <div class="modal-body modal-item-nowin" v-if="prizeShow === false">
              <h3 class="pt-3">沒有中獎</h3>
              <h3 class="pt-3 text-danger">請繼續努力</h3>
              <img src="https://i.imgur.com/iFV7X3c.png" alt="" class="pt-3" />
              <div class="mt-3 justify-content-center" v-if="prizeShow === false">
                <button type="button" class="btn btn-danger my-3"
                  data-dismiss="modal" @click.prevent="reset()">
                  再試一次
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- share modal -->
      <div class="modal" id="shareModal" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-dialog-centered d-flex justify-content-center"
          role="document">
          <div class="modal-content bg-transparent border-0 text-center modal-box">
            <div class="modal-body modal-item" v-if="prizeShow">
              <h3 class="mb-2 pt-3">與好友分享</h3>
              <h3 class="mb-2 pt-3 text-danger">{{ prize.name }}</h3>
              <img src="https://i.imgur.com/8vMGbu4.png" alt="" class="pt-3 w-50" />
              <a class="pt-3 d-block" href="https://lineit.line.me/share/ui?url=分享頁面的網址"><img src="https://1.bp.blogspot.com/-FvoBw8lnlC8/WHgA91RmxiI/AAAAAAAAIvA/CazIGx6Jlp8PJ4pE40kt2XMxwFmeBSdjgCLcB/s1600/168x40.png" alt=""></a>
            </div>
            <div class="modal-body modal-item-nowin" v-if="prizeShow === false">
              <h3 class="pt-3">沒有中獎</h3>
              <h3 class="pt-3 text-danger">請繼續努力</h3>
              <img src="https://i.imgur.com/iFV7X3c.png" alt="" class="pt-3" />
              <div class="mt-3 justify-content-center" v-if="prizeShow === false">
                <button type="button" class="btn btn-danger my-3"
                  data-dismiss="modal" @click.prevent="reset()">
                  再試一次
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 footer">
      <h5>Copyright © 2020 好玩工作室 健誌</h5>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import Navbar from '../component/navbar'

export default {
  data () {
    return {
      start: true,
      prizeShow: true,
      isClick: true,
      coupon: [
        {
          // n = 0 , 2 , 4 , 6 , 8
          couponId: 1,
          name: '',
          coupon_code: ''
        },
        {
          // n = 7
          couponId: 2,
          name: '九折優惠卷',
          coupon_code: 'travel090'
        },
        {
          // n = 5
          couponId: 3,
          name: '七折優惠卷',
          coupon_code: 'travel070'
        },
        {
          // n = 3
          couponId: 4,
          name: '三折優惠卷',
          coupon_code: 'travel030'
        },
        {
          // n = 1
          couponId: 5,
          name: '最大獎：免費',
          coupon_code: 'longManGi'
        }
      ],
      deg: 0,
      prize: {
        name: '',
        coupon_code: ''
      }
    }
  },
  methods: {
    getRandom () {
      const vm = this
      if (vm.isClick) {
        vm.$store.state.point -= 100
        vm.isClick = false
        // 產生隨機亂數 * 8
        const n = Math.floor(Math.random() * 8)
        if (vm.start) {
          switch (n) {
            default:
              vm.roateTurntable(0, n)
              break
            case 1:
              vm.roateTurntable(45, n)
              break
            case 2:
              vm.roateTurntable(90, n)
              break
            case 3:
              vm.roateTurntable(135, n)
              break
            case 4:
              vm.roateTurntable(180, n)
              break
            case 5:
              vm.roateTurntable(225, n)
              break
            case 6:
              vm.roateTurntable(270, n)
              break
            case 7:
              vm.roateTurntable(315, n)
              break
          }
        } else {
          vm.isClick = true
          vm.$store.state.point += 100
          vm.reset()
        }
      }
    },
    roateTurntable (deg, n) {
      const vm = this
      const d = Number(deg) + 1440
      let prizeNum
      $('.coupon-turntable-arrow').addClass('rotateStrat')
      $('.coupon-turntable-arrow').css('transform', `rotate(${d}deg)`)
      if (n === 7) {
        vm.prizeShow = true
        prizeNum = 1
      } else if (n === 5) {
        vm.prizeShow = true
        prizeNum = 4
      } else if (n === 3) {
        vm.prizeShow = true
        prizeNum = 3
      } else if (n === 1) {
        vm.prizeShow = true
        prizeNum = 2
      } else {
        prizeNum = 0
        vm.prizeShow = false
      }
      vm.prize = vm.coupon[prizeNum]
      setTimeout(() => {
        $('#couponModal').modal('show')
        vm.isClick = true
      }, 5200)
      vm.start = false
    },
    reset () {
      const vm = this
      vm.start = true
      $('.coupon-turntable-arrow').removeClass('rotateStrat')
      $('.coupon-turntable-arrow').css('transform', 'rotate(0deg)')
    },
    shareFriend () {
      setTimeout(() => {
        $('#shareModal').modal('show')
      }, 500)
    }
  },
  components: {
    Navbar
  }
}
</script>
