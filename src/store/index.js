import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    persone: '',
    point: 500,
    isLoading: false,
    step: false,
    account: {
      email: '',
      password: ''
    },
    getAccountAry: {

    }
  },
  mutations: {

  },
  actions: {
    login () {
      const vm = this
      if (this.state.account.email === '' || this.state.account.password === '') {
        alert('帳號或密碼不得為空')
        return
      } else if (
        this.state.account.email !== this.state.getAccountAry.email || this.state.account.password !== this.state.getAccountAry.password
      ) {
        alert('帳號密碼有錯誤，請再次檢查')
        return
      }
      router.push('/home', () => {})
      setTimeout(() => {
        vm.state.persone = prompt('請輸入您的姓名')
        if (vm.state.persone !== null) {
          Swal.fire({
            title: vm.state.persone + '歡迎您回來',
            text: '會員點數已自動贈送 500 點',
            imageUrl: 'https://i.imgur.com/RakMKVK.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image'
          })
        }
      }, 500)
    },
    registered () {
      if (this.state.account.email === '' || this.state.account.password === '') {
        alert('帳號或密碼不得為空')
        return
      } else if (
        this.state.account.email.length > 10
      ) {
        alert('電話號碼長度錯誤')
        return
      } else if (
        this.state.account.email[0] !== '0' || this.state.account.email[1] !== '9'
      ) {
        alert('號碼必須為 09 開頭')
        return
      } else if (
        this.state.account.email === this.state.getAccountAry.email
      ) {
        alert('此帳號已被註冊過')
        return
      }
      const accountStr = JSON.stringify(this.state.account)
      localStorage.setItem('account', accountStr)
      this.state.getAccountAry = JSON.parse(localStorage.getItem('account'))
      console.log(this.state.getAccountAry)
      alert('已完成註冊')
    },
    getAccount () {
      this.state.getAccountAry = JSON.parse(localStorage.getItem('account'))
    }
  },
  modules: {
  }
})
