import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "videomp4",
        component: () => import("../views/videomp4.vue")
    },
    {
        path: "/videoflv",
        name: "videoflv",
        component: () => import("../views/videoflv.vue")
    },
    {
        path: "/videoie",
        name: "videoie",
        component: () => import("@/views/videoie.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
