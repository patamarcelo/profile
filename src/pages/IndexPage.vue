<template>
  <q-page class="flex flex-center items-start rounded-lg">
    <div class="w-1/3 bg-gray-600 text-white rounded-tl-lg rounded-bl-lg">
      <div class="flex column  items-center justify-center pt-7 pb-5">
        <q-avatar size="100px">
          <img src="../../src/assets/user_1.jpg">
        </q-avatar>
        <h1 class="text-white text-xl text-bold mt-5">Marcelo <b class="text-blue">Pata</b></h1>
        <h6 class="text-white italic">Solving Problems - Web Development </h6>
      </div>
      <div class="flex column items-start justify-start ml-3">
        <div class="row">
          <h1 class="text-4xl text-left ">Information</h1>
        </div>
        <q-separator color="orange" class="w-full" />
        <div class="row pl-1 py-5 ml-2" v-for="(data, index) in state.data_info" :key="index">
          <q-icon :name="data.icon" size="sm" class="mr-5 " />
          <div class="flex column items-start">
            <span>{{ data.title }}</span>
            <small class="italic text-gray-400">{{ data.info }}</small>
          </div>
        </div>
      </div>
    </div>

    <div class="flex col items-start justify-star h-full w-2/3 m-1">
      <div class="flex column bg-red-300 w-full pl-3 rounded-tr-lg rounded-br-lg">
        <h1>rigth side</h1>
        <h1>rigth side</h1>
        <h1>rigth side</h1>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const state = reactive({
      data_info: [
        {
          icon: 'email',
          title: 'Email',
          info: 'patamarcelo@gmail.com'
        }, {
          icon: 'fas fa-globe',
          title: 'Website',
          info: 'www.mpata.eth.limo'
        }, {
          icon: 'fas fa-globe',
          title: 'Website',
          info: 'www.mpata.eth.limo'
        }, {
          icon: 'fas fa-globe',
          title: 'Website',
          info: 'www.mpata.eth.limo'
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

.q-page {
  background-color: red;
}
</style>
