<template>
  <div class="login">
    <h1>Login</h1>
    <input
      type="text"
      placeholder="Email"
      v-model="email"
    >
    <br>
    <input
      type="password"
      placeholder="Senha"
      v-model="senha"
    >
    <br>
    <div class="btn-login">
      <button @click="login">Login</button>
    </div>
    <div class="login-choice">
        <span>or Sign In with</span>
        <SocialLogin/>
    </div>
    <p>
      Você não tem conta?
      <span>
        <router-link to="/registrar">crie uma conta</router-link>
      </span>
    </p>
  </div>
</template>

<script>

import SocialLogin from '../components/SocialLogin.vue'
export default {
  name: "login",
  components: {
    SocialLogin
  },
  data () {
    return {
      email: '',
      senha: ''
    };
  },
   methods: {
      login: function() {
       console.log('login')
      }
    }
  }
</script>

<style scoped>
.login {
  margin-top: 40px;
}
input {
  margin: 10px 0;
  width: 20%;
  padding: 15px;
}

button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4caf50;
  border: 0;
  padding: 15px;
  color: #ffffff;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
p {
  margin-top: 40px;
  font-size: 13px;
}
p a {
  text-decoration: underline;
  cursor: pointer;
}
.login-choice span {
    color: #5b6987;
    display: -ms-grid;
    display: grid;
    font-size: 16px;
    width: 100%;
    line-height: 40px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    -ms-grid-columns: minmax(20px,1fr) auto minmax(20px,1fr);
    grid-template-columns: minmax(20px,1fr) auto minmax(20px,1fr);
    grid-gap: 19px;
}
.login-choice span:after, .login-choice span:before {
    content: "";
    border-top: 1px solid #e5e8ed;
}
.signup-buttons a {
    vertical-align: middle;
    text-decoration: none;
}
.signup-buttons svg {
    left: 16px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
}
.signup-buttons {
    margin-top: 15px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: center;
    position: relative;
}
</style>