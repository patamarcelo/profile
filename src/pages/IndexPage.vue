<template>
  <q-page class="flex flex-center flex-shrink bg-gray-200" :class="!state.showSkelPort ? 'rounded-lg' : 'rounded-none'">
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
      <div class="flex lg:w-2/3 w-full  rounded-br-none  pl-3 r-container items-stretch border-2">
        <right-page />
      </div>
    </div>
    <q-section>
      <div id="skelport"></div>
      <q-btn class="glossy my-4" rounded color="primary"
        :loading="!!state.showSkelPort"
        :label="!state.showPortfolio ? 'Show Portfolio' : 'Hide Portfolio'"
        :icon="state.showPortfolio ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash'" @click="showPort()">
      </q-btn>
    </q-section>
    <template v-if="state.showPortfolio">
      <portfolio-page v-for="(data, index) in project.projects" :key="index" :project-name="data.name"
        :project-len="data.project.pictures" :class-row="index % 2 ? 'flex-row-reverse' : 'flex-row'"
        :class-last="index == (project.countProjects - 1) ? '' : 'mb-5'"
        :data-project="data.project" />
    </template>
  </q-page>

  <skelton-portfolio v-if="state.showSkelPort" />

</template>

<script>
import PortfolioPage from 'src/components/PortfolioPage.vue'
import SkeltonPortfolio from 'src/components/SkeltonPortfolio.vue'
import { defineComponent, reactive } from 'vue'
import LeftPage from '../components/LeftPage.vue'
import RightPage from '../components/RightPage.vue'
import { SystemStore } from '../stores/System'
import { ProjectStore } from '../stores/Project'

export default defineComponent({
  components: { LeftPage, RightPage, PortfolioPage, SkeltonPortfolio },
  name: 'IndexPage',
  setup () {
    const system = SystemStore()
    const project = ProjectStore()
    const state = reactive({
      showPortfolio: false,
      showSkelPort: false,
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

    function scrollToBottom () {
      console.log('gogogo')
      const elem = document.getElementById('skelport')
      setTimeout(() => {
        elem.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }

    function showPort () {
      if (!state.showPortfolio) {
        state.showSkelPort = true
        scrollToBottom()
        setTimeout(() => {
          state.showSkelPort = false
          state.showPortfolio = true
        }, 2000)
      } else {
        state.showSkelPort = false
        state.showPortfolio = false
      }
    }
    return { state, system, showPort, project }
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
