const express = require("express");
const app = express();

app.set("view engine", "ejs");

const data = [
  { id: 1, name: "Iphone 14", price: 30000, isActive: true },
  { id: 2, name: "Iphone 15", price: 40000, isActive: false },
  { id: 3, name: "Iphone 16", price: 50000, isActive: true },
];

app.use("/products/:id", (req, res) => {
  const product = data.find((product) => product.id == req.params.id);
  res.render("product-details", product);
});

app.use("/products", (req, res) => {
  res.render("products", {
    products: data,
  });
});

app.use("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
