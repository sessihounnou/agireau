<script>
export default {
  name: 'backgroundAuthProcess'
}
</script>
<template>
  <div class="min-h-screen bg-gradient-to-r from-sky-200 to-blue-800 to-sky-900">
    <div
      class="sm:flex sm:justify-around bg-auth-process-background-svg bg-bottom bg-contain pt-32 pb-32 bg-no-repeat sm:py-[12%]"
    >
      <div class=""></div>
      <div class="">
        <slot />
      </div>
    </div>
  </div>
</template>
