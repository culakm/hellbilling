// nedynamicky importovany component
import UserAuth from '@/pages/auth/UserAuth.vue';

const routes = [
	{ path: '/', component: () => import('@/pages/IndexPage.vue') },
	{ path: '/test', component: () => import('@/pages/test/TestPage.vue'), meta: { requiresAuth: true } },

	{ name: 'trips', path: '/trips', component: () => import('@/pages/trips/TripList.vue'), meta: { requiresAuth: true } },
	{ name: 'trip-add', path: '/trip/add', component: () => import('@/pages/trips/TripCreate.vue'), meta: { requiresAuth: true } },
	{ name: 'trip-edit', path: '/trip/edit/:tripId', component: () => import('@/pages/trips/TripEdit.vue'), props: false, meta: { requiresAuth: true } },
	{ name: 'trip-view', path: '/trip/view/:tripId', component: () => import('@/pages/trips/TripView.vue'), props: false, meta: { requiresAuth: true } },
	{ name: 'trip-view-print', path: '/trip/view/print/:tripId', component: () => import('@/pages/trips/TripViewPrint.vue'), props: false, meta: { requiresAuth: true } },

	{ name: 'cards', path: '/cards', component: () => import('@/pages/cards/CardsShow.vue'), meta: { requiresAuth: true } },

	{ name: 'users', path: '/users', component: () => import('@/pages/users/UserList.vue'), meta: { requiresAuth: true } },
	{ name: 'user-add', path: '/user/add', component: () => import('@/pages/users/UserCreate.vue'), meta: { requiresAuth: true } },
	{ name: 'user-edit', path: '/user/edit/:userId', component: () => import('@/pages/users/UserEdit.vue'), props: false, meta: { requiresAuth: true } },

	{ name: 'auth', path: '/auth', component: UserAuth, meta: { requiresUnauth: true } },

	{ path: '/:notFound(.*)', component: () => import('@/pages/NotFound.vue') },
];

export default routes