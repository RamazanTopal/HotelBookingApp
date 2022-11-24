import express from "express";
import { create, update, remove, getList } from "../controllers/room";
import { verifyAuth } from "../middlewares/verifyAuth";

const router = express.Router();
router.route("/create").post(verifyAuth, create);
router.route("/update").post(verifyAuth, update);
router.route("/delete").post(verifyAuth, remove);
router.route("/list").get(verifyAuth, getList);

export default router;
