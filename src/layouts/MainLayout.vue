<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="main-layout">
      <div class="lg:p-5  p-3">
        <LoginPage v-if="!system.isAuth" />
        <IndexPage class="index-page rounded-lg shadow-12 items-grow" v-else />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue'
import IndexPage from '../pages/IndexPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import { SystemStore } from '../stores/System'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    IndexPage,
    LoginPage
  },

  setup () {
    const system = SystemStore()
    const leftDrawerOpen = ref(false)
    const state = reactive({
      login: true
    })
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      state,
      system,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped>
.main-layout {
  background: rgb(2, 0, 36);
  background: radial-gradient(circle, rgba(2, 0, 36, 1) 0%, rgba(62, 0, 120, 1) 50%, rgba(0, 212, 255, 1) 100%);
}

.index-page {
  background-color: whitesmoke;
}
</style>
