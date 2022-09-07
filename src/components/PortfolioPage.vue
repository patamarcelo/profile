<template>
  <div class="flex mb-5 p-4 w-full  items-stretch  justify-between bg-white  shadow-12 main-div-port" :class="classRow">
    <div
      class="flex  px-4 lg:flex-1 w-full items-start justify-between lg:border-none border-b-4 border-t-4  overflow-auto max-h-96 text-justify">
      <div class="p-2">
        <ProjectDescripton />
        <q-dialog v-model="state.showDialog">
          <q-card>
            <q-toolbar class="p-4 text-bold bg-gray-800 text-white">
              <q-toolbar-title>
                Description
              </q-toolbar-title>
              <q-btn flat round v-close-popup icon="close" />
            </q-toolbar>

            <q-card-section>
              <ProjectDescripton />

            </q-card-section>
          </q-card>
        </q-dialog>
      </div>
      <div class="ml-auto self-end">
        <q-btn flat size="sm" round class="bg-gray-200" color="primary" @click="state.showDialog = true"
          icon="fullscreen" />
      </div>
    </div>

    <div class="flex column lg:w-2/4 w-full justify-center rounded-lg">
      <div class="">
        <q-carousel arrows v-model:fullscreen="fullscreen" swipeable animated v-model="slide" thumbnails infinite
          autoplay="100" class="pl-0" :class="{ 'max-h-96': !fullscreen }" control-color="primary">
          <q-carousel-slide v-for="i in projectLen" :key="i" :name="i" :img-src="getLink(i)" class="object-cover" />
          <template v-slot:control>
            <q-carousel-control position="bottom-right" :offset="[18, 18]">
              <q-btn push round dense class="bg-gray-600 text-white"
                :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'" @click="fullscreen = !fullscreen" />
            </q-carousel-control>
          </template>
        </q-carousel>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from 'vue'
import ProjectDescripton from './ProjectDescription.vue'

export default defineComponent({
  name: 'PortfolioPage',
  components: { ProjectDescripton },
  props: {
    classRow: String,
    projectLen: Number,
    projectName: String
  },
  setup(props) {
    const state = reactive({
      data: 'texto',
      projectNameData: props.projectName,
      showDialog: false
    })

    return {
      state,
      slide: ref(1),
      fullscreen: ref(false)
    }
  },
  methods: {
    getLink(index) {
      return `https://storageapi.fleek.co/7d351ace-1fcf-4bc2-be39-c54631049d11-bucket/projects/${this.state.projectNameData}/f${index}.png`
    }
  }

})
</script>

<style>
.main-div-port {
  background-color: whitesmoke;
}
</style>
