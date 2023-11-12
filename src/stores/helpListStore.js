import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from '../axios.js'

export const useHelpListStore = defineStore('helpList', () => {

  const helpList = ref([])
  const requestStatus = ref(null)

  async function getHelpList() {
    const {data} = await axios.get('/requests')
    helpList.value = data;
  }

  async function sendRequest(requestData) {
    try {
      const response = await axios.post('/create', requestData);
      requestStatus.value = response.status

    } catch (err) {
      console.error(err);
      if (err.response) {
        requestStatus.value = err.response.status
      }

    }
  }



  const helpListLength = computed(() => helpList.value.length)

  return { helpList, getHelpList, helpListLength, sendRequest, requestStatus }
})
