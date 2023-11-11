<script setup>
import {onMounted, ref} from 'vue';
import {useHelpListStore} from '../stores/helpListStore';
import HelpItem from "../components/HelpItem.vue";

const helpListStore = useHelpListStore();

const helpList = ref([])

onMounted(async () => {
    await helpListStore.getHelpList();
    helpList.value = helpListStore.helpList
})

</script>
<template>
    <div class="container mx-auto ">

        <section class="text-gray-600 body-font overflow-hidden w-full">
            <div class="container mx-auto">
                <div class="flex flex-wrap gap-6">
                    <HelpItem :helpListItem="helpListItem" v-for="helpListItem in helpList" :key="helpListItem.id"/>
                </div>
            </div>
        </section>
    </div>
</template>