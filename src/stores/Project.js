import { defineStore } from 'pinia'

export const ProjectStore = defineStore('prtoject', {
  id: 'project',
  state: () => ({
    projects: [
      {
        name: 'rice',
        project: {
          title: 'Sistema Operacional - Corretora',
          access: {
            link: 'www.ricefoods.com.br',
            user: 'admin@admin.com',
            password: '123admin'
          },
          href: 'http://www.ricefoods.com.br',
          pictures: 16,
          problem: 'problem found here',
          idea: 'idea that we can work on',
          features: ['teste 1', 'teste 2', 'teste 3'],
          final: 'final result about everything'
        }
      },
      {
        name: 'social',
        project: {
          title: 'Social Media Estrategy',
          access: {
            link: '',
            user: '',
            password: ''
          },
          href: '',
          pictures: 8,
          problem: 'problem found here',
          idea: 'idea that we can work on on social media',
          features: ['teste 1', 'teste 2', 'teste 3', 'teste 4', 'teste 5'],
          final: 'final result about everything'
        }
      },
      {
        name: 'binance',
        project: {
          title: 'Binance Front-end Dashboard',
          access: {
            link: '',
            user: '',
            password: ''
          },
          href: '',
          pictures: 12,
          problem: 'problem found here',
          idea: 'idea that we can work on on social media',
          features: ['teste 1', 'teste 2', 'teste 3', 'teste 4', 'teste 5'],
          final: 'final result about everything'
        }
      },
      {
        name: 'house',
        project: {
          title: 'Real State - Home for Sale',
          access: {
            link: '',
            user: '',
            password: ''
          },
          href: '',
          pictures: 6,
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
        ar.push(i.name)
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
