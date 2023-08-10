<script>
export default {
  name: 'ImageCarousselComponent',
  methods: {
    scrollRight() {
      this.$refs.imgList.scrollBy(750, 0)
    },
    scrollLeft() {
      this.$refs.imgList.scrollBy(-750, 0)
    }
  }
}
</script>
<template>
  <section>
    <div class="scroll-arrow" id="scroll-left" @click="scrollLeft()">&#8592;</div>
    <ul ref="imgList">
      <li>
        <img src="../../../assets//data/1.jpeg" />
      </li>
      <li>
        <img src="../../../assets//data/2.jpeg" />
      </li>
      <li>
        <img src="../../../assets//data/3.jpeg" />
      </li>
      <li>
        <img
          src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </li>
      <li>
        <img
          src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </li>
      <li>
        <img
          src="https://images.pexels.com/photos/34950/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        />
      </li>
    </ul>
    <div class="scroll-arrow" id="scroll-right" @click="scrollRight()">&#8594;</div>
  </section>
</template>
