import Base from 'components/Base.vue';
import Home from 'components/Home.vue';
import Login from 'components/LoginPage.vue';
import Create from 'components/CreateAccount.vue';
//import Posts from 'components/Posts.vue';
//import Post from 'components/Posts.vue';
import NotFound from 'components/NotFound.vue';
import Navigation from 'components/Navigation.vue';
import Activate from 'components/Activate.vue';
import Releases from 'components/Releases.vue';
import TableTest from 'components/TableTest.vue';

const routes = [
  {
    path: '/',
    components: {
      default: Base,
      navigation: Navigation
    },
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/releases',
        name: 'releases',
        component: Releases
      },
      {
        path: '/tableTest',
        component: TableTest,
        name: 'tableTest'
      }
    ]
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  },
  {
    path: '/create',
    component: Create,
    name: 'create'
  },
  {
    path: '/activate/:code([a-zA-Z0-9]{64})',
    component: Activate,
    name: 'activate'
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
