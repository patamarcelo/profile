import { defineStore } from 'pinia'

export const ProjectStore = defineStore('prtoject', {
  id: 'project',
  state: () => ({
    projects: [
      {
        rice: {
          title: 'Sistema Operacional - Corretora',
          pictures: 16,
          problem: 'problem found here',
          idea: 'idea that we can work on',
          features: ['teste 1', 'teste 2', 'teste 3'],
          final: 'final result about everything'
        }
      },
      {
        social: {
          title: 'Social Media Estrategy',
          pictures: 8,
          problem: 'problem found here',
          idea: 'idea that we can work on on social media',
          features: ['teste 1', 'teste 2', 'teste 3', 'teste 4', 'teste 5'],
          final: 'final result about everything'
        }
      }
    ]
  }),
  getters: {
    countProjects (state) {
      return state.projects.length
    },
    listProjects (state) {
      const ar = []
      for (const i of state.projects) {
        const proj = Object.keys(i)[0]
        ar.push(proj)
      }
      return ar
    }
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
