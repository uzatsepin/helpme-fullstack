<script setup>
import {useRoute} from 'vue-router'
import {useUsersStore} from "../stores/usersStore";

const route = useRoute();
const isRouteActive = (path) => {
    return route.path === path
}
const userStore = useUsersStore();

const handleLogOut = () => {
    if (window.localStorage.getItem('token')) {
        window.localStorage.clear();
        window.location.assign('/')
    }
}

</script>

<template>
    <div class="bg-white lg:pb-12">
        <div class="mx-auto max-w-screen-2xl">
            <header class="flex items-center justify-between py-4 md:py-8">
                <!-- logo - start -->
                <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
                   aria-label="logo">
                    <svg width="95" height="94" viewBox="0 0 95 94" class="h-auto w-6 text-indigo-500"
                         fill="currentColor"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M96 0V47L48 94H0V47L48 0H96Z"/>
                    </svg>
                    HelpME
                </a>
                <!-- logo - end -->

                <!-- nav - start -->
                <nav class="hidden gap-12 lg:flex">
                    <router-link to="/"
                                 class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                                 :class="{ 'text-indigo-500': isRouteActive('/') }">Домашня
                    </router-link>
                    <router-link to="/helplist"
                                 class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                                 :class="{ 'text-indigo-500': isRouteActive('/helplist') }">Потрібна допомога
                    </router-link>
                    <router-link to="/askhelp"
                                 class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                                 :class="{ 'text-indigo-500': isRouteActive('/askhelp') }">Залишити заявку
                    </router-link>
                    <router-link to="/allusers"
                                 class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                                 :class="{ 'text-indigo-500': isRouteActive('/allusers') }">Всі користувачі
                    </router-link>
                    <router-link to="/about"
                                 class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
                                 :class="{ 'text-indigo-500': isRouteActive('/about') }">Про проєкт
                    </router-link>
                </nav>
                <!-- nav - end -->

                <!-- buttons - start -->
                <div class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start"
                     v-if="!userStore.isAuth">
                    <router-link to="/login"
                                 class="inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base">
                        Увійти
                    </router-link>

                    <router-link to="/register"
                                 class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                        Реєстрація
                    </router-link>
                </div>
                <div class="-ml-8 hidden flex-col gap-2.5 sm:flex-row sm:justify-center lg:flex lg:justify-start"
                     v-else>
                    <router-link to="/personal"
                                 class="flex gap-2 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g clip-path="url(#clip0_11_1368)">
                                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z" fill="#ffffff"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_11_1368">
                                    <rect width="24" height="24" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        {{ userStore.userInfo.userName }}
                    </router-link>
                    <div @click="handleLogOut"
                        class="cursor-pointer inline-block rounded-lg px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:text-indigo-500 focus-visible:ring active:text-indigo-600 md:text-base">
                        Вийти
                    </div>
                </div>

                <button type="button"
                        class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clip-rule="evenodd"/>
                    </svg>

                    Menu
                </button>
                <!-- buttons - end -->
            </header>
        </div>
    </div>
</template>

<style scoped></style>