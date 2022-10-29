import { Dotter, PrismaClient } from "@prisma/client";
import { ValidationError } from "@utils/errors";

const prisma = new PrismaClient();

export const countByLocation = async (locationId: number): Promise<number> => {
	if (isNaN(locationId)) {
		throw new ValidationError("Invalid identifier");
	}

	const dottersCount = await prisma.dotter.count({
		where: { locationId: Number(locationId) },
	});

	return dottersCount;
};
