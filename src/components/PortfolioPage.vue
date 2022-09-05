<template>
    <div class="flex m-3 rounded-xl mt-10 w-full  items-center justify-center shadow-2xl main-div-port ">
        <h1>{{ state.data }}</h1>
    </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'PortfolioPage',
  setup () {
    const state = reactive({
      data: 'Portfolio'
    })
    return { state }
  }

})
</script>

<style>
.main-div-port {
    background-color: whitesmoke;
}
</style>
