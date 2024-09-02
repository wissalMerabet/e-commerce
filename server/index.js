const _Port = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
app.use(cors());

////!

const name = process.env.NAME;
const password = process.env.PASSWORD;
const db = process.env.DB;

//!connect with db :

mongoose
  .connect(
    `mongodb+srv://${name}:${password}@cluster0.qv0nk7t.mongodb.net/${db}?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("connected successfully");
  })
  .catch((error) => {
    console.log("error with connecting with the DB ", error);
  });


//! models:

const User = require("./models/users");
const Product = require("./models/product");
const Cart = require("./models/cart");

//!EndPoint:

//********************************** login & signUp*/

app.post("/signUp", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) return res.json({ message: "User with that email already exists" });
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();
  res.json({ message: "User created successfully" });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.json({ message: "User not found with that email" });
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) return res.json({ message: "Incorrect password" });

  const token = jwt.sign({ id: user._id }, "wissal");
  res.json({ token, userID: user._id });
});

//********************************** product*/

app.get("/products", async (req, res) => {
  const product = await Product.find();
  //console.log("the products are", product);
  res.json(product);
});

//********************************** Cart*/

app.get("/Cart", async (req, res) => {
  const cart = await Cart.find();
  //console.log("the products are", Cart);
  res.json(cart);
});

app.post("/cart", async (req, res) => {
  const { userID, name, price, image } = req.body;

  console.log("Received data:", req.body);

  if (!userID || !name || !price || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if the product already exists in the cart for this user
    const existingCartItem = await Cart.findOne({ user_id: userID, name });

    if (existingCartItem) {
      return res.status(400).json({ message: "Product already in cart" });
    }

    // If not, add it to the cart
    const newCartItem = new Cart({
      user_id: userID,
      name,
      price,
      image,
      
    });

    await newCartItem.save();
    res.status(200).json({ message: "Product added to cart successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

//! listening 

app.listen(_Port, () => {
  console.log(`Server is listening on port ${_Port}`);
});
