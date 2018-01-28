import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

//Main pages
import MainPage from '../components/MainPage.vue';
import Documentation from '../components/Documentation.vue';

//Documentation pages
import GettingStarted from '../components/pages/GettingStarted.vue';

//Set up
var router = new VueRouter({
    routes: [
        {
            path: '/',
            component: MainPage
        },
        {
            path: '/docs',
            component: Documentation,
            children: [
                {path: '', component: GettingStarted}
            ]
        }
    ]
});

//Add auth route guard
import authGuard from './authGuard.js';
router.beforeEach(authGuard);

//Export
export default router;
