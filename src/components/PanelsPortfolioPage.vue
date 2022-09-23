<template>
    <div class="flex column p-4 m-4 mt-1 w-full  items-stretch  justify-between bg-white  shadow-12 rounded-bl-lg rounded-br-lg">
        <q-tabs v-model="tab" dense class="text-grey" active-color="primary" indicator-color="primary" align="justify"
            narrow-indicator>
            <q-tab v-for="(data, index) in project.projects" :key="index"
            :name="data.name" :label="data.project.title" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
            <q-tab-panel
            v-for="(data,index) in project.projects" :key="index"
            :name="data.name"
            class="m-0 p-0 mt-10 justify-center items-center">
                <div class="flex">
                    <div class="column w-1/2">
                        <ProjectDescripton :data-project="data.project" />
                    </div>
                    <div class="column w-1/2 justify-center">
                        <q-carousel arrows v-model:fullscreen="fullscreen" swipeable animated v-model="slide" thumbnails infinite
                            autoplay="100" class="pl-0" control-color="primary" >
                            <q-carousel-slide v-for="i in data.project.pictures" :key="i" :name="i" :img-src="getLink(i,data.name)" class="object-cover" />
                            <template v-slot:control>
                                <q-carousel-control position="bottom-right" :offset="[18, 18]">
                                <q-btn push round dense class="bg-gray-600 text-white"
                                    :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'" @click="fullscreen = !fullscreen" />
                                </q-carousel-control>
                            </template>
                        </q-carousel>
                    </div>
                </div>
            </q-tab-panel>
        </q-tab-panels>
    </div>
</template>

<script>
import { ref } from 'vue'
import { ProjectStore } from '../stores/Project'
import ProjectDescripton from './ProjectDescription.vue'

export default {
  components: { ProjectDescripton },
  setup () {
    const project = ProjectStore()
    return {
      tab: ref(project.projects[0].name),
      project,
      slide: ref(1),
      fullscreen: ref(false)
    }
  },
  methods: {
    getLink (index, nameProject) {
      return `https://storageapi.fleek.co/7d351ace-1fcf-4bc2-be39-c54631049d11-bucket/projects/${nameProject}/f${index}.png`
    }
  }
}
</script>
