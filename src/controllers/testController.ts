import { Request, Response } from "express";
import * as testService from "../services/testService.js";

export async function createTest(req: Request, res: Response) {
	const data = req.body;

	await testService.newTest(data);

	res.sendStatus(201);
}

export async function getBySubject(req: Request, res: Response) {
	
	const testsBySubject = await testService.findTestsByDiscipline();
   
	res.status(200).send(testsBySubject);
}

export async function getByTeacher(req: Request, res: Response) {
	
	const testsByTeacher =  await testService.findTestsByTeacher();
	
	res.status(200).send(testsByTeacher);
}