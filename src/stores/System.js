import { defineStore } from 'pinia'

export const SystemStore = defineStore('system', {
  id: 'system',
  state: () => ({
    isAuth: true,
    counter: 23,
    picture: '../../src/assets/user_1.jpeg'
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    changeLog () {
      this.isAuth = !this.isAuth
    }
  }
})
