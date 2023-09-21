<script>
import ProfilDetailComponent from './post/ProfilDetailComponent.vue'
import CommentComponent from './post/CommentComponent.vue'
import ImageCarousselComponent from './post/ImageCarousselComponent.vue'

export default {
  name: 'PostLayoutComponent',
  components: { ProfilDetailComponent, CommentComponent, ImageCarousselComponent },
  data() {
    return {
      // Données que vous souhaitez transmettre à ProfilDetailComponent
      profileData: {
        name: 'Ray Newman',
        location: 'Porto-novo',
        date: 'Jeudi 01 juin 2023'
      },
      otherData: {
        // Autres données...
      }
    }
  }
}
</script>
<template>
  <div class="flex justify-left my-8 sm:mx-4">
    <div class="bg-gray-100 overflow-hidden pb-8 -pt-8 rounded-lg">
      <!-- Profil details -->
      <section><ProfilDetailComponent :profileData="profileData" :otherData="otherData" /></section>
      <!-- commentaire -->
      <section><CommentComponent /></section>
      <!-- illustration - videos - photos -->
      <section><ImageCarousselComponent /></section>
    </div>
  </div>
</template>
<style>
section {
  text-align: center;
  margin-top: 2.5%;
}
.scroll-arrow {
  width: 10%;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  cursor: pointer;
  padding: 0;
  margin: 0;
  opacity: 0.5;
  font-size: 34px;
  transition: 0.2s;
}
.scroll-arrow:hover {
  transition: 0.2s;
  opacity: 1;
}
ul {
  width: 70%;
  scroll-behavior: smooth;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  text-align: center;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
ul::-webkit-scrollbar {
  display: none;
}
li {
  list-style: none;
  display: inline-block;
  position: relative;
  vertical-align: middle;
  width: 20%;
  margin-left: 1.5%;
  margin-right: 1.5%;
  /* filter: grayscale(100%); */
  transition: 0.2s;
}
li,
img {
  width: 500px;
}
li:hover {
  transition: 0.2s;
  filter: grayscale(0);
}
</style>
