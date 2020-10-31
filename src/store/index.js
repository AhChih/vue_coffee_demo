import Vue from 'vue'
// import axios from 'axios'
import Vuex from 'vuex'

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
    // login () {
    //   const url = 'https://hexschool-tutorial.herokuapp.com/api/signin'
    //   axios.post(url).then((res) => {
    //     if (res.data.success === false) {
    //       alert(res.data.message)
    //     }
    //   })
    // },
    // registered () {
    //   const api = 'https://hexschool-tutorial.herokuapp.com/api/signup'
    //   axios.post(api).then((data) => {
    //     console.log('123', data)
    //   })
    // }
  },
  modules: {
  }
})
