import express from "express";
import { create, update, remove, getList } from "../controllers/transaction";
import { verifyAuth } from "../middlewares/verifyAuth";
const router = express.Router();

router.route("/update").post(verifyAuth, update);
router.route("/create").post(verifyAuth, create);
router.route("/delete").delete(verifyAuth, remove);
router.route("/list").get(verifyAuth, getList);

export default router;
