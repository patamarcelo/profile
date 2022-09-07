<template>
    <div>
        <div class="flex w-full bg-white justify-around items-center p-3" v-for="i in 3" :key="i"
            :class="i == 2 ? 'flex-row-reverse' : 'flex-row'">
            <div class="w-1/2">
                <q-skeleton height="250px" class="m-2 mt-5" />
            </div>
            <div class="flex-1  items-center  rounded-tr-lg  pb-5 flex flex-col rounded-br-none  pl-3  justify-between">
                <div class="px-5 w-full flex justify-center self-center mt-8 flex-col ">
                    <q-skeleton type="text" class="" height="50px" v-for="i in 5" :key="i" />
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
