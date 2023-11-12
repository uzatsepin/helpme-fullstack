import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import HelpList from '@/views/HelpList.vue'
import PageNotFound from '@/views/PageNotFound.vue'
import RequestView from "@/views/RequestView.vue";
import LoginView from "@/views/Auth/LoginView.vue";
import RegisterView from "@/views/Auth/RegisterView.vue";
import AllUsers from "../views/AllUsers.vue";
import {useUsersStore} from "../stores/usersStore";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/helplist',
            name: 'HelpList',
            component: HelpList
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'PageNotFound',
            component: PageNotFound
        },
        {
            path: '/askhelp',
            name: 'RequestView',
            component: RequestView,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'LoginView',
            component: LoginView
        },
        {
            path: '/register',
            name: 'RegisterView',
            component: RegisterView
        },
        {
            path: '/allusers',
            name: "AllUsers",
            component: AllUsers
        }

    ]
})

router.beforeEach((to, from, next) => {
    const userStore = useUsersStore()
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!userStore.isAuth) {
            next('/login')
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
