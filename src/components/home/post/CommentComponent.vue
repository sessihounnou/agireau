<script>
export default {
  name: 'CommentComponent',
  data() {
    return {
      afficherBoutonVoirPlus: false,
      afficherBoutonVoirMoins: false,
      texteComplet: '',
      texteAffiche:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae possimus animi nesciuntiusto optio minus quidem nemo cupiditate sapiente non provident facere sunt esse eum reiciendis,atque error accusantium suscipit.',
      texteRestant: ''
    }
  },
  mounted() {
    this.verifierLongueurTexte()
  },
  methods: {
    verifierLongueurTexte() {
      this.texteComplet = this.$refs.texte.textContent

      if (this.texteComplet.length > 100) {
        this.texteAffiche = this.texteComplet.slice(0, 100)
        this.texteRestant = this.texteComplet.slice(100)
        this.afficherBoutonVoirPlus = true
      } else {
        this.texteAffiche = this.texteComplet
        this.afficherBoutonVoirPlus = false
      }

      this.afficherBoutonVoirMoins = false
    },
    afficherReste() {
      this.texteAffiche += this.texteRestant
      this.texteRestant = ''
      this.afficherBoutonVoirPlus = false
      this.afficherBoutonVoirMoins = true
    },
    masquerReste() {
      this.texteAffiche = this.texteComplet.slice(0, 100)
      this.texteRestant = this.texteComplet.slice(100)
      this.afficherBoutonVoirPlus = true
      this.afficherBoutonVoirMoins = false
    }
  }
}
</script>
<template>
  <div>
    <div ref="texte" class="ml-[16%] mt-8 max-w-[70%] text-left">
      {{ texteAffiche }}
      <span class="cursor-pointer text-primary" v-if="afficherBoutonVoirPlus" @click="afficherReste"
        >voir plus</span
      ><span
        class="cursor-pointer text-primary"
        v-if="afficherBoutonVoirMoins"
        @click="masquerReste"
        >Voir moins</span
      >
    </div>
  </div>
</template>
