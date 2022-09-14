import prisma from "../databases/database.js";
import { Test } from "@prisma/client";

export type TypeNewTest = Omit<Test, "id">;

// export async function findUserByEmail(email: string): Promise<users> {
// 	return await prisma.users.findUnique({ where: { email } });
// }

export async function addNewTest (newTest: TypeNewTest) {
	await prisma.test.create({ data: newTest });
}