const _Port = process.env.PORT || 3000;
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
//*app.use(cors());
app.use(cors({
  origin: 'https://ecommerce-fullstack-web-site.netlify.app', // No trailing slash
}));



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
const Cart = require("./models/cart");
const Product = require("./models/product");
const Message = require('./models/message');

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

app.get('/products/:id', async (req, res) => {
  const { id } = req.params; // Get the ID directly from req.params

  try {
      const product = await Product.findById(id); // Pass id directly
      if (!product) {
          return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
  } catch (error) {
      console.error('Error fetching product by ID:', error);
      res.status(500).json({ message: 'Internal server error' });
  }
});



app.post("/Product", async (req, res) => {
  const { categorie, name, price, image } = req.body;

  console.log("Received data:", req.body);

  if (!categorie || !name || !price || !image) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if the product already exists in the cart for this user
    const existingCartItem = await Cart.findOne({name});

    if (existingCartItem) {
      return res.status(400).json({ message: "Product already in cart" });
    }

    // If not, add it to the cart
    const newProduct = new Product({
      categorie,
      name,
      price,
      image,
    });

    await newProduct.save();

    
    res.status(200).json({ message: "Product added successfully" });

    


  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

//********************************** Cart*/

app.get("/Cart", async (req, res) => {
  const { userID } = req.query; // Use req.query to get query parameters

  if (!userID) {
    return res.status(400).json({ message: "UserID is required" });
  }

  try {
    const cartItems = await Cart.find({ user_id: userID });
    //console.log(cartItems.length);
    
    if (cartItems.length === 0) {
      return res.status(404).json({ message: "No items found in cart" });
    }
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

app.post("/cart", async (req, res) => {
  const { user_id, name, price, image, size, quantity } = req.body;

  console.log("Received data:", req.body);

  if (!user_id || !name || !price || !image || !size || !quantity) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if the product already exists in the cart for this user
    const existingCartItem = await Cart.findOne({ user_id, name });

    if (existingCartItem) {
      return res.status(400).json({ message: "Product already in cart" });
    }

    // If not, add it to the cart
    const newCartItem = new Cart({
      user_id,
      name,
      price,
      image,
      size,
      quantity,
    });

    await newCartItem.save();

    res.status(200).json({ message: "Product added to cart successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

//**********************************************message */

app.post('/sendMsg', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const newMsg = new Message({ name, email, message });

  try {
    await newMsg.save();
    res.status(201).json({ reply: "Message created successfully" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Failed to save message" });
  }
});




//! listening

app.listen(_Port, () => {
  console.log(`Server is listening on port ${_Port}`);
});
