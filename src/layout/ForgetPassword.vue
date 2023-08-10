<script>
export default {
  name: 'ForgetPasswordLayout',
  data() {
    return {
      found: false,
      noFound: true
    }
  }
}
</script>
<template>
  <div class="sm:flex">
    <div
      class="sm:min-h-screen bg-auth-process-background-svg bg-center bg-contain bg-no-repeat bg-primary sm:min-w-[50%]"
    ></div>
    <div
      class="min-h-screen flex items-center justify-center bg-center sm:bg-white bg-primary w-full"
    >
      <slot />
    </div>
  </div>
</template>
