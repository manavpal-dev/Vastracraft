import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import checkoutRouter from "./routes/checkoutRoutes.js";
import orderRouter from "./routes/orderRoutes.js";
import uploadRouter from "./routes/uploadRouter.js";

const app = express();

// Connected MongoDB Database
connectDB();

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) =>
  res.send("server is working of vastracraft project")
);

// Api Routes
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/cart",cartRouter);
app.use("/api/checkout",checkoutRouter);
app.use("/api/orders",orderRouter);
app.use("/api/upload",uploadRouter)

// Port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>
  console.log(`Server is running on port http://localhost:${PORT}`)
);

export default app;
