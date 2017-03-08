import App from 'app';
import {HomePage, SigninPage} from 'pages';

export default function routes({dispatch}) {
  return {
    path: "/", component: App,
    indexRoute: {
      component: HomePage
    },
    childRoutes: [
      {
        path: "/signin",
        component: SigninPage
      }
    ]
  };
}
