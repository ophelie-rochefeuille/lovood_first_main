import { createRouter, createWebHistory } from 'vue-router';
import Inscription from '../components/inscription/Inscription.vue';
import HomePage from '../components/HomePage.vue';
import Header from "../components/Header.vue";


const routes = [
    {
        path: '/inscription',
        name: 'Inscription',
        component: Inscription
    },
    {
        path: '/',
        name: 'Header',
        component: Header
    },
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router