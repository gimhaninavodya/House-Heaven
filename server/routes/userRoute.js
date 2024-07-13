import express from "express";
import { Fav, allFav, bookVisit, cancelBooking, createUser, getAllBookings } from "../controllers/userController.js";
import jwtCheck from "../config/auth0Config.js";
const router = express.Router();

router.post("/register", jwtCheck, createUser);
router.post("/bookVisit/:id", jwtCheck, bookVisit);
router.post("/allBookings", getAllBookings);
router.post("/removeBooking/:id", jwtCheck, cancelBooking);
router.post("/toFav/:rid", jwtCheck, Fav);
router.post("/allFav/", jwtCheck, allFav);
export { router as userRoute };
