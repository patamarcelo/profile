<template>
    <div>
        <div class="flex w-full bg-white justify-around items-center p-3 flex-row-reverse">
            <div class="lg:w-1/2 w-full">
                <q-skeleton height="500px" class="m-2 mt-5" />
            </div>
            <div class="flex-1  items-center  rounded-tr-lg  pb-5 flex flex-col rounded-br-none  pl-3  justify-between">
                <div class="px-5 w-full flex justify-center self-center mt-0 flex-col ">
                    <q-skeleton type="text" class="w-1/2" height="100px"/>
                    <q-skeleton type="text" class="" height="50px" v-for="i in 8" :key="i" />
                </div>
            </div>
        </div>
        <div id="#loadskel"></div>
    </div>

</template>

<script>
export default {

}
</script>

<style>
</style>
