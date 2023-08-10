<script>
import layoutForAuthProcess from '../components/login/backgroundAuthProcess.vue'
import loginComponent from '../components/login/LoginComponent.vue'
export default {
  name: 'LoginView',
  components: {
    layoutForAuthProcess,
    loginComponent
  }
}
</script>
<template>
  <layoutForAuthProcess>
    <loginComponent />
  </layoutForAuthProcess>
</template>
