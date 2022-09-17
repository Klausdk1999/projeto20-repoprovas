import { Router } from "express";
import { validateSchema } from "../middlewares/validators/schemasValidator.js";
import testSchema from "../middlewares/schemas/testSchema.js";
import * as testController from "../controllers/testController.js";
import verifyToken from "../middlewares/validators/verifyToken.js";

const testRouter = Router();

//add autenticação

testRouter.post("/test", verifyToken, validateSchema(testSchema),testController.createTest);
testRouter.get("/tests/subject", verifyToken, testController.getBySubject);
testRouter.get("/tests/teacher", verifyToken, testController.getByTeacher);

export default testRouter;