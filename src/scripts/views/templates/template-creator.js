import CONFIG from '../../globals/config';

const createRestoItemTemplate = (restaurant) => `
<section class="restocard" tabindex="0">
  <div class="restohead">
    <img class="resto-img lazyload" alt="${restaurant.name}" 
      data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" 
      crossorigin="anonymous">
    <div class="restohead-rating">
      <p>⭐️<span class="restohead-score">${restaurant.rating}</span></p>
    </div>
  </div>
  <div class="restocontent">
    <h3 class="resto-title"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h3>
    <p class="restolocation">
      <img src="./icons/location.svg" alt="location" " width="20px"/>${restaurant.city}
    </p>
    <p>${restaurant.description}</p>
  </div>
</section>
`;

const createRestoDetailTemplate = (resto) => `
<section class="resto-detail">
  <div class="resto-detail-header">
    <h1 class="resto-title" id="resto-title">${resto.name}</h1>
    <img class="resto-image lazyload" 
      src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" 
      alt="gambar ${resto.name}" 
      crossorigin="anonymous">
  </div>
  <div class="resto-body">
    <div class="resto-info">
      <h2 class="resto-info-title">Informasi</h2>
      <ul class="resto-info-list">
        <li class="detail-item">
          <h3 class="detail-title">Kota</h3>
          <p class="detail-content">${resto.city}</p>
        </li>
        <li class="detail-item">
          <h3 class="detail-title">Alamat</h3>
          <p class="detail-content">${resto.address}</p>
        </li>
        <li class="detail-item">
          <h3 class="detail-title">Rating</h3>
          <p class="detail-content">${resto.rating}</p>
        </li>
        <li class="detail-item">
          <h3 class="detail-title">Menu Makanan</h3>
          <p class="detail-content">${resto.menus.foods.map((food) => food.name).join(', ')}</p>
        </li>
        <li class="detail-item">
          <h3 class="detail-title">Menu Minuman</h3>
          <p class="detail-content">${resto.menus.drinks.map((drink) => drink.name).join(', ')}</p>
        </li>
        <li class="detail-item">
          <h3 class="detail-title">Deskripsi</h3>
          <p class="detail-content">${resto.description}</p>
        </li>
      </ul>
    </div>
  </div>
</section>


<section class="reviews">
  <h2>Review</h2>
  ${resto.customerReviews
    .map(
      ({ name, date, review }) => `
        <div class="review-item">
          <p class="nama">Nama: ${name}</p>
          <p class="tanggal">Tanggal: ${date}</p>
          <p class="review">Review: ${review}</p>
        </div>
      `,
    )
    .join('')}
</section>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="favorite">
    <span>Favorite</span><i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="favorite">
    <span>Favorite</span><i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
