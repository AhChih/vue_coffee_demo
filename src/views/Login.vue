<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <div class="logo_box">
      <img class="logo" src="https://i.imgur.com/4PvYjzf.png" alt="">
      <h1>沒星巴克好喝咖啡館</h1>
    </div>
    <form class="form-box">
      <div class="form-group">
        <label>信箱</label>
        <input type="email" class="form-control"  placeholder="Enter email" v-model="$store.state.account.email" name="account">
      </div>
      <div class="form-group">
        <label>密碼</label>
        <input type="password" class="form-control" placeholder="Password" v-model="$store.state.account.password" name="password">
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

    }
  },
  computed: {
    isLoading () {
      return this.$store.state.isLoading
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login')
    },
    registered () {
      this.$store.dispatch('registered')
    }
  }
}
</script>
