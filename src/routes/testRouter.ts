import { Router } from "express";
import { validateSchema } from "../middlewares/validators/schemasValidator.js";
import testSchema from "../middlewares/schemas/testSchema.js";
import * as testController from "../controllers/testController.js";

const testRouter = Router();

//add autenticação

testRouter.post("/test", validateSchema(testSchema),testController.createTest);
testRouter.get("/tests/subject", testController.getBySubject);
testRouter.get("/tests/teacher", testController.getByTeacher);

export default testRouter;