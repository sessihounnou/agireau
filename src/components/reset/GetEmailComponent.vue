<script>
export default {
  name: 'GetEmailComponent.vue',
  data() {
    return {
      email: ''
    }
  },
  methods: {
    getEmail() {
      this.$emit('get-email-user-send', this.$refs.email.value)
      console.log('i work !')
    }
  }
}
</script>
<template>
  <div class="mx-auto">
    <div
      class="bg-white bg-auth-process-background-svg opacity-90 sm:opacity-100 bg-cover bg-center bg-blue-200 m-2 sm:m-0 rounded-lg sm:py-12 py-12 px-20 sm:px-32"
    >
      <div class="text-[150%] sm:text-[200%] my-8">Mot de passe oublié</div>
      <p class="hidden sm:block text-[90%] sm:text-[80%] text-gray-500 my-8">
        Nous vous enverrons un code OTP à votre <br />
        addresse e-mail
      </p>
      <p class="sm:hidden text-[90%] sm:text-[80%] text-gray-500 my-8">
        Nous vous enverrons un code OTP à votre addresse e-mail
      </p>
      <div class="">
        <p class="-mb-2 text-gray-500 text-[70%]">Email</p>
        <input
          ref="email"
          type="email"
          class="rounded-lg my-4 p-[3%] border border-1 hover:border-primary hover"
          placeholder="Ex : joe.doe@mail.com"
        />
        <img v-if="found" src="../assets/svg/Tick@3x.svg" alt="" srcset="" />
        <img
          v-if="noFound"
          src="../assets/svg/Close_round4.svg"
          class="fill-red-100"
          alt=""
          srcset=""
        />
      </div>
      <div class="">
        <div
          @click="getEmail"
          class="px-4 py-2 border-2 rounded-lg mr-2 bg-primary text-white text-center hover:cursor-pointer"
        >
          Envoyer
        </div>
        <p
          class="text-center font-semi-bold sm:text-[80%] text-gray-900 sm:text-gray-600 hover:text-primary hover:underline hover:decoration-1 cursor-pointer pt-4"
        >
          Annuler
        </p>
      </div>
    </div>
  </div>
</template>
