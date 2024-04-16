const express = require("express");
const app = express();

const db = require("./data/db");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.static("node_modules"));

app.use("/products/:id", async (req, res) => {
    try {
        const [product,] = await db.execute("select * from products where id=?", [req.params.id])
        res.render("product-details", {
            product: product[0]
          });
        
    } catch (err) {
        console.log(err);
    }
});

app.use("/products", async (req, res) => {
    try {
        const [products,] = await db.execute("select * from products where isActive=1")
        res.render("products", {
            products: products
          });
        
    } catch (err) {
        console.log(err);
    }
});

app.use("/", async (req, res) => {
    try {
        const [products,] = await db.execute("select * from products where isHome=1 and isActive=1")
        res.render("index", {
            products: products
          });
        
    } catch (err) {
        console.log(err);
    }
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
