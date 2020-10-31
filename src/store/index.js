import Vue from 'vue'
// import axios from 'axios'
import Vuex from 'vuex'
import router from '../router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    account: {
      email: '',
      password: ''
    }
  },
  mutations: {

  },
  actions: {
    login () {
      if (this.state.account.email === '' || this.state.account.password === '') {
        alert('帳號或密碼不得為空')
        return
      }
      const xhr = new XMLHttpRequest()
      xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true)
      xhr.setRequestHeader('Content-Type', 'application/json')
      const data = JSON.stringify(this.state.account)
      xhr.send(data)
      xhr.onload = function () {
        console.log(xhr.responseText)
        const callBackData = JSON.parse(xhr.responseText)
        if (callBackData.success === true) {
          router.push('/home', () => {})
        } else {
          alert(callBackData.message)
        }
      }
      // const url = 'https://hexschool-tutorial.herokuapp.com/api/signin'
      // this.$http.post(url).then((res) => {
      //   if (res.data.success === false) {
      //     alert(res.data.message)
      //   }
      // })
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
      // const api = 'https://hexschool-tutorial.herokuapp.com/api/signup'
      // this.$http.post(api).then((data) => {
      //   console.log('123', data)
      // })
    }
  },
  modules: {
  }
})
