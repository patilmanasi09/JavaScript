let product = {
  name: "Laptop",
  price: 50000,
  stock: 150
};

for (let key in product) {
  console.log(key + ": " + product[key]);
}