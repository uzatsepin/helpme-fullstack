import { defineStore } from 'pinia'
import axios from '../axios.js'
import {computed, ref} from 'vue'

export const useUsersStore = defineStore('users', () => {

    const users = ref([])
    const loginResponse = ref(null)
    const isAuth = ref(false)
    const userInfo = ref({})
    const isRegisterError = ref(false)


    async function getAllUsers () {
        const { data } = await axios.get('/users')
        users.value = data
    }

    async function login(loginData) {
        try {
            const response = await axios.post('/login', {
                email: loginData.email,
                password: loginData.password
            });

            if (response.status === 200) {
                loginResponse.value = response.data;
                if ('token' in response.data) {
                    window.localStorage.setItem('token', response.data.token)
                    isAuth.value = true
                } else {
                    //todo сделать обработку ошибки, если авторизация не успешна
                    alert('Не удается авторизироваться')
                }
            } else {
                loginResponse.value = "Unexpected response status: " + response.status;
            }
        } catch (err) {
            if (err.response) {
                loginResponse.value = err.response.data.message;
            } else {
                loginResponse.value = "Network error: " + err.message;
            }
            console.error(err);
        }
    }

    async function register(registerData) {
        try {
            const response = await axios.post('/register', registerData);
            if (response.status === 200) {
                window.localStorage.setItem('token', response.data.token)
                isAuth.value = true
                isRegisterError.value = false
            } else {
                isRegisterError.value = true
            }
        } catch (err) {
            if (err.response) {
                isRegisterError.value = true
            }
            console.error(err);
        }
    }

    async function checkIsAuth() {
        const { data } = await axios.get('/user')
        userInfo.value = await data
        if (data) {
            isAuth.value = true
        }
    }

    const getLoginResponse = computed(() => {
        return loginResponse.value
    })

  return { getAllUsers, users, login, getLoginResponse, isAuth, checkIsAuth, userInfo, loginResponse, register, isRegisterError }
})
