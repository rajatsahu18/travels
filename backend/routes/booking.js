import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
import {
  createBooking,
  getAllBooking,
  getBooking,
} from "../controllers/bookingController.js";

const router = express.Router();
// verifyUser,
router.post("/",  createBooking);
// verifyUser,
router.get("/:id",  getBooking);
// verifyAdmin,
router.get("/",verifyAdmin,  getAllBooking);

export default router;
