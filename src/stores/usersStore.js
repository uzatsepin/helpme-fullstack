import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useUsersStore = defineStore('users', () => {
    const routes = {
        getAllUsers: '/users'
    }
    const users = ref([])

    async function getAllUsers () {
        const { data } = await axios.get(import.meta.env.VITE_SERVER_ADDRESS + routes.getAllUsers)
        users.value = data
    }

  return { getAllUsers, users }
})
