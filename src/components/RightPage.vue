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
                        myself.</p>
                    <span class="mt-3">

                        <b class="italic mt-5">Good at solving problems and passionate about them </b>&#x1F601;
                    </span>
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
                            <div class="flex col text-justify justify-start flex-nowrap">
                                <div class="flex column justify-center items-center mr-5">
                                    <q-icon size="sm" class="ml-3 mb-1 text-gray-500" :name="data.icon" />
                                </div>
                                <div class="flex column justify-start items-start ml-1">
                                    <div class="row">
                                        <p class="text-bold">
                                            {{ data.description }}
                                        </p>
                                    </div>
                                    <div class="row">
                                        <p class="text-gray-600">
                                            {{ data.title }}
                                        </p>
                                    </div>
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
                    <div class="flex justify-between w-[70%]">
                        <q-chip v-for="(data, index) in state.data_skills" :key="index" class="bg-blue-100 lg:mx-3 mx-1 my-5"
                            size="16px">
                            <q-avatar v-if="data.type == 'icon'" :icon="data.icon" class="bg-indigo-300"
                                text-color="white" size="32px" />

                            <q-avatar v-else>
                                <img :src="data.icon" class="object-cover" />
                            </q-avatar>

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
                <div class="flex items-start lg:justify-start justify-around">
                    <div v-for="(data, index) in state.data_skills_add" :key="index"
                        class="m-1 mr-9 w-1/4 whitespace-nowrap">
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
          title: 'Spent the last 5 years studying programming on the internet, i started from zero.',
          description: 'Self Learning'
        }, {
          icon: 'fa fa-star',
          title: 'Developed from scratch a system for my own company to control operations and it worked like a charm.',
          description: 'My Own Company - My own Project'
        }, {
          icon: 'fa fa-chart-line',
          title: 'Developed a trade bot to work at binance, and code some starategys like Move Avarage, Relative Strength Index, Trailing Stop Loss/Gain and more...',
          description: 'Trade Bot '
        }, {
          icon: 'fa fa-robot',
          title: 'Developed some scripts to do the repetitive  work, and automate a bunch of process that i had in my company.',
          description: 'Python Scripts'
        }
      ],
      data_skills: [
        { icon: 'https://storageapi.fleek.co/7d351ace-1fcf-4bc2-be39-c54631049d11-bucket/icons/python.svg', name: 'Python', type: 'pic' },
        { icon: 'https://storageapi.fleek.co/7d351ace-1fcf-4bc2-be39-c54631049d11-bucket/icons/jscript.svg', name: 'JavaScript', type: 'pic' },
        { icon: 'https://storageapi.fleek.co/7d351ace-1fcf-4bc2-be39-c54631049d11-bucket/icons/vuejs.svg', name: 'Vuejs', type: 'pic' },
        { icon: 'https://storageapi.fleek.co/7d351ace-1fcf-4bc2-be39-c54631049d11-bucket/icons/css.svg', name: 'CSS', type: 'pic' },
        { icon: 'https://storageapi.fleek.co/7d351ace-1fcf-4bc2-be39-c54631049d11-bucket/icons/html.svg', name: 'HTML5', type: 'pic' },
        { icon: 'https://storageapi.fleek.co/7d351ace-1fcf-4bc2-be39-c54631049d11-bucket/icons/boot.svg', name: 'Bootstrap', type: 'pic' },
        { icon: 'https://storageapi.fleek.co/7d351ace-1fcf-4bc2-be39-c54631049d11-bucket/icons/flask.svg', name: 'Flask', type: 'pic' },
        { icon: 'https://storageapi.fleek.co/7d351ace-1fcf-4bc2-be39-c54631049d11-bucket/icons/git.svg', name: 'Git', type: 'pic' },
        { icon: 'data:image/png;base64,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', name: 'Json', type: 'pic' },
        { icon: 'https://storageapi.fleek.co/7d351ace-1fcf-4bc2-be39-c54631049d11-bucket/icons/django.svg', name: 'Django', type: 'pic' },
        { icon: 'https://storageapi.fleek.co/7d351ace-1fcf-4bc2-be39-c54631049d11-bucket/icons/psql.svg', name: 'PostgreSQL', type: 'pic' },
        { icon: 'https://storageapi.fleek.co/7d351ace-1fcf-4bc2-be39-c54631049d11-bucket/icons/tail.svg', name: 'Tailwind CSS', type: 'pic' },
        { icon: 'https://cdn.quasar.dev/logo-v2/svg/logo.svg', name: 'Quasar Framework', type: 'pic' },
        { icon: 'https://img.icons8.com/external-tal-revivo-green-tal-revivo/36/000000/external-django-a-high-level-python-web-framework-that-encourages-rapid-development-logo-green-tal-revivo.png', name: 'Django Rest Framework', type: 'pic' }
        // { icon: 'fa-brands fa-json', name: 'Json', type: 'icon' },
      ],
      data_skills_add: ['Excel', 'Solidity', 'XML', 'Ajax', 'SQL', 'Electron Framework']
    })
    return { state }
  }
})
</script>

<style>
</style>
