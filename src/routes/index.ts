import express from "express";
import employee from "./employee";
import customer from "./customer";
const router = express.Router();

router.use("/employee", employee);
router.use("/customer", customer);
export default router;
