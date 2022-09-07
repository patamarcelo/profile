<template>
  <q-layout class="flex column items-center justify-center ">
    <div
      class="flex  column bg-gray-50 items-center justify-center w-5/6  lg:p-10 lg:w-4/5 p-4 lg:m-0 m-5  rounded-3xl shadow-xl login-box">
      <div class="flex justify-around items-start m-6">
        <div class="flex column justify-start w-2/3 font">
          <span class="text-bold">Hey, </span>
          <p>
            This is my portolio and my personal webpage, if you wanna check it out, please talk to me before and ask
            my password
          </p>
          <span class="mt-4">
            <q-icon class="mr-3 mb-1" name="fa-brands fa-whatsapp" style="color: green; font-size: 1.4em;" />
            <a href="https://wa.me/+5551997090862" target="blank_" class=" underline text-blue-600">Send message</a>
          </span>
        </div>
        <div class="flex column  justify-start ">
          <q-avatar size="120px">
            <img :src="system.picture" class="object-cover">
          </q-avatar>
        </div>
        <div class="container w-full flex column items-center justify-between">
          <q-input type="password" v-model="state.password" label="Password" class="mb-10 w-3/5"
            @keydown.enter="loginSys()" />
          <q-btn color="primary" label="Enter" @click="loginSys()" class="w-3/5" />
        </div>
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
    const { changeSkel } = system
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

    return { state, system, changeLog, changeSkel, msg }
  },
  methods: {
    loginSys () {
      if (this.state.password === '123devmp') {
        console.log('aceertou')
        this.changeSkel()
        setTimeout(() => {
          this.changeSkel()
          this.changeLog()
        }, 2000)
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
