import { Dotter, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const update = async (
	id: number,
	data: {
		firstName: string;
		lastName: string;
		title: string;
		profilePic: string;
	}
): Promise<Dotter> => {
	// TODO: add validation error handling
	// TODO: probably needs a try...catch for the case of no record

	const { firstName, lastName, title, profilePic } = data;
	const dotter = await prisma.dotter.update({
		where: {
			id: Number(id),
		},
		data: {
			firstName,
			lastName,
			title,
			profilePic,
			updatedAt: new Date(),
		},
	});

	return dotter;
};
