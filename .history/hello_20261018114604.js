/** @format */

caritems = {
  tshirt: 2,
  laptop: 4,
  iphone: 2,
};

let itemId = "iphone";

caritems[itemId] = (caritems[itemId] || 0) + 1;

console.log(caritems);
