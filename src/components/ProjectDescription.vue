<template>
  <div>
    <div class="flex flex-start flex-col p-5 text-justify">
      <div class="flex flex-col justify-start items-start mb-5">
        <p class="text-h4 font-bold">{{ dataProject.title }}</p>

        <small class="text-blue-600 underline italic mr-10"><a :href="dataProject.href" target="_blank">{{
            dataProject.access.link
        }}</a></small>
        <small class="text-gray-600 italic text-bold" v-if="dataProject.access.user && dataProject.access.password">
          user: {{ dataProject.access.user }} / password: {{ dataProject.access.password }}
        </small>

      </div>
      <div class="">
        <p class="text-xl font-bold underline italic mb-1">Background and Problem statement</p>
        <p class="text-base pl-4">
          {{ dataProject.problem }}
        </p>
      </div>
      <div class="mt-5">
        <p class="text-xl font-bold underline italic mb-5">Some features developed: </p>
        <div class="pl-4 flex">
          <div class=" items-center justify-start my-1" v-for="data in dataProject.features" :key="data">
            <div class="row items-center">
              <span>
                <p class="ml-2 m-2"> <q-icon name="fa-regular fa-circle-check text-green-600" class="mr-2" />{{ data }}</p>
              </span>
            </div>
          </div>
        </div>

      </div>
      <div class="mt-5">
        <p class="text-xl font-bold italic mb-1 underline">Finally</p>
        <p class="text-xs italic pl-4">
          {{ dataProject.final }}
        </p>
      </div>
    </div>

  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'ProjectDescripton',
  props: {
    dataProject: Object
  },
  setup () {
    const state = reactive({
      data: ''
    })
    return { state }
  }
})
</script>

<style>
.main-descrip {
  -moz-box-shadow: inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow: inset 0 0 10px #000000;
}
</style>
