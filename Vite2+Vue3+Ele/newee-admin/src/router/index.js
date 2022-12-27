import AddGood from "@/views/AddGood.vue";
import Index from "@/views/Index.vue";
import Login from "@/views/Login.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: "/",
			name: "index",
			component: Index,
		},
		{
			path: "/add",
			name: "add",
			component: AddGood,
		},
		{
			path: "/login",
			name: "login",
			component: Login,
		},
	],
});

export default router;
