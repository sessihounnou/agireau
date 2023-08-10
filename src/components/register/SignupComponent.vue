<script>
export default {
  name: 'SignupComponent'
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
          type="text"
          class="rounded-lg my-4 p-[3%] border border-1 hover:border-primary hover"
          placeholder="Nom"
        />
      </div>
      <div class="">
        <input
          type="text"
          class="rounded-lg my-4 p-[3%] border border-1 hover:border-primary hover"
          placeholder="Prénom"
        />
      </div>
      <div class="">
        <input
          type="text"
          class="rounded-lg my-4 p-[3%] border border-1 hover:border-primary hover"
          placeholder="Téléphone"
        />
      </div>
      <div class="">
        <input
          type="text"
          class="rounded-lg my-4 p-[3%] border border-1 hover:border-primary hover"
          placeholder="Email"
        />
      </div>
      <div class="">
        <input
          type="password"
          class="rounded-lg my-4 p-[3%] border border-1 hover:border-primary hover"
          placeholder="Mot de passe"
        />
      </div>
      <div class="">
        <input
          type="password"
          class="rounded-lg my-4 p-[3%] border border-1 hover:border-primary hover"
          placeholder="confirmation mot de passe"
        />
      </div>
      <div class="">
        <div
          class="px-4 py-2 border-2 rounded-lg mr-2 bg-primary text-white text-center hover:cursor-pointer"
        >
          Inscription
        </div>
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
