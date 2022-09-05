<template>
    <div>
        <q-page class="flex flex-center flex-shrink  rounded-lg bg-gray-200 ">
            <div class="w-full flex shadow-lg ">
                <div
                    class="w-full lg:w-1/3 bg-gray-800 text-white rounded-tl-lg rounded-bl-none  l-container lg:rounded-tr-none rounded-tr-lg justify-start items-center flex column">
                    <div class="flex w-full column items-center ">
                        <div class="mt-10">
                            <q-skeleton type="circle" size="120px"/>
                        </div>
                        <div class="w-1/3 mb-10">
                            <q-skeleton type="text" height="40px"/>
                        </div>

                        <div v-for="i in 3" :key="i" class="w-4/5 m-5">
                            <q-skeleton height="150px" />
                        </div>
                    </div>
                </div>
                <div class=" lg:w-2/3 w-full  rounded-tr-lg rounded-br-none  pl-3 r-container items-stretch border-2">
                    <div v-for="i in 3" :key="i" class="px-5">
                        <q-skeleton type="text" class="mb-5 mt-10 w-1/3" height="40px" />
                        <q-skeleton height="250px" />
                    </div>
                </div>
            </div>

        </q-page>
    </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
