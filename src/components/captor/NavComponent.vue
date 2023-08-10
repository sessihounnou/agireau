<script>
export default {
  name: 'NavCaptorComponent',
  props: {
    captorName: String,
    ambiantTemp: String,
    soilhumididy: String,
    planSize: String,
    batteryLevel: String
  },
  data() {
    return {}
  },
  methods: {}
}
</script>
<template>
  <div class="bg-white rounded-md">
    <div>
      <div class="text-center px-16 py-8">
        <div class="text-center text-sm py-4">{{ captorName }}</div>
        <div class="flex justify-between">
          <div class="ml-4">
            <img class="w-8" src="../../assets/svg/On@3x.png" alt="" />
            <div class="text-[70%]">{{ batteryLevel }}<span class="text-[60%]"> %</span></div>
          </div>
          <div class="ml-4">
            <img class="w-8" src="../../assets/svg/Temperature_light@3x.png" alt="" />
            <div class="text-[70%]">{{ ambiantTemp }}<span class="text-[60%]"> °C</span></div>
          </div>
          <div class="ml-4">
            <img class="w-8" src="../../assets/svg/humidity@3x.png" alt="" />
            <div class="text-[70%]">{{ soilhumididy }}<span class="text-[60%]"> %</span></div>
          </div>
          <div class="ml-4">
            <img class="w-8" src="../../assets/svg/SortList_alt_light@2x.png" alt="" />
            <div class="text-[70%]">{{ planSize }}<span class="text-[60%]"> cm</span></div>
          </div>
          <div class="ml-4">
            <img class="w-8" src="../../assets/svg/Order_lightsvg.svg" alt="" />
            <div class="text-[70%]"><span class="text-[60%]"> Historique</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="border-b-2"></div>
  </div>
  <div></div>
</template>
