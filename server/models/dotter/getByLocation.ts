import { Dotter, PrismaClient } from "@prisma/client";
import { ValidationError } from "@utils/errors";

const prisma = new PrismaClient();

export const getByLocation = async (
	locationId: number
): Promise<Dotter[] | []> => {
	if (isNaN(locationId)) {
		throw new ValidationError("Invalid identifier");
	}

	const dotters = await prisma.dotter.findMany({
		where: { locationId: Number(locationId) },
	});

	if (!dotters) {
		return [];
	}

	return dotters;
};
