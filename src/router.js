import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Home.vue'
import Step4 from './components/Step4.vue'
import Step5 from './components/Step5.vue'
import Step6 from './components/Step6.vue'
import Step7 from './components/Step7.vue'
import Step8 from './components/Step8.vue'
import Step9 from './components/Step9.vue'
import Step10 from './components/Step10.vue'
import Step11 from './components/Step11.vue'
import Step12 from './components/Step12.vue'
import Step13 from './components/Step13.vue'
import Step14 from './components/Step14.vue'

const routes =[
    {   path: '/', name: 'Home', component: Home },
    {   path: '/step4', name: 'Step4', component: Step4},
    {   path: '/step5', name: 'Step5', component: Step5},
    {   path: '/step6', name: 'Step6', component: Step6},
    {   path: '/step7', name: 'Step7', component: Step7},
    {   path: '/step8', name: 'Step8', component: Step8},
    {   path: '/step9', name: 'Step9', component: Step9},
    {   path: '/step10', name: 'Step10', component: Step10},
    {   path: '/step11', name: 'Step11', component: Step11},
    {   path: '/step12', name: 'Step12', component: Step12},
    {   path: '/step13', name: 'Step13', component: Step13},
    {   path: '/step14', name: 'Step14', component: Step14},
    ]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
}) 

export default router