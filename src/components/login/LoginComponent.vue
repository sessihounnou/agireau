<script>
import axios from 'axios'
import config from '../../stores/config.json'
const baseUrl = config.baseUrl
const axiosInstance = axios.create({
  baseURL: baseUrl
})
export default {
  name: 'LoginComponent',
  data() {
    return {
      username: '',
      password: '',
      login_data: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    connect() {
      this.$router.push('/home-2')
    },
    login() {
      this.login_data.email = this.username
      this.login_data.password = this.password
      axiosInstance
        .post('/signin', this.login_data)
        .then((response) => {
          console.log(response)
          this.$refs.error_login.innerHTML = ''
          axiosInstance.defaults.headers.common['Authorization'] = response.data.token
          this.connect()
        })
        .catch((error) => {
          this.$refs.error_login.innerHTML = ''
          console.log(error.response.data.message)
          console.error('error')
          this.$refs.error_login.innerHTML = error.response.data.message
        })
    }
  }
}
</script>
<template>
  <div>
    <div
      class="bg-white opacity-95 sm:opacity-100 bg-cover bg-center bg-[#F6F6F] m-2 sm:m-0 rounded-lg backdrop-opacity-10 sm:py-12 py-12 px-20 sm:px-32"
    >
      <div class="text-primary text-[30px] text-center mb-4">Connexion</div>
      <div class="">
        <input
          v-model="username"
          type="text"
          class="rounded-lg my-4 p-[3%] border border-1 hover:border-primary hover"
          placeholder="Nom d'utilisateur"
        />
      </div>
      <div class="">
        <input
          v-model="password"
          type="text"
          class="rounded-lg mt-4 p-[3%] border border-1 hover:border-primary"
          placeholder="Mot de passe"
        />
      </div>
      <a href="/forget">
        <p
          class="text-gray-400 text-[70%] pl-2 pt-2 pb-4 mb-4 hover:cursor-pointer hover:text-primary"
        >
          Mot de passe oublié ?
        </p>
      </a>
      <div class="">
        <div
          @click="login"
          class="px-4 py-2 border-2 rounded-lg mr-2 bg-primary text-white text-center hover:cursor-pointer"
        >
          Connexion
        </div>
        <div ref="error_login" class="ml-2 text-red-900 text-[62%]"></div>

        <a href="/register">
          <p
            class="text-center text-[80%] text-gray-600 hover:text-primary hover:underline hover:decoration-1 cursor-pointer pt-8"
          >
            Inscription
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
