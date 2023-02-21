import { Router } from "express";
import { firstController } from "./app/controller";

const router: Router = Router()

router.get("/", firstController.home);

export { router };