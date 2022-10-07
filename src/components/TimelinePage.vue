
<template>
    <div class="q-px-lg q-pb-md pl-0 ml-0 mt-10 text-justify break-normal">
        <q-timeline color="secondary">
            <div class="flex row w-full">
                <h1 class="text-gray-600 text-xl  mb-1 italic">
                    Work Experience
                    <q-separator color="" size="2px" />
                </h1>
            </div>

            <q-timeline-entry heading class="text-bold">
                Australia
            </q-timeline-entry>
            <q-timeline-entry title="Construction" subtitle="August, 2009" color="primary" class="w-full"
                icon="fas fa-helmet-safety">
                <div>
                    Labor as a General services in the construction field, traveling as a tourist to study in Australia
                    and learn
                    English.
                </div>
            </q-timeline-entry>

            <q-timeline-entry title="Pizza Hut" subtitle="October, 2009" color="primary" class="w-full"
                icon="fas fa-pizza-slice">
                <div>
                    Delivery Guy from Pizza Hut, great service to improve my English even more, had some tasks like
                    handling money, payments and receipts direct from customers, delivery pizza.
                </div>
            </q-timeline-entry>

            <q-timeline-entry heading class="text-bold w-full">
                Brazil
            </q-timeline-entry>

            <q-timeline-entry title="Ricefoods | Grao Dourado " subtitle="2010 - 2021" class="w-full"
                icon="fas fa-user-tie">
                <div>
                    Rice Broker focused on supplying national industries, with specific customers.
                    Grao Dourado was created to serve the purchases in the national market.
                    Ricefoods was created to serve the purchases in the international market.
                    Companies focused on the origin of raw material for industries, to see more visit <a
                        class="italic text-blue-800 underline" target="_blank"
                        href="https://ricefoods.com.br">www.ricefoods.com.br</a><br />
                    Some of developed activities:
                    <div v-for="(data, index) in state.ricefoods" :key="index" class="m-1 mt-2 mr-9 ">
                        <q-icon class="ml-3 text-gray-700 mr-1 mb-1 align-text-bottom" name="fas fa-circle"
                            style="font-size: 0.5em;" />
                        {{ data.desc }}
                    </div>
                </div>
            </q-timeline-entry>

            <q-timeline-entry title="GDX Log" subtitle="2016 - 2021" class="w-full" icon="fas fa-truck">
                <div>
                    Company focused on the transport of land goods, created to move our own goods, paddy rice for
                    industries and processed rice for sales points.
                    Operations throughout the national territory, working with outsourced drivers.<br />
                    Some of developed activities:
                    <div v-for="(data, index) in state.gdx" :key="index" class="m-1 mt-2 mr-9 ">
                        <q-icon class="ml-3 text-gray-700 mr-1 mb-1 align-text-bottom" name="fas fa-circle"
                            style="font-size: 0.5em;" />
                        {{ data.desc }}
                    </div>
                    <div class="mt-6">
                        <small class="italic">In fact, this is my own transportation company so I had to basically do
                            all the operations and management my employees.</small>
                    </div>
                </div>
            </q-timeline-entry>

            <q-timeline-entry title="Crosskin" subtitle="2019 - 2020" class="w-full" icon="fas fa-tshirt">
                <div>
                    Investment with a partner, of a brand that was not currently working. Sportswear company/brand
                    focused on sports, mainly Crossift.
                    Performance of almost all functions within the company, such as:
                    <div v-for="(data, index) in state.crosskin" :key="index" class="m-1 mt-2 mr-9 ">
                        <q-icon class="ml-3 text-gray-700 mr-1 mb-1 align-text-bottom" name="fas fa-circle"
                            style="font-size: 0.5em;" />
                        {{ data.desc }}
                    </div>
                </div>
            </q-timeline-entry>

            <q-timeline-entry title="Valutech" subtitle="2021 - Current Working..." class="w-full"
                icon="fas fa-chart-line">
                <div>
                    Investor in a Valuation startup, working together with the other partners in decision-making for the
                    company and all sectors, especially in strategic decisions. Working as developer to help team as
                    well.
                    <div v-for="(data, index) in state.valutech" :key="index" class="m-1 mt-2 mr-9 ">
                        <q-icon class="ml-3 text-gray-700 mr-1 mb-1 align-text-bottom" name="fas fa-circle"
                            style="font-size: 0.5em;" />
                        {{ data.desc }}
                    </div>
                </div>
            </q-timeline-entry>
            <q-timeline-entry heading class="text-bold">
            </q-timeline-entry>
        </q-timeline>
    </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
export default defineComponent({
  name: 'TimelinePage',
  setup () {
    const state = reactive({
      australia_job: [
        { desc: 'ajuda geral na obra' },
        { desc: 'ajuda geral na obra' }
      ],
      crosskin: [
        { desc: 'General financial services' },
        { desc: 'Raw material purchase' },
        { desc: 'Product development' },
        { desc: 'Website development' },
        { desc: 'Grow ours sales points' },
        { desc: 'General Marketing' },
        { desc: 'Develop a system to manage operations' }
      ],
      gdx: [
        { desc: 'Management of all financial services' },
        { desc: "Management all trucker's drivers" },
        { desc: 'Management all legal stuffs and documents of company' },
        { desc: 'Management with dates and time to collect and delivery goods' }
      ],
      ricefoods: [
        { desc: 'Management of all financial services' },
        { desc: "Management of Broker's group" },
        { desc: "Develop a system to manage operations (it's in my portfolio)" },
        { desc: 'Management of all tech stuffs inside company, like emails , domain, website, spreadsheets and more' }
      ],
      valutech: [
        { desc: "I've Built a Django App to handle some data" },
        { desc: 'Scraping with python to collect data from a website and plot charts, and saved them in DB' },
        { desc: "I've Built an API to send data to Front-end from collected data, using Django Rest Framework" },
        { desc: 'Handling user authentication to request data and more...' }
      ]
    })
    return { state }
  }

})
</script>

<style>
.q-timeline__title {
    font-weight: bold !important;
}

.q-timeline__subtitle {
    @apply text-gray-800
}
</style>
