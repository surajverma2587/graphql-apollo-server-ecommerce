const productsData = [
  {
    name: "Plain T-Shirt",
    price: 14.99,
    stock: 14,
    category: {
      id: "a11e1d9e-e09d-11eb-ba80-0242ac130004",
      name: "Shirts",
    },
    tags: [
      {
        id: "d47a81b4-e09d-11eb-ba80-0242ac130004",
        name: "white",
      },
      {
        id: "d47a8326-e09d-11eb-ba80-0242ac130004",
        name: "pop culture",
      },
    ],
  },
  {
    name: "Running Sneakers",
    price: 90.0,
    stock: 25,
    category: {
      id: "a11e2258-e09d-11eb-ba80-0242ac130004",
      name: "Shoes",
    },
    tags: [
      {
        id: "d47a7dae-e09d-11eb-ba80-0242ac130004",
        name: "blue",
      },
    ],
  },
  {
    name: "Branded Baseball Hat",
    price: 22.99,
    stock: 12,
    category: {
      id: "a11e21a4-e09d-11eb-ba80-0242ac130004",
      name: "Hats",
    },
    tags: [
      {
        id: "d47a8024-e09d-11eb-ba80-0242ac130004",
        name: "red",
      },
      {
        id: "d47a80f6-e09d-11eb-ba80-0242ac130004",
        name: "green",
      },
    ],
  },
  {
    name: "Top 40 Music Compilation Vinyl Record",
    price: 12.99,
    stock: 50,
    category: {
      id: "a11e20dc-e09d-11eb-ba80-0242ac130004",
      name: "Music",
    },
    tags: [
      {
        id: "d47a7cbe-e09d-11eb-ba80-0242ac130004",
        name: "pop music",
      },
      {
        id: "d47a8326-e09d-11eb-ba80-0242ac130004",
        name: "pop culture",
      },
    ],
  },
  {
    name: "Cargo Shorts",
    price: 29.99,
    stock: 22,
    category: {
      id: "a11e1ff6-e09d-11eb-ba80-0242ac130004",
      name: "Shorts",
    },
    tags: [],
  },
];

const products = () => {
  return productsData;
};

module.exports = products;
