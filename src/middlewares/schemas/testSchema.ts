import joi from "joi";

const testSchema = joi.object({
	name:joi.string().required(),
	url: joi.string().uri().required(),
	categorie: joi.string().required().valid('P1','P2','P3','P2ch','Outras'),    
	subject:joi.string().required(),
	teacher:joi.string().required()
});

export default testSchema;