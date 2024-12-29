const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000; 

app.use(cors({ origin: "http://localhost:3001", credentials: true })); 
app.use(express.json()); 
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'src', 'app', 'uploads')));

const authorize = require("./src/Common/Authorize");

const { getCommentsByProduct , addComment } = require('./src/app/controller/CommentController');
const { getAllAccountsUser, getProfileUser,updateProfileUser,changePasswordUser, 
  getOrderUser,
  getOrderDetails } = require("./src/app/controller/AccountUserController");

const privateSiteRoutes = require("./src/routes/privateSiteRoutes");
const authRoutes = require("./src/routes/authenRoutes");
const brandRoutes = require("./src/routes/brandRoutes");
const productRoutes = require("./src/routes/productRoutes");
const cartRoutes = require("./src/routes/cartRoutes");
const checkoutRoutes = require("./src/routes/checkoutRoutes");


app.get('/comments/:productId', getCommentsByProduct);

app.post('/comments' , addComment);

app.get("/accountmanagementUser", authorize(["Người dùng"]), getAllAccountsUser);
app.get('/profileUser', authorize(["Người dùng"]), getProfileUser);
app.put('/updateprofileUser', authorize(["Người dùng"]), updateProfileUser);
app.put('/profile/changepasswordUser', authorize(["Người dùng"]), changePasswordUser); 

app.get('/order', authorize(["Người dùng"]), getOrderUser);
app.get('/order/:orderId', authorize(["Người dùng"]), getOrderDetails);

app.use("/privatesite", privateSiteRoutes);
app.use("/auth", authRoutes);
app.use("/brands", brandRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/checkout", checkoutRoutes);

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});