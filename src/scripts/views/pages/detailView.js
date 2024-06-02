import UrlParser from '../../routes/url-parser';
import RestoDb from '../../data/restodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <section class="resto">
      <div id="resto"></div>
      <div id="likeButtonContainer"></div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDb.getDetailRestaurant(url.id);
    const restoContainer = document.querySelector('#resto');

    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: resto.id,
        pictureId: resto.pictureId,
        name: resto.name,
        address: resto.address,
        city: resto.city,
        rating: resto.rating,
        description: resto.description,
      },
    });
  },
};

export default Detail;
