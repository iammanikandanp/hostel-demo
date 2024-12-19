import express from "express"
import { regsitration } from "../controllers/stdreg.js";

const router = express.Router()

router.post('/std/register', regsitration)
export default router;