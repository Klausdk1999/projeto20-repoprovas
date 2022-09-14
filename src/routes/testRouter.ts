import { Router } from "express";
import { validateSchema } from "../middlewares/validators/schemasValidator.js";
import testSchema from "../middlewares/schemas/testSchema.js";
import { signin, signup } from "../controllers/authController.js";

const testRouter = Router();

//add autenticação

testRouter.post("/test", validateSchema(testSchema),signin);
testRouter.get("/tests/subject", signup);
testRouter.get("/tests/teacher", signup);

export default testRouter;