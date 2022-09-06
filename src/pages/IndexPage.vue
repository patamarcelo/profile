<template>
  <q-page class="flex flex-center flex-shrink  rounded-lg bg-gray-200">
    <div class="w-full flex shadow-lg">
      <div
        class="w-full lg:w-1/3 bg-gray-800 text-white rounded-tl-lg rounded-bl-none  l-container lg:rounded-tr-none rounded-tr-lg">
        <div class="flex column  items-center justify-center pt-7 pb-5">
          <q-avatar size="150px">
            <img :src="system.picture" class="object-cover">
          </q-avatar>
          <h1 class="text-white text-xl text-bold mt-5">Marcelo <b class="text-blue">Pata</b></h1>
          <h6 class="text-white italic"> Web Developer | Back-end | Front-end </h6>
        </div>
        <left-page />
      </div>
      <div class="flex lg:w-2/3 w-full  rounded-tr-lg rounded-br-none  pl-3 r-container items-stretch border-2">
        <right-page />
      </div>
    </div>
    <q-section>
      <q-btn class="glossy my-4" rounded color="primary" label="Portfolio"  icon="fa-solid fa-eye-slash"/>
    </q-section>
    <portfolio-page class-row="flex-row-reverse"/>
    <portfolio-page />
    <portfolio-page class-row="flex-row-reverse"/>

  </q-page>
</template>

<script>
import PortfolioPage from 'src/components/PortfolioPage.vue'
import { defineComponent, reactive } from 'vue'
import LeftPage from '../components/LeftPage.vue'
import RightPage from '../components/RightPage.vue'
import { SystemStore } from '../stores/System'

export default defineComponent({
  components: { LeftPage, RightPage, PortfolioPage },
  name: 'IndexPage',
  setup () {
    const system = SystemStore()
    const state = reactive({
      data_info_2: [
        {
          icon: 'email',
          title: 'Email',
          info: 'patamarcelo@gmail.com'
        }, {
          icon: 'fas fa-globe',
          title: 'Website',
          info: 'www.mpata.eth.limo'
        }, {
          icon: 'fas fa-birthday-cake',
          title: 'Birth Date',
          info: 'Nov 21, 1988'
        }, {
          icon: 'fas fa-map-marker-alt',
          title: 'Habitation',
          info: 'Porto Alegre - RS, Brazil'
        }]
    })
    return { state, system }
  }

})
</script>
<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";

.l-container,
.r-container {
  min-height: 100vh;
}

.r-container {
  background-color: whitesmoke;
}
</style>
