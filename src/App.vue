<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useHelpListStore } from './stores/helpListStore';
import { onMounted } from 'vue';

const helpListStore = useHelpListStore();

onMounted(() => {
    helpListStore.getHelpList();
})

</script>

<template>
    <div class="flex flex-col h-screen justify-between">
        <HeaderComponent />
        <RouterView />
        <FooterComponent />
    </div>
</template>

<style scoped></style>
