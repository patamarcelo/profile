import { defineStore } from 'pinia'

export const SystemStore = defineStore('system', {
  id: 'system',
  state: () => ({
    isAuth: true,
    skelon: false,
    counter: 23,
    password: '#!/devmp',
    picture:
      'https://storageapi2.fleek.co/7d351ace-1fcf-4bc2-be39-c54631049d11-bucket/img/user_1.jpeg'
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    changeLog () {
      this.isAuth = !this.isAuth
    },
    changeSkel () {
      this.skelon = !this.skelon
    }
  }
})
