import prisma from "../databases/database";
import { Test } from "@prisma/client";

export type TypeTest = Omit<Test, "id">;

export async function insertTest(data:TypeTest) {
    await prisma.test.create({data})
}

export async function findCategoryByName(name: string) {
	const category = await prisma.category.findFirst({where: {name}});

	if (!category)
		throw { code: "NotFound", message: "Categoria não encontrada!" };

	return category;
}


export async function findDisciplineByName(name:string) {
	const discipline = await prisma.discipline.findFirst({where: {name}})

	if (!discipline)
		throw { code: "NotFound", message: "Disciplina não encontrada!" };

	return discipline;
}
  
export async function getTestsByDiscipline() {
  
	const testsByDiscipline = await prisma.term.findMany({
		select:{
		  number: true,
		  discipline:{
			select:{
			  name: true,
			  id: true,
			  teachersDisciplines:{
				include:{
				  teacher:{
					select:{
					  name:true,
					  id:true
					},
				  },
				  test:{
					include:{
					  category:{
						select:{
						  name:true,
						  id:true
						},
					  },
					},
				  },
				},
			  },
			},
		  },
		},
	});
	
	return testsByDiscipline;
}

export async function findTeachersDisciplinesByNames(discipline: string, teacher: string) {
	return await prisma.teachersDisciplines.findFirst({
		where: { discipline: { name: discipline }, teacher: { name: teacher } },
	});
}

export async function getTestsByTeachers() {
	const result = await prisma.teacher.findMany({
	  select: {
		id: true,
		name: true,
		teachersDisciplines: {
		  include: {
			discipline: true,
			test: {
			  include: {
				category: true,
			  },
			},
		  },
		},
	  },
	});
  
	return result;
}

export async function findTeacherByName(name:string) {
    return await prisma.teacher.findFirst({where: {name}})
}

export async function getTerms() {
    return await prisma.term.findMany({
        include:{
            discipline:{
                include:{
                    teachersDisciplines:{
                        include:{
                            teacher:true,
                            test:true
                        }
                    }
                }
            }
        }
    });
}