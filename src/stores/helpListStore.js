import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from '../axios.js'

export const useHelpListStore = defineStore('helpList', () => {

  const helpList = ref([])

  async function getHelpList() {
    const {data} = await axios.get('/requests')
    helpList.value = data;
  }



  const helpListLength = computed(() => helpList.value.length)

  return { helpList, getHelpList, helpListLength }
})
