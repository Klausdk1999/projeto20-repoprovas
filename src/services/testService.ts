import dotenv from "dotenv";
import * as testRepository from "../repositories/testRepository.js";

dotenv.config();

export async function create(data: testRepository.TypeNewTest) {
	const response = await testRepository.addNewTest(data);
	return response;
}

// export async function signup(data: testRepository.TypeNewUser) {
// 	const user = await lookForUser(data.email);

// 	if (user) 
//         throw { code: "Conflict", message: "Usuário já cadastrado!" };

// 	const ENCRYPTERHASHNUMBER = 10;

// 	const encryptedPassaword = bcrypt.hashSync(data.password, ENCRYPTERHASHNUMBER);

// 	await authRepository.addNewUser({
//         name: data.name,
// 		email: data.email,
// 		password: encryptedPassaword,
// 	});
// }

// async function lookForUser(email: string) {
// 	return await authRepository.findUserByEmail(email);
// }