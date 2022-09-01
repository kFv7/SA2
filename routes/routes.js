import express from "express";
import user from "./user.routes";
import event from "./event.routes";
import company from "./company.routes";

const router = express.Router();

router.use('/user', user);
router.use('/event', event);
router.use('/company', company);

export default router;