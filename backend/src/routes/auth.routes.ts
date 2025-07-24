import { Router } from "express";
import { register } from "../controllers/auth.controller";
import { verifyotp } from "../controllers/otp.controller";
const router = Router();

router.post("/register", register);
router.post("/verify-otp", verifyotp);

export default router;