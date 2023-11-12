<script setup>

import {computed, ref} from "vue";
import {useUsersStore} from "../../stores/usersStore";
import router from "../../router";

const usersStore = useUsersStore();

const loginForm = ref({
    email: '',
    password: ''
})

const loginResponse = ref('')

const handleLogin = async () => {
    if(loginForm.value.email.length > 3 && loginForm.value.password.length > 3) {
        await usersStore.login(loginForm.value);
        loginResponse.value = await usersStore.getLoginResponse;
    }

    if (usersStore.isAuth) {
        window.location.assign('/')
    }
}



</script>

<template>
    <div class="bg-white py-6 sm:py-8 lg:py-12">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8" v-if="!usersStore.isAuth">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Авторизація</h2>

            <form class="mx-auto max-w-lg rounded-lg border" @submit.prevent="handleLogin">
                <div class="flex flex-col gap-4 p-4 md:p-8">
                    <div>
                        <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Ваша електронна пошта</label>
                        <input v-model="loginForm.email" name="email" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" type="email" placeholder="name@gmail.com"/>
                    </div>
                    <div>
                        <label for="password" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Ваш пароль</label>
                        <input v-model="loginForm.password" name="password" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" type="password" placeholder="********"/>
                    </div>
                    <button class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">Увійти</button>
                </div>

                <div class="flex items-center justify-center bg-gray-100 p-4">
                    <p class="text-center text-sm text-gray-500">Немає аккаунту? <router-link to="/register" class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">Зареєструйтесь</router-link></p>
                </div>
            </form>
        </div>
        <div class="min-h-full m-auto" v-if="usersStore.isAuth">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Ви успішно авторизувались</h2>
            <div class="mx-auto max-w-lg rounded-lg border">
                <router-link to="/" class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">На головну</router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.popup-anim-enter-active {
    transition: all 250ms ease-in-out;
}
.popup-anim-leave-active {
    transition: all 250ms ease-in-out;
}
.popup-anim-enter, .popup-anim-leave-to {
    opacity: 0;
}

</style>