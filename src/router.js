import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import Step4 from './components/Step4.vue'
import Step5 from './components/Step5.vue'
import Step6 from './components/Step6.vue'

const routes =[
    {   path: '/', name: 'Home', component: Home },
    {   path: '/step4', name: 'Step4', component: Step4},
    {   path: '/step5', name: 'Step5', component: Step5},
    {   path: '/step6', name: 'Step6', component: Step6}
    ]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
}) 

export default router