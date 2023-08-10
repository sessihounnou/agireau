<script>
import ForgetPassword from '../layout/ForgetPassword.vue'
import GetEmailComponent from '../components/reset/GetEmailComponent.vue'
import GetOtpComponent from '../components/reset/GetOtpComponent.vue'
export default {
  name: 'ResetPassword',
  components: { ForgetPassword, GetEmailComponent, GetOtpComponent },
  data() {
    return {
      getEmail: true,
      getOtp: false
    }
  },
  methods: {
    handleEmailSubmitted(email) {
      console.log(email)
      //view mail exit in db
      this.getEmail = false
      this.getOtp = true
    }
  }
}
</script>
<template>
  <ForgetPassword>
    <GetEmailComponent v-if="getEmail" @get-email-user-send="handleEmailSubmitted" />
    <GetOtpComponent v-if="getOtp" />
  </ForgetPassword>
</template>
