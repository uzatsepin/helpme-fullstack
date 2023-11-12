<script setup>
import { RouterView } from 'vue-router'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useHelpListStore } from './stores/helpListStore';
import { onMounted } from 'vue';
import {useUsersStore} from "./stores/usersStore";

const helpListStore = useHelpListStore();
const usersStore = useUsersStore();

onMounted(() => {
    helpListStore.getHelpList();
    usersStore.checkIsAuth();
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
