import { Request, Response } from "express";
import * as testService from "../services/testService.js";

export async function createTest(req: Request, res: Response) {
	const data = req.body;

	const testInfo = await testService.create(data);

	res.status(200).send(testInfo);
}

export async function getBySubject(req: Request, res: Response) {
	const data = req.body;

	await testService.signup(data);

	res.sendStatus(201);
}

export async function getByTeacher(req: Request, res: Response) {
	const data = req.body;

	await testService.signup(data);

	res.sendStatus(201);
}