import Home from '../views/pages/homeView';
import Favorite from '../views/pages/favoriteView';
import Detail from '../views/pages/detailView';

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
