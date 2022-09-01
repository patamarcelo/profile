<template>
  <q-page class="flex flex-center column">
    <div class="row bg-red-800 ">
      <h1 class="text-green">Profile Page </h1>
    </div>
    <div class="row">
      <q-btn round :loading="true" color="black" icon="camera_rear" size="xl">
        <template v-slot:loading>
          <q-spinner-gears />
        </template>
      </q-btn>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
