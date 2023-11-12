<script setup>

import {ref} from "vue";
import ModalComponent from "../components/Others/ModalComponent.vue";
import {useUsersStore} from "../stores/usersStore";

const userStore = useUsersStore();

const requestForm = ref({
    userName: '',
    category: '',
    phoneNumber: '',
    town: '',
    title: '',
    text: '',
})

</script>

<template>
    <div class="bg-white">
        <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
            <!-- text - start -->
            <div class="mb-10 md:mb-16">
                <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Залиште запит на допомогу</h2>
                <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">Якщо ви потребуєте допомоги, залиште сформуйте свій запит у формі нижче і хтось з волонтерів з вами звʼяжеться</p>
            </div>
            <!-- text - end -->

            <!-- form - start -->
            <form class="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
                <div class="sm:col-span-2">
                    <label for="username" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Прізвище та імʼя</label>
                    <input v-model="requestForm.userName" name="username" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" placeholder="Іванов Іван"/>
                </div>

                <div class="sm:col-span-2">
                    <label for="category" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Оберіть категорію допомоги</label>
                    <input v-model="requestForm.category" name="category" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                </div>

                <div class="sm:col-span-2">
                    <label for="phoneNumber" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Номер телефону для звʼязку</label>
                    <input v-model="requestForm.phoneNumber" name="phoneNumber" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" placeholder="+380999999999" />
                </div>
                <div class="sm:col-span-2">
                    <label for="town" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Вкажіть ваше місто</label>
                    <input v-model="requestForm.town" name="town" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" placeholder="Херсон" />
                </div>

                <div class="sm:col-span-2">
                    <label for="subject" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Коротенький заголовок</label>
                    <input v-model="requestForm.title" name="subject" class="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" placeholder="Жінка з двома дітьми потребує евакуації"/>
                </div>

                <div class="sm:col-span-2">
                    <label for="message" class="mb-2 inline-block text-sm text-gray-800 sm:text-base">Повний текст запиту</label>
                    <textarea v-model="requestForm.text" name="message" class="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" placeholder="Потрібна евакуація для жінки з двома дітьми ......"></textarea>
                </div>

                <div class="flex items-center justify-between sm:col-span-2">
                    <button class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Надіслати</button>

                    <span class="text-sm text-gray-500">*Всі поля обовʼязкові для заповнення</span>
                </div>

                <p class="text-xs text-gray-400">Відправляючи форму ви підтверджуєте нашу <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">політику конфіденційності</a>.</p>
            </form>
            <!-- form - end -->
        </div>
        <ModalComponent />
    </div>
</template>

<style scoped>

</style>