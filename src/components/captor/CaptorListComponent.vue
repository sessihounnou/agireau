<script>
import axios from 'axios'
export default {
  name: 'CaptorListComponent',
  data() {
    return {
      allcaptorS: [
        { id: '01' },
        { id: '02' },
        { id: '03' },
        { id: '04' },
        { id: '05' },
        { id: '06' },
        { id: '07' },
        { id: '08' },
        { id: '09' },
        { id: '10' },
        { id: '11' },
        { id: '12' },
        { id: '13' },
        { id: '14' }
      ],
      allcaptors: ['1', '2'],
      selected: []
    }
  },
  mounted() {
    this.getAllCaptorList()
  },

  methods: {
    async getAllCaptorList() {
      console.log()
      let thj = this
      await axios
        // .get('http://10.50.1.92:3000/api/captor')
        .post('http://localhost:3000/api/captor')
        .then((result) => {
          thj.allcaptor = result.data
          console.log(this.allcaptor)
        })
        .catch((error) => {
          console.log(error.message)
        })
    },
    getCaptorInfo(id) {
      let index = this.selected.indexOf(id)
      if (this.selected.includes(id)) {
        this.selected.splice(index, 1)
        console.log('am here')
      } else {
        this.selected.push(id)
      }
      if (this.selected.length > 7) {
        this.selected.splice(0, 1)
      }
      // this.CaptorSelected()
    },
    CaptorSelected() {
      const list = this.selected
      this.$emit('captor-selected', list)
    }
  }
}
</script>
<template>
  <div>
    <div class="my-4 grid grid-cols-7 gap-4 pb-8">
      <div
        @click="getCaptorInfo(item.id)"
        v-for="item in this.allcaptorS"
        :key="item.id"
        ref="items"
        :class="this.selected.includes(item.id) ? 'border-primary' : ''"
        class="border border-2 p-2 m-0 cursor-pointer"
      >
        {{ item.id }}
      </div>
    </div>
  </div>
</template>
