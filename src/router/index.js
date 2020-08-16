import { createRouter, createWebHashHistory } from 'vue-router';
import Edit from '../views/Edit.vue';

const routes = [
    {
        path: '/',
        name: 'Edit',
        component: Edit,
    },
    {
        path: '/present',
        name: 'Present',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "present" */ '../views/Present.vue'),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
