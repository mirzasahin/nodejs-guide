const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'))
app.use(express.static('node_modules'))

const data = [
  { id: 1, name: "Iphone 14", price: 30000, isActive: true, imageUrl: "1.jpeg" },
  { id: 2, name: "Iphone 15", price: 40000, isActive: true, imageUrl: "2.jpeg"},
  { id: 3, name: "Iphone 16", price: 50000, isActive: true, imageUrl: "3.jpeg" },
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
