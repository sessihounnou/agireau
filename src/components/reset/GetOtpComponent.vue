<script>
export default {
  name: 'GetOtpComponent.vue',
  data() {
    return {
      otp: ['', '', '', '', '', '']
    }
  },
  methods: {
    moveToNext(index, value) {
      console.log(index)
      if (value.length === 1) {
        console.log('value.length')
        console.log(value.length)

        const nextInput = this.$refs.inputs[index + 1]

        if (nextInput) {
          nextInput.focus()
        }
      }
    },
    verifyOtp() {
      // make request to verify auth
    }
  }
}
</script>
<template>
  <div class="mx-auto">
    <div
      class="bg-white bg-auth-process-background-svg opacity-90 sm:opacity-100 bg-cover bg-center bg-blue-100 m-2 sm:m-0 rounded-lg sm:py-12 py-12 px-20 sm:px-32"
    >
      <div class="text-[150%] sm:text-[200%] my-8">Mot de passe oublié</div>
      <p class="hidden sm:block text-[90%] sm:text-[80%] text-gray-500 my-8">
        Nous vous avions envoyé un code OTP à votre <br />
        addresse e-mail
      </p>
      <p class="sm:hidden text-[90%] sm:text-[80%] text-gray-500 my-8">
        Nous vous avions envoyé un code OTP à votre addresse e-mail
      </p>
      <div class="">
        <p class="mb-2 text-gray-500 text-[70%]">Entrez le code à 5 chiffres reçu par mail</p>

        <div class="flex justify-around w- py-4">
          <input
            type="text"
            class="mt-4 text-center bg-transparent border-b border-gray-500 focus:outline-none focus:border-blue-500"
            placeholder="Entrez votre OTP"
          />
        </div>
        <p class="text-right -mt-2 mb-8 text-gray-500 text-[70%]">00:45</p>
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
          class="px-4 py-2 border-2 rounded-lg mr-2 bg-primary text-white text-center hover:cursor-pointer"
        >
          Renvoyer OTP
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
