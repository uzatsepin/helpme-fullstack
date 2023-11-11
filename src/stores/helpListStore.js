import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useHelpListStore = defineStore('helpList', () => {
  const mainLink = import.meta.env.VITE_SERVER_ADDRESS;
  const routes = {
    getAll: '/requests',
  }
  const helpList = ref([])

  async function getHelpList() {
    const {data} = await axios.get(`${mainLink}${routes.getAll}`)
    helpList.value = data;
  }

  const helpListLenght = computed(() => helpList.value.length)

  return { helpList, getHelpList, helpListLenght }
})
