import RestoDb from '../../data/restodb-source';
import { createRestoItemTemplate } from '../templates/template-creator';
// import jumbutronResto from '../../component/jumbotron-resto';

const Home = {
  async render() {
    return `
      <jumbotron-resto></jumbotron-resto>
      <div class="restaurant-list" id="restaurant"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestoDb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Home;
