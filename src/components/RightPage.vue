<template>
    <q-layout class="">
        <q-page-container class="flex column justify-around m-2 mt-0 ml-0 p-3 items-stretch">
            <q-section class="mb-10">
                <div class="flex row w-full">
                    <div>
                        <h1 class="text-gray-600 text-xl  mb-6">
                            {{ state.title_about }}
                            <q-separator color="" size="2px" />
                        </h1>
                    </div>
                    <p class="text-justify">
                        Graduated in administration, but passionate about technology, I started the computer science
                        course
                        at the age of 18 but soon changed to Business Administration because of the family company, and
                        in
                        the last 14 years I have worked there, but always in the system, data part , controls and
                        worksheets. in the last 6 years i started studying python and developing small projects, soon i
                        also
                        turned to javascript to be able to work on the front and then i started to develop the system to
                        control the operations of my own company. I learned pretty much everything on the internet by
                        myself. <b class="italic">Good at solving problems and passionate about them </b>&#x1F601;
                    </p>
                </div>
            </q-section>

            <q-section class="mb-10">
                <div class="flex row w-full">
                    <h1 class="text-gray-600 text-xl  mb-6">
                        {{ state.title_education }}
                        <q-icon class="ml-3 mb-1" name="fa fa-graduation-cap" style="color: #ccc; font-size: 1.4em;" />
                        <q-separator color="" size="2px" />
                    </h1>
                </div>
                <div class="inline-grid gap-3">
                    <p class="text-gray-600">
                        July 2008 - December 2013
                    </p>
                    <p class="text-bold">
                        Pontifical Catholic University Of Rio Grande Do Sul
                    </p>
                    <p class="text-gray-600">
                        Bussiness
                    </p>

                </div>
            </q-section>
            <q-section class="mb-10">
                <div class="flex row w-full">
                    <h1 class="text-gray-600 text-xl  mb-6">
                        {{ state.title_proud }}
                        <q-separator color="" size="2px" />
                    </h1>
                </div>
                <q-container class="ml-3">
                    <div class="inline-grid gap-3">
                        <q-section v-for="(data, index) in state.data_proud" :key="index">
                            <div class="flex">
                                <div class="flex column justify-center items-center">
                                    <q-icon size="sm" class="ml-3 mb-1 text-gray-500" :name="data.icon" />
                                </div>
                                <div class="flex column items-start ml-6">
                                    <p class="text-bold">
                                        {{ data.description }}
                                    </p>
                                    <p class="text-gray-600">
                                        {{ data.title }}
                                    </p>
                                </div>
                            </div>
                        </q-section>

                    </div>
                </q-container>
            </q-section>
            <q-section class="w-full">
                <div class="flex row w-full">
                    <h1 class="text-gray-600 text-xl  mb-1">
                        {{ state.title_skills }}
                        <q-separator color="" size="2px" />
                    </h1>
                </div>
                <q-container class="ml-3">
                    <div class="flex justify-between">
                        <q-chip v-for="(data, index) in state.data_skills" :key="index" class="bg-blue-100 mx-4 my-5"
                            size="16px">
                            <q-avatar :icon="data.icon" class="bg-indigo-300" text-color="white" size="32px" />
                            {{ data.name }}
                        </q-chip>
                    </div>
                </q-container>
                <div class="flex row w-full">
                    <h1 class="text-gray-600 text-xl  mb-6 italic">
                        {{ state.title_skills_add }}
                        <q-separator color="" size="2px" />
                    </h1>
                </div>
                <div class="flex items-start justify-start">
                    <div v-for="(data, index) in state.data_skills_add" :key="index" class="m-1 mr-9 w-1/4 ">
                        <q-icon class="ml-3 mr-1 mb-1 align-text-bottom" name="fas fa-circle"
                            style="color: #ccc; font-size: 0.5em;" />
                        {{ state.data_skills_add[index] }}
                    </div>
                </div>
            </q-section>
        </q-page-container>
    </q-layout>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import { mdiTailwind } from '@quasar/extras/mdi-v6'
import { biFiletypeSql } from '@quasar/extras/bootstrap-icons'

export default defineComponent({
  name: 'RightPage',
  setup () {
    const state = reactive({
      about: '',
      title_about: 'About Me',
      title_education: 'Education',
      title_proud: 'What am i proud of ?',
      title_skills: 'Technical Skills',
      title_skills_add: 'Additional Skills',
      data_proud: [
        {
          icon: 'fa fa-graduation-cap',
          title: 'July 2008 - December 2013',
          description: 'Pontifical Catholic University Of Rio Grande Do Sul'
        }, {
          icon: 'fa-brands fa-github',
          title: 'teste linha 2',
          description: 'descricao da linha 2'
        }, {
          icon: '',
          title: '',
          description: ''
        }
      ],
      data_skills: [
        { icon: 'fa-brands fa-python', name: 'Python' },
        { icon: 'fa-brands fa-square-js', name: 'JavaScript' },
        { icon: 'fa-brands fa-vuejs', name: 'Vuejs' },
        { icon: 'fa-brands fa-css3-alt', name: 'CSS' },
        { icon: 'fa-brands fa-html5', name: 'HTML5' },
        { icon: mdiTailwind, name: 'Tailwind CSS' },
        { icon: 'fa-brands fa-bootstrap', name: 'Bootstrap' },
        { icon: biFiletypeSql, name: 'PostgreSQL' },
        { icon: 'fa-brands fa-djangorestframework', name: 'Django Rest Framework' },
        { icon: '', name: 'Flask' },
        { icon: 'fa-brands fa-json', name: 'Json' },
        { icon: 'fa-brands fa-django', name: 'Django' }
      ],
      data_skills_add: ['Excel', 'Solidity', 'XML', 'Quasar Framework', 'Ajax', 'SQL', 'Electron Framework']
    })
    return { state }
  }
})
</script>

<style>
</style>
