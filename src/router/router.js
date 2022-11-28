import {createWebHistory, createRouter} from "vue-router";
import MyTaskOverview from "@/components/view/panel/links/my-tasks/MyTaskOverview.vue";
import AccountOverview from "@/components/view/panel/links/account/AccountOverview.vue";

const routes = [
    {
        path: '/my-tasks',
        alias: ['/'],
        name: 'Overview',
        component: MyTaskOverview,
    },
    {
        path: '/account',
        name: 'Account',
        component: AccountOverview,
    },
];
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!localStorage.getItem("session") === undefined) {
            next({name: 'Login'})
        } else {
            next()
        }
    } else {
        next();
    }
})

export default router;