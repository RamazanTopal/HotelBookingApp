import express from "express";
import { create, update, remove } from "../controllers/room";

const router = express.Router();

router.route("/create").post(create);
router.route("/update").post(update);
router.route("/delete").post(remove);

export default router;
