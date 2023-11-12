<script setup>
    import {useUsersStore} from "../stores/usersStore";
    import {onMounted} from "vue";

    const userStore = useUsersStore();

    onMounted(() => {
        userStore.getAllUsers()
    })
</script>

<template>
    <div v-for="user in userStore.users" :key="user.id">
        <div>{{ user.userName }}</div>
    </div>
</template>



<style scoped>

</style>