<template>
  <div class="flex flex-row-reverse my-3 mt-10 p-4 w-full  items-stretch  justify-between  shadow-2xl main-div-port">
    <div class="flex column p-4 flex-1 items-start justify-start  ml-2  overflow-auto max-h-96">
      Rice brokers System ( my company's system)
        https://github.com/patamarcelo/ricefoods

        System was created with the Python language, using the Django Framework that works on the MVT model.

        the official link is www.ricefoods.com.br

        the system link can also be accessed, but I have no way of giving access due to sensitive information that
        appears: https://www.ricefoods.com.br/sistema

        I published my company's website in this framework, and within the same project I created the system to control
        Orders, Commissions, Loads of each order, classification of loads, invoices...

        The data is all handled in Python on the backend, using PostgreSql as the database. the Front-end was made in
        Django templates, with CSS, Bootstrap, javascript. Today I would probably do all the Front in Vuejs making ajax
        requests, using Django as backend.

        Some features implemented were:

        - CRUD to control everything (suppliers, Customers, Orders, Loads…), load report with weighted average of
        classifications per order, invoice report, commission report, chart with order price tracking per customer,
        summary table monthly shipments, limited access for employees;
        - Files such as excel spreadsheets of orders, pdf of Notes, photos from home, all saved directly in dropbox;
        - e-mail sent to each client with the Notes and Guides according to the panel's specifications, and if the same
        was released to be sent; reading an xml file on the system to record data such as value, weight, nf number and
        issue date;
        - table with unloading forecast based on the date of the invoice, considering several factors such as customer,
        number of vehicles already scheduled or maximum weight per day allowed per customer, transit time from each
        destination.
        - added modals on the home screen with ajax calls to be able to update the data in the backend without having to
        reload the page, making changes directly to the table
        - created table with filters to control commissions, with all possible types of data filters
        -CSS and Midia query to mobile responsive html with info table, infinite scroll

        used by all company employees to control cargo loading operations.

    </div>
    <div class="flex column w-2/4 justify-center rounded-lg">
      <CaroulselQuas />
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue'
import CaroulselQuas from './CaroulselQuas.vue'

export default defineComponent({
  name: 'PortfolioPage',
  components: { CaroulselQuas },
  setup () {
    const state = reactive({
      data: 'texto'
    })
    return { state }
  }

})
</script>

<style>
.main-div-port {
  background-color: whitesmoke;
}
</style>
