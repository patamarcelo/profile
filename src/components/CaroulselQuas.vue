<template>
    <div class="">
        <q-carousel v-model:fullscreen="fullscreen" swipeable animated v-model="slide" thumbnails infinite autoplay="100" class="rounded-tl-xl rounded-bl-xl">
            <q-carousel-slide v-for="i in 16" :key="i" :name="i" :img-src="getLink(i)" class="object-cover"/>
            <template v-slot:control>
                <q-carousel-control position="bottom-right" :offset="[18, 18]">
                    <q-btn push round dense class="bg-gray-600 text-white"
                        :icon="fullscreen ? 'fullscreen_exit' : 'fullscreen'" @click="fullscreen = !fullscreen" />
                </q-carousel-control>
            </template>
        </q-carousel>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      fullscreen: ref(false)

    }
  },
  methods: {
    getLink (index) {
      return `./src/assets/projects/rice/f${index}.png`
    }
  }
}
</script>
