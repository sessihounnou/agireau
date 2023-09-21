<script>
export default {
  name: 'ProfilDetailComponent',
  props: {
    profileData: {
      type: Object,
      required: true
    },
    otherData: {
      type: Object,
      required: true
    }
  }
}
</script>
<template>
  <div>
    <div class="flex justify-left pt-[3%] ml-[16%]">
      <div class="flex items-center justify-center w-16 h-16 rounded-full bg-primary">
        <span class="text-white text-2xl">{{ profileData.name.charAt(0) }}</span>
      </div>

      <div class="mx-4 pt-2">
        <!-- titre -->
        <div>
          <span class="font-bold">{{ profileData.name }}</span> est à
          <span class="text-primary">{{ profileData.location }}</span>
        </div>
        <!-- sous titre -->
        <div>
          <span class="italic text-[100%]">{{ profileData.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
