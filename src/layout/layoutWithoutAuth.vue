<script>
import FooterForNoAuthVue from '../components/FooterForNoAuth.vue'
import HeaderNoAuthVue from '../components/HeaderNoAuth.vue'
export default {
  name: 'layoutWithoutAuth',
  components: { FooterForNoAuthVue, HeaderNoAuthVue }
}
</script>
<template>
  <div>
    <HeaderNoAuthVue />
    <slot />

    <FooterForNoAuthVue />
  </div>
</template>
