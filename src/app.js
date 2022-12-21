import express from "express";
import morgan from "morgan";
import cors from "cors";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3001;
import authRouter from "./modules/auth/auth.route.js";
import userRouter from "./modules/user/user.route.js";
import householdRouter from "./modules/household/household.route.js";
import residentRouter from "./modules/resident/resident.route.js";
//const route = require("./routes");
// HTTP protocol
app.use(morgan("combined"));

// Set static folder

// app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(path.join(__dirname, 'public/uploads')))

app.use(
   express.urlencoded({
      extended: true,
   })
);
app.use(express.json());
app.use(cors());

// Router

// //Route init

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/households", householdRouter);
app.use("/api/residents", residentRouter);

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`);
});
