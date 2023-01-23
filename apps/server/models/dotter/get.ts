import { Dotter, PrismaClient } from "@prisma/client";
import { ValidationError } from "@utils/errors";

const prisma = new PrismaClient();

export const get = async (
	id: number,
	{ includeLocation = false }: { includeLocation?: boolean } = {}
): Promise<Dotter | null> => {
	if (isNaN(id)) {
		throw new ValidationError("Invalid identifier");
	}

	const dotter = await prisma.dotter.findUnique({
		where: { id: Number(id) },
		include: {
			location: includeLocation,
		},
	});

	if (!dotter) {
		return null;
	}

	return dotter;
};
