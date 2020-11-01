import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    point: 500,
    isLoading: false,
    step: false,
    account: {
      email: '',
      password: ''
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
      }
      const xhr = new XMLHttpRequest()
      xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true)
      xhr.setRequestHeader('Content-Type', 'application/json')
      const data = JSON.stringify(this.state.account)
      xhr.send(data)
      vm.state.isLoading = true
      xhr.onload = function () {
        vm.state.isLoading = false
        const callBackData = JSON.parse(xhr.responseText)
        if (callBackData.success === true) {
          router.push('/home', () => {})
          Swal.fire({
            title: '冠興，歡迎您回來',
            text: '會員點數已自動贈送 500 點',
            imageUrl: 'https://i.imgur.com/RakMKVK.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image'
          })
        } else {
          alert(callBackData.message)
        }
      }
    },
    registered () {
      if (this.state.account.email === '' || this.state.account.password === '') {
        alert('帳號或密碼不得為空')
        return
      }
      const xhr = new XMLHttpRequest()
      xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true)
      xhr.setRequestHeader('Content-Type', 'application/json')
      const data = JSON.stringify(this.state.account)
      xhr.send(data)
      xhr.onload = function () {
        const callBackData = JSON.parse(xhr.responseText)
        alert(callBackData.message)
      }
    },
    sweetAlert () {
      console.log('ttt')
    }
  },
  modules: {
  }
})
