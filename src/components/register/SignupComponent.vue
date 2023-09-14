<script>
import axios from 'axios'
import config from '../../stores/config.json'
const baseUrl = config.baseUrl
const axiosInstance = axios.create({
  baseURL: baseUrl
})
export default {
  name: 'SignupComponent',
  data() {
    return {
      lastname: '',
      firstname: '',
      phone_number: '',
      email: '',
      password: '',
      password_confirmation: '',
      register_data: {
        profilPicture: 'no profil',
        bio: 'phone_number',
        bornday: '12/08/2000',
        firstname: null,
        lastname: null,
        phone_number: null,
        email: null,
        password: null
      },
      password_error: [],
      passwordstate: false
    }
  },
  methods: {
    verifyLastName() {
      if (this.lastname.length >= 2) {
        this.$refs.error_name.innerHTML = ''
        this.register_data.lastname = this.lastname
      } else {
        this.$refs.error_name.innerHTML = 'Entrez un nom réel'
      }
    },
    verifyFirstName() {
      if (this.lastname.length >= 2) {
        this.$refs.error_firstname.innerHTML = ''
        this.register_data.firstname = this.firstname
      } else {
        this.$refs.error_firstname.innerHTML = 'Entrez un prénom réel'
      }
    },
    checkEmail(email) {
      // Expression régulière pour valider un e-mail
      var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
      return emailRegex.test(email)
    },
    verifyEmail() {
      if (this.checkEmail(this.email)) {
        this.$refs.error_email.innerHTML = ''
        this.register_data.email = this.email
      } else {
        this.$refs.error_email.innerHTML = 'Entrez une addresse email valide'
      }
    },
    verifyPhoneNumber() {
      if (this.phone_number.length >= 8) {
        this.$refs.error_phone_number.innerHTML = ''
        this.register_data.phone_number = this.phone_number
      } else {
        this.$refs.error_phone_number.innerHTML = 'Entrez un numero de telephone correct'
      }
    },
    verifyPassword() {
      if (this.password === this.password_confirmation) {
        this.password_error[4] = ''
        this.$refs.error_password.innerHTML = ''
      } else if (this.password !== this.password_confirmation) {
        this.$refs.error_password.innerHTML = 'Mots de passes non identiques'
        this.password_error[4] = 'Mots de passes non identiques'
      }
      // Vérifier la longueur du mot de passe
      if (this.password.length < 8) {
        this.password_error[0] = 'Mot de passe trop court'
      } else {
        this.password_error[0] = ''
      }

      // Vérifier au moins une lettre majuscule
      if (!/[A-Z]/.test(this.password)) {
        this.password_error[1] = 'Votre mot de passe doit contenir au moin une majuscule'
      } else {
        this.password_error[1] = ''
      }

      // Vérifier au moins une lettre minuscule
      if (!/[a-z]/.test(this.password)) {
        this.password_error[2] = 'Votre mot de passe doit contenir au moin une minuscule'
      } else {
        this.password_error[2] = ''
      }

      // Vérifier au moins un caractère spécial
      // eslint-disable-next-line no-useless-escape
      if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(this.password)) {
        this.password_error[3] =
          'Votre mot de passe doit contenir au moin un caractere special (ex: / # $ % etc. )'
      } else {
        this.password_error[3] = ''
      }
      if (
        (this.password_error[0] == '',
        this.password_error[1] == '',
        this.password_error[2] == '',
        this.password_error[3] == '',
        this.password_error[4] == '')
      ) {
        this.$refs.error_password_char.innerHTML = ''
        this.register_data.password = this.password
      } else {
        this.$refs.error_password_char.innerHTML = ''
        this.password_error.forEach((element) => {
          if (element.length > 0) {
            this.$refs.error_password_char.innerHTML += element + '<br/>'
          }
        })
      }
    },
    register() {
      const areAllAttributesNonEmpty = Object.values(this.register_data).every(
        (value) => value !== ''
      )

      if (areAllAttributesNonEmpty) {
        this.register_data.bio = this.phone_number
        axiosInstance
          .post('/signup', this.register_data)
          .then((response) => {
            this.$refs.error_register.innerHTML = ''
            this.$refs.error_register.innerHTML = response.data.message
            this.$router.push('/login')
          })
          .catch((error) => {
            this.$refs.error_register.innerHTML = ''
            console.log(error.response.data.message)
            console.error('error')
            this.$refs.error_register.innerHTML = error.response.data.message
          })
      } else {
        console.log('veuillez bien remplir tous les champs')
      }
    }
  }
}
</script>
<template>
  <div>
    <div
      class="bg-white opacity-95 sm:opacity-100 bg-cover bg-center bg-[#F6F6F] m-2 sm:m-0 rounded-lg backdrop-opacity-10 sm:py-12 py-12 px-20 sm:px-32"
    >
      <div class="text-primary text-[30px] text-center mb-4">Inscription</div>
      <div class="">
        <input
          @blur="verifyLastName"
          v-model="lastname"
          type="text"
          class="rounded-lg my-4 p-[3%] border border-1 hover:border-primary hover"
          placeholder="Nom"
        />
        <div ref="error_name" class="ml-2 text-red-900 text-[62%]"></div>
      </div>
      <div class="">
        <input
          @blur="verifyFirstName"
          v-model="firstname"
          type="text"
          class="rounded-lg my-4 p-[3%] border border-1 hover:border-primary hover"
          placeholder="Prénom"
        />
        <div ref="error_firstname" class="ml-2 text-red-900 text-[62%]"></div>
      </div>
      <div class="">
        <input
          @blur="verifyPhoneNumber"
          v-model="phone_number"
          type="text"
          class="rounded-lg my-4 p-[3%] border border-1 hover:border-primary hover"
          placeholder="Téléphone"
        />
        <div ref="error_phone_number" class="ml-2 text-red-900 text-[62%]"></div>
      </div>
      <div class="">
        <input
          @blur="verifyEmail"
          v-model="email"
          type="text"
          class="rounded-lg my-4 p-[3%] border border-1 hover:border-primary hover"
          placeholder="Email"
        />
        <div ref="error_email" class="ml-2 text-red-900 text-[62%]"></div>
      </div>
      <div class="">
        <input
          @blur="verifyPassword"
          v-model="password"
          type="password"
          class="rounded-lg my-4 p-[3%] border border-1 hover:border-primary hover"
          placeholder="Mot de passe"
        />
        <div ref="error_password" class="ml-2 text-red-900 text-[62%]"></div>
        <div ref="error_password_char" class="ml-2 text-red-900 text-[62%]"></div>
      </div>
      <div class="">
        <input
          @blur="verifyPassword"
          v-model="password_confirmation"
          type="password"
          class="rounded-lg my-4 p-[3%] border border-1 hover:border-primary hover"
          placeholder="confirmation mot de passe"
        />
      </div>
      <div class="">
        <div
          @click="register"
          class="px-4 py-2 border-2 rounded-lg mr-2 bg-primary text-white text-center hover:cursor-pointer"
        >
          Inscription
        </div>
        <div ref="error_register" class="ml-2 text-red-900 text-[62%]"></div>
        <a href="/login">
          <p
            class="text-center text-[80%] text-gray-600 hover:text-primary hover:underline hover:decoration-1 cursor-pointer pt-8"
          >
            Connexion
          </p>
        </a>
      </div>
    </div>
  </div>
</template>
