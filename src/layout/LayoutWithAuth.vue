<script>
import FooterForNoAuthVue from '../components/FooterForNoAuth.vue'
import HeaderAuth from '../components/HeaderAuth.vue'
export default {
  name: 'layoutWithoutAuth',
  components: { FooterForNoAuthVue, HeaderAuth }
}
</script>
<template>
  <div>
    <HeaderAuth />
    <slot />

    <FooterForNoAuthVue />
  </div>
</template>
