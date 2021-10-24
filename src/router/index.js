import { createRouter, createWebHistory } from 'vue-router';
import Inscription from '../components/inscription/Inscription.vue';
import HomePage from '../components/HomePage.vue';
import InscriptionPhaseDeux from '../components/inscription/InscriptionPhaseDeux.vue';
import InscriptionPhaseTrois from '../components/inscription/InscriptionPhaseTrois.vue';
import Swipes from '../components/Swipes.vue';
import Messagerie from '../components/Messagerie.vue';
import Contact from '../components/Contact.vue';
import Profil from '../components/Profil.vue';



const routes = [
    {
        path: '/inscription',
        name: 'Inscription',
        component: Inscription
    },
    {
        path: '/swipes',
        name: 'Swipes',
        component: Swipes
    },
    {
        path: '/messagerie',
        name: 'Messagerie',
        component: Messagerie
    },
    {
        path: '/monprofil',
        name: 'Profil',
        component: Profil
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    },
    {
        path: '/inscriptionPhaseDeux',
        name: 'InscriptionPhaseDeux',
        component: InscriptionPhaseDeux
    },
    {
        path: '/inscriptionPhaseTrois',
        name: 'InscriptionPhaseTrois',
        component: InscriptionPhaseTrois
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