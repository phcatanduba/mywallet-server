import { Router } from "express";
import getAssets from "./app/AlphaController/alphaController";
import signup from "./app/LoginController/signup";

const router: Router = Router()

router.post("/signup", signup);
router.get("/assets", getAssets);

export { router };