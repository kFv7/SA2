import express from "express";
import models from "./models.routes";
import company from "./company.routes";

const router = express.Router();

router.use('/models', models);
router.use('/event', event);
router.use('/company', company);

export default router;