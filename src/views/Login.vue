<template>
  <div>
    <form class="form-box">
        <div class="form-group">
          <label>信箱</label>
          <input type="email" class="form-control"  placeholder="Enter email" v-model="account.email" name="account">
        </div>
        <div class="form-group">
          <label>密碼</label>
          <input type="password" class="form-control" placeholder="Password" v-model="account.password" name="password">
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input">
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
      <button type="submit" class="btn btn-primary" @click.prevent="login()">登入</button>
      <button type="submit" class="btn btn-danger ml-3" @click.prevent="registered()">註冊</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      account: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const xhr = new XMLHttpRequest()
      xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true)
      xhr.setRequestHeader('Content-Type', 'application/json')
      const data = JSON.stringify(this.account)
      xhr.send(data)
      xhr.onload = function () {
        console.log(xhr.responseText)
      }
      // const url = 'https://hexschool-tutorial.herokuapp.com/api/signin'
      // this.$http.post(url).then((res) => {
      //   if (res.data.success === false) {
      //     alert(res.data.message)
      //   }
      // })
    },
    registered () {
      const xhr = new XMLHttpRequest()
      xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true)
      xhr.setRequestHeader('Content-Type', 'application/json')
      const data = JSON.stringify(this.account)
      xhr.send(data)
      xhr.onload = function () {
        console.log(xhr.responseText)
      }
      // const api = 'https://hexschool-tutorial.herokuapp.com/api/signup'
      // this.$http.post(api).then((data) => {
      //   console.log('123', data)
      // })
    }
  }
}
</script>
