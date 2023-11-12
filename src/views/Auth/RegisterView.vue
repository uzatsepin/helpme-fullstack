<script setup>

import {ref} from "vue";
import {useUsersStore} from "../../stores/usersStore";
import ToastSuccess from "../../components/Others/ToastSuccess.vue";
import ToastError from "../../components/Others/ToastError.vue";

const userStore = useUsersStore()

const registerForm = ref({
    email: '',
    phoneNumber: '',
    userName: '',
    town: '',
    password: '',
})

const textToShow = ref('');

const notificationText = {
    success: 'Реєстрація успішна.',
    error: 'Не вдалось зареєструватись, спробуйте знову.'
}


const handleRegistrationForm = () => {
    userStore.register(registerForm.value)

    if (userStore.isRegisterError) {
        textToShow.value = notificationText.success
        setTimeout(() => {
            window.location.assign('/')
        }, 3000)
    }
    if (!userStore.isRegisterError) {
        textToShow.value = notificationText.error

    }
}

</script>

<template>
    <div class="bg-white py-6 sm:py-8 lg:py-12 relative">

        <transition name="popup-anim">
            <ToastSuccess v-if="!userStore.isRegisterError && textToShow" :text="textToShow"/>
        </transition>
        <transition name="popup-anim">
            <ToastError v-if="userStore.isRegisterError && textToShow" :text="textToShow"/>
        </transition>


        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">Реєстрація</h2>
            <form class="mx-auto max-w-lg rounded-lg border" @submit.prevent="handleRegistrationForm">
                <div class="flex flex-col gap-4 p-4 md:p-8">
                    <div>
                        <label for="email" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Введіть вашу
                            електронну пошту</label>
                        <input v-model="registerForm.email" name="email"
                               class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                               placeholder="user@gmail.com" type="email"/>
                    </div>

                    <div>
                        <label for="phoneNumber" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Введіть
                            номер телефону</label>
                        <input v-model="registerForm.phoneNumber" name="phoneNumber"
                               class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                               placeholder="+380999999999"/>
                    </div>

                    <div>
                        <label for="userName" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Введіть ваше
                            прізвище та імʼя</label>
                        <input v-model="registerForm.userName" name="userName"
                               class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                               placeholder="Іванов Іван"/>
                    </div>

                    <div>
                        <label for="town" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Вкажіть з якого
                            ви міста</label>
                        <input v-model="registerForm.town" name="town"
                               class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                               placeholder="Херсон"/>
                    </div>

                    <div>
                        <label for="password" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Ваш
                            пароль</label>
                        <input v-model="registerForm.password" name="password"
                               class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                               placeholder="******" type="password"/>
                    </div>

                    <button
                        class="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
                        Зареєструватись
                    </button>
                </div>

                <div class="flex items-center justify-center bg-gray-100 p-4">
                    <p class="text-center text-sm text-gray-500">Є аккаунт?
                        <router-link to="/login"
                                     class="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
                            Авторизуйтесь
                        </router-link>
                    </p>
                </div>
            </form>
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