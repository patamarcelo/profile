<template>
  <q-page class="flex flex-center items-start rounded-lg">
    <div class="w-full lg:w-1/3 bg-gray-600 text-white rounded-tl-lg rounded-bl-none lg:rounded-bl-lg l-container lg:rounded-tr-none rounded-tr-lg">
      <div class="flex column  items-center justify-center pt-7 pb-5">
        <q-avatar size="150px">
          <img src="../../src/assets/user_1.jpg">
        </q-avatar>
        <h1 class="text-white text-xl text-bold mt-5">Marcelo <b class="text-blue">Pata</b></h1>
        <h6 class="text-white italic"> Web Developer | Back-end | Front-end </h6>
      </div>
      <left-page />
    </div>

    <div class="flex column items-center text-bold justify-start lg:w-2/3 w-full rounded-tr-lg rounded-br-none lg:rounded-br-lg pl-3 r-container">
      <h1>rigth side</h1>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import LeftPage from './LeftPage.vue'

export default defineComponent({
  components: { LeftPage },
  name: 'IndexPage',
  setup () {
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
    return { state }
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
