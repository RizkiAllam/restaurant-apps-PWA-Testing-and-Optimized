const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
  I.wait(3);
});

Scenario('liking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.resto-title a', 10);

  I.seeElement('.resto-title a');
  const firstResto = locate('.resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restocard', 10);
  I.seeElement('.restocard');
  const likedRestaurantTitle = await I.grabTextFrom('.resto-title');

  assert.strictEqual(firstRestoTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.resto-title a', 10);

  I.seeElement('.resto-title a');
  const firstResto = locate('.resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restocard', 10);
  I.seeElement('.restocard');
  const likedRestaurantTitle = await I.grabTextFrom('.resto-title');

  assert.strictEqual(firstRestoTitle, likedRestaurantTitle);

  I.click(firstResto);
  I.waitForElement('#likeButton', 10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.dontSeeElement('.restocard');
});
