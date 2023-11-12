<script setup>

import {computed} from "vue";

const props = defineProps({
    helpListItem: {
        type: Object,
        required: true,
    }
})

const firstLetter = computed(() => {
    return props.helpListItem.user.userName
})

const createdTime = computed(() => {
    const dateFromDb = new Date(props.helpListItem.createdAt);
    const formattedDate = `${dateFromDb.getDate()}-${dateFromDb.getMonth() + 1}-${dateFromDb.getFullYear()}`;
    const formattedTime = `${dateFromDb.getHours().toString().padStart(2, '0')}:${dateFromDb.getMinutes().toString().padStart(2, '0')}`;
    return `${formattedDate}, ${formattedTime}`;
});

</script>

<template>

    <div class="p-6 md:w-[49%] flex flex-col items-start border rounded-2xl shadow">
        <span class="inline-block py-1 px-2 rounded bg-gray-300 text-xs font-medium tracking-widest">{{
                helpListItem.category
            }}</span>
        <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">{{ helpListItem.title }}</h2>
        <p class="leading-relaxed mb-8">{{ helpListItem.text }}</p>
        <div class="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
            <a class="text-gray-500 inline-flex items-center cursor-pointer">
                <svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                     fill="none">
                    <g clip-path="url(#clip0_17_17399)">
                        <path
                            d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                            fill="#6b7280"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_17_17399">
                            <rect width="24" height="24" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                {{ helpListItem?.user?.town }}
            </a>
            <span
                class="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                    <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                         stroke-linejoin="round" viewBox="0 0 24 24">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                {{ helpListItem?.viewsCount }}
          </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"
                     stroke-linejoin="round" viewBox="0 0 24 24">
                  <path
                      d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                6
          </span>
        </div>
        <div class="flex justify-between w-full items-center">
            <div class="inline-flex items-center">
                <span
                    class="w-12 h-12 rounded-full flex-shrink-0 flex justify-center items-center bg-gray-500 text-white">{{ firstLetter.charAt(0) }}</span>
                <span class="flex-grow flex flex-col pl-4">
                    <span class="title-font font-medium text-gray-900">{{ helpListItem.user.userName }}</span>
                    <span class="text-gray-400 text-xs tracking-widest mt-0.5 flex items-center">
                        <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g clip-path="url(#clip0_11_1333)">
                        <path
                            d="M19 4H18V3C18 2.45 17.55 2 17 2C16.45 2 16 2.45 16 3V4H8V3C8 2.45 7.55 2 7 2C6.45 2 6 2.45 6 3V4H5C3.89 4 3.01 4.9 3.01 6L3 20C3 21.1 3.89 22 5 22H19C20.1 22 21 21.1 21 20V6C21 4.9 20.1 4 19 4ZM19 19C19 19.55 18.55 20 18 20H6C5.45 20 5 19.55 5 19V9H19V19ZM7 11H9V13H7V11ZM11 11H13V13H11V11ZM15 11H17V13H15V11Z"
                            fill="#9ca3af"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_11_1333">
                        <rect width="24" height="24" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        {{ createdTime }}
                    </span>
              </span>
            </div>
            <a class="text-indigo-500 inline-flex items-center cursor-pointer">
                Детальніше

                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none"
                     stroke-linecap="round" stroke-linejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                </svg>
            </a>
        </div>
    </div>


</template>

<style scoped>

</style>