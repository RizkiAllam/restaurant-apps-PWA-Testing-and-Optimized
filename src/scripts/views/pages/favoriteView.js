import FavoriteRestaurant from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <Section>
      <div class="homeresto-list-tile">
        <h1>Favorite restaurant</h1>
      </div>
      <div  class="restaurant-list" 
              id="restaurant">
      </div>
    </section>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurant.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default Favorite;
