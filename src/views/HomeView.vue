<script>
import axios from 'axios'
import PostLayoutComponent from '../components/home/PostLayoutComponent.vue'
import CaptorData from '../components/captor/NavComponent.vue'
import CaptorList from '../components/captor/CaptorListComponent.vue'
export default {
  name: 'HomeView',
  mounted() {
    setTimeout(() => {
      this.getData()
    }, 100)
  },
  data() {
    return {
      responseData: null,
      error: null,
      listOfCap: []
    }
  },
  components: {
    PostLayoutComponent,
    CaptorData,
    CaptorList
  },
  methods: {
    async getData() {
      let thj = this
      console.log(this.listOfCap)
      this.listOfCap = ['64ac5f8bd543447932b74631']
      console.log(this.listOfCap)

      // if (this.listOfCap) {
      //   this.listOfCap = ['64ac5f8bd543447932b74631']
      // }
      const ids = this.listOfCap
      await axios
        // .post('http://10.50.1.27:3000/api/captor-data-byi', { ids })
        .post('http://localhost:3000/api/captor-data-byi', { ids })
        .then((result) => {
          thj.responseData = result.data
          console.log(this.responseData)
        })
        .catch((error) => {
          thj.error = error.message
        })
      // try {
      //   const response = await axios.post('http://10.50.1.92:3000/api/captor-data-byid', { ids })
      //   this.responseData = response.data
      //   console.log(this.responseData)
      // } catch (error) {
      //   this.error = error.message
      // }
    },
    getListOfCap(list) {
      this.listOfCap = list
      console.log('HEY')
      console.log(this.listOfCap)
    }
  },
  computed: {
    hasData() {
      return this.responseData !== null
    }
  }
}
</script>
<template>
  <div class="grid grid-rows-3 grid-flow-col gap-4 overflow-hidden">
    <div class="row-span-3 overflow-hidden py-8">
      <post-layout-component />
      <post-layout-component />
      <post-layout-component />
      <post-layout-component />
      <post-layout-component />
    </div>
    <div class="row-span-2 py-16 mx-16 hidden sm:block">
      <div class="border-b-2 border-primary">
        <div class="text-center font-bold">Tous les capteurs</div>
        <captor-list />
      </div>
      <h1 class="text-center text-xl my-4 bg-white py-2 rounded-md cursor-pointer text-gray-600">
        Derniers relevés
      </h1>
      <div v-if="hasData">
        <captor-data
          captorName="EHT-01"
          :ambiantTemp="responseData.data.ambiantTemp"
          :soilhumididy="responseData.data.soilHumidity"
          :planSize="responseData.data.SizePlant"
          batteryLevel="30"
        />
      </div>
      <div v-else>En attente de donnee ...</div>

      <!-- </div> -->
    </div>
  </div>
</template>
