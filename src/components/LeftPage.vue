<template>
  <div class="flex column items-start justify-start ml-2 mt-2">
    <div class="row">
      <h1 class="text-xl text-left">I N F O</h1>
    </div>
    <q-separator color="grey" class="w-full" />
    <div class="row pl-1 py-3 ml-2" v-for="(data, index) in state.data_info" :key="index">
      <q-icon :name="data.icon" size="sm" class="mr-5 self-center" />
      <div class="flex column items-start ml-1">
        <span>{{ data.title }}</span>
        <small class="italic text-gray-400">{{ data.info }}</small>
      </div>
    </div>
  </div>
  <div class="flex column items-start justify-start ml-2 mt-10">
    <div class="row">
      <h1 class="text-xl text-left">S O C I A L S</h1>
    </div>
    <q-separator color="grey" class="w-full" />
    <div class="row pl-1 py-4 ml-2" v-for="(data, index) in state.social_info" :key="index">
      <q-icon :name="data.icon" size="sm" class="mr-5" />
      <div class="flex column items-start ml-1 self-center hover:text-white">
        <span>{{ data.title }}</span>
        <a :href="data.link" target="blank_" class=" underline text-blue-300">{{ data.name }}</a>
        <small class="italic text-gray-400">{{ data.info }}</small>
      </div>
    </div>
  </div>
  <div class="flex column items-start justify-start ml-2 mt-10">
    <div class="row">
      <h1 class="text-xl text-left">L A N G U A G E S </h1>
    </div>
    <q-separator color="grey" class="w-full" />
  </div>
  <div class="flex justify-around mx-5">
    <div class="flex m-3 sm:m-5   items-center justify-center content-center flag">
      <h1>English</h1>
    </div>
    <div class="flex m-3 sm:m-5  items-center justify-center content-center flag">
      <h1 class="p-3">Portuguese</h1>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'LeftPage',
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
          icon: 'fas fa-birthday-cake',
          title: 'Birth Date',
          info: 'Nov 21, 1988'
        }, {
          icon: 'fas fa-map-marker-alt',
          title: 'Habitation',
          info: 'Porto Alegre - RS, Brazil'
        }],
      social_info: [{
        icon: 'fa-brands fa-github',
        link: 'https://www.github.com/patamarcelo',
        name: 'www.github.com/patamarcelo'
      }, {
        icon: 'fa-brands fa-linkedin',
        link: 'https://www.linkedin.com/in/patamarcelo/',
        name: 'www.linkedin.com/in/patamarcelo'
      }, {
        icon: 'fa-brands fa-instagram',
        link: 'https://www.instagram.com/marcelo_pata/',
        name: 'www.instagram.com/marcelo_pata'
      }, {
        icon: 'fa-brands fa-facebook',
        link: 'https://www.facebook.com/Marcelo.Pata',
        name: 'www.facebook.com/Marcelo.Pata'
      }, {
        icon: 'fa-brands fa-whatsapp',
        link: 'https://wa.me/+5551997090862',
        name: '+55 51 99709-0862'
      }]
    })
    return { state }
  }

})
</script>

<style>
.flag {
  border: 2px solid white;
  border-radius: 100%;
  height: 70px;
  width: 70px;
}
</style>
