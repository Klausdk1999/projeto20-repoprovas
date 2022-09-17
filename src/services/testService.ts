import * as testRepository from "../repositories/testRepository";

export async function findByNameCategory(name: string) {
	const category = await testRepository.findCategoryByName(name);

	if (!category)
		throw { code: "NotFound", message: "Categoria não encontrada!" };

	return category;
}

export async function newTest(data: {
	name: string;
	pdfUrl: string;
	category: string;
	discipline: string;
	teacher: string;
}) {
	const { id: categoryId } = await findByNameCategory(data.category);

	await findTeacherByName(data.teacher);

	await findDisciplineByName(data.discipline);

	const { id: teacherDisciplineId } =
		await findTeachersDisciplinesByNames(data.discipline, data.teacher);

	await testRepository.insertTest({
		name: data.name,
		pdfUrl: data.pdfUrl,
		categoryId,
		teacherDisciplineId,
	});
}

export async function findTeacherByName(name:string) {
    const teacherName = await testRepository.findTeacherByName(name);

    if(!teacherName)
        throw { code: "NotFound", message: "Esse professor não está cadastrado."}

    return teacherName;
}

export async function findDisciplineByName(name:string) {
    const discipline = await testRepository.findDisciplineByName(name);

    if(!discipline)
        throw { code: "NotFound", message: "Essa disciplina não está cadastrada."}

    return discipline;
}

export async function findTestsByDiscipline() {
	const data = await testRepository.getTestsByDiscipline();
  
	return data;
}


export async function findTestsByTeacher() {
	const data = await testRepository.getTestsByTeachers();
  
	return data;
}

export async function findTeachersDisciplinesByNames(discipline: string, teacher: string) {
	const teacherDiscipline = await testRepository.findTeachersDisciplinesByNames(discipline,teacher);

	if (!teacherDiscipline)
		throw {	code: "NotFound", message: "Professor não encontrado para essa disciplina"};

	return teacherDiscipline;
}