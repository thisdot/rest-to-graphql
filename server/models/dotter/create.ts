import { Dotter, PrismaClient } from "@prisma/client";
import { generateConnectOrCreate } from "@utils/locationHelper";

const prisma = new PrismaClient();

export const create = async ({
	firstName,
	lastName,
	title,
	profilePic,
	city,
	state = null,
	country,
}: {
	firstName: string;
	lastName: string;
	title: string;
	profilePic: string;
	city: string;
	state: string | null;
	country: string;
}): Promise<Dotter> => {
	// TODO: add validations for passed arguments

	const newDotter = await prisma.dotter.create({
		data: {
			firstName,
			lastName,
			title,
			profilePic,
			location: {
				connectOrCreate: generateConnectOrCreate(city, state, country),
			},
		},
	});

	return newDotter;
};
