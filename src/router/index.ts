import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'main page',
        component: () => import('../views/Main.vue'),
    },
    {
        path: '/game',
        name: 'game',
        component: () => import('../views/Game.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
