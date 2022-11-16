import express from "express";
import employee from "./employee";
import customer from "./customer";
import reservation from "./resetvation";
import room from "./room";
import transaction from "./transaction";
const router = express.Router();

router.use("/employee", employee);
router.use("/customer", customer);
router.use("/reservation", reservation);
router.use("/room", room);
router.use("/transaction", transaction);
export default router;
