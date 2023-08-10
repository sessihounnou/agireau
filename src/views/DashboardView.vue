<script>
export default {
  name: 'DashboardView',
  components: {},
  data() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },

        xaxis: {
          categories: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Mai', 'Mai']
        }
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    }
  }
}
</script>
<template>
  <section class="hidden sm:block">
    <div class="mt-4 p-8 md:flex justify-around">
      <div
        class="mt-2 flex justify-between py-6 px-4 bg-white/30 rounded-lg shadow-lg shadow-indigo-500/40 hover:shadow-xl hover:shadow-blue-500/40"
      >
        <div>
          <div>Croissances des plans</div>
          <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
        </div>
      </div>

      <div
        class="mt-2 flex justify-between py-6 px-4 bg-white/30 rounded-lg shadow-lg shadow-indigo-500/40 hover:shadow-xl hover:shadow-blue-500/40"
      >
        <div>
          <div>Humidité</div>
          <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
        </div>
      </div>

      <div
        class="mt-2 flex justify-between py-6 px-4 bg-white/30 rounded-lg shadow-lg shadow-indigo-500/40 hover:shadow-xl hover:shadow-blue-500/40"
      >
        <div>
          <div>Taille des plants</div>
          <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
        </div>
      </div>
    </div>
    <div class="mx-[10%]">
      <div class="f">Temperature ambiante</div>
      <apexchart
        height="200"
        width="1400"
        type="line"
        :options="options"
        :series="series"
      ></apexchart>
    </div>
  </section>
  <section class="block sm:hidden">
    Le dashboard est accessible uniquement depuis un Grand écran
  </section>
</template>
