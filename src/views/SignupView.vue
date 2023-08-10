<script>
import SignupComponent from '../components/register/SignupComponent.vue'
import layoutForAuthProcess from '../components/login/backgroundAuthProcess.vue'
export default {
  name: 'LoginView',
  components: {
    layoutForAuthProcess,
    SignupComponent
  }
}
</script>
<template>
  <layoutForAuthProcess>
    <SignupComponent />
  </layoutForAuthProcess>
</template>
