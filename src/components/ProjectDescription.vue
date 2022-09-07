<template>
  <div>
    <div class="flex flex-start flex-col p-5 text-justify">
      <div class="flex flex-col justify-start items-start mb-5">
        <p class="text-h4 font-bold">Sistema Operacional - Project name</p>
        <small class="text-blue-600 underline italic"><a href="http://ricefoods.com.br"
            target="_blank">www.ricefoods.com.br</a></small>
      </div>
      <div class="">
        <p class="text-xl font-bold underline italic mb-1">Background and Problem statement</p>
        <p class="text-base pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam minima
          eligendi.
          Repellendus dolores totam sint tempore. Illum sint delectus, explicabo cupiditate nulla, quis
          quas
          nam recusandae ratione, et voluptatum.</p>
      </div>
      <div class="mt-5">
        <p class="text-xl font-bold italic mb-1 underline">Background and Problem statement</p>
        <p class="text-sm pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam minima
          eligendi.
          Repellendus dolores totam sint tempore. Illum sint delectus, explicabo cupiditate nulla, quis
          quas
          nam recusandae ratione, et voluptatum.</p>
      </div>
      <div class="mt-5">
        <p class="text-xl font-bold underline italic mb-5">Some features developed: </p>
        <div class="pl-4 flex">
          <div class="w-1/3 items-center justify-start my-1" v-for="i in 12" :key="i">
            <div class="row items-center">
              <q-icon name="fa-regular fa-circle-check text-green-600" />
              <p class="text-bold italic ml-2">Coffee</p>
            </div>
          </div>
        </div>

      </div>
      <div class="mt-5">
        <p class="text-xl font-bold italic mb-1 underline">Final....</p>
        <p class="text-xs italic pl-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum totam minima
          eligendi.
          Repellendus dolores totam sint tempore. Illum sint delectus, explicabo cupiditate nulla, quis
          quas
          nam recusandae ratione, et voluptatum.</p>
      </div>
    </div>

  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'ProjectDescripton',
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
