import { Router } from "express";
import signup from "./app/LoginController/signup";

const router: Router = Router()

router.post("/signup", signup);

export { router };