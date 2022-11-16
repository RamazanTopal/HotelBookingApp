import express from "express";
import { create, update, remove, getList } from "../controllers/room";

const router = express.Router();

router.route("/create").post(create);
router.route("/update").post(update);
router.route("/delete").post(remove);
router.route("/list").get(getList);

export default router;
