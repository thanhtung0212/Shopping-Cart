// import * as action from "../contants/ActionType";

var initialState = [
  {
    id: 1,
    name: "IPhone 11 Pro Max",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg",
    description: "Made in Apple",
    price: 500,
    inventory: 10,
    rating: 5,
  },
  {
    id: 2,
    name: "SamSung Galaxy S10 Lite",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/194251/samsung-galaxy-s10-lite-blue-thumb-400x400.jpg",
    description: "Made in Samsung",
    price: 700,
    inventory: 12,
    rating: 3,
  },
  {
    id: 3,
    name: "Iphone 11",
    image:
      "https://cdn.tgdd.vn/Products/Images/42/153856/iphone-11-red-400x400.jpg",
    description: "Made in OPPO",
    price: 300,
    inventory: 5,
    rating: 4,
  },
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
};
export default products;
