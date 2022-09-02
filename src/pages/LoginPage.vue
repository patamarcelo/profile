<template>
  <q-layout class="flex column items-center justify-center ">
    <div class="flex  column bg-gray-50 items-center justify-center w-5/6  lg:p-10 lg:w-2/5 p-4 lg:m-0 m-5  rounded-3xl shadow-xl login-box">
      <div class="container w-full flex column items-center justify-between">
        <q-input v-model="state.password" label="Password" class="mb-10 w-3/5" @keydown.enter="loginSys()" />
        <q-btn color="primary" label="Enter" @click="loginSys()" class="w-3/5" />
      </div>
    </div>

  </q-layout>
</template>

<script>
import { SystemStore } from '../stores/System'
import { useQuasar } from 'quasar'

import { reactive } from 'vue'
export default {
  setup () {
    const $q = useQuasar()
    const system = SystemStore()
    const { changeLog } = system
    const state = reactive({
      password: '',
      rp: '123'
    })

    function msg () {
      $q.notify({
        type: 'negative',
        message: 'Try Again...'
      })
    }

    return { state, system, changeLog, msg }
  },
  methods: {
    loginSys () {
      if (this.state.password === '123mop') {
        console.log('aceertou')
        this.changeLog()
      } else {
        this.state.password = ''
        this.msg()
      }
    }
  }

}
</script>

<style>

</style>
