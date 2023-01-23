import { Location, PrismaClient } from "@prisma/client";
import { ValidationError } from "@utils/errors";

const prisma = new PrismaClient();

export const get = async (
	id: number,
	{ includeDotters = false }: { includeDotters?: boolean } = {}
): Promise<Location | null> => {
	if (isNaN(id)) {
		throw new ValidationError("Invalid identifier");
	}

	const location = await prisma.location.findUnique({
		where: { id: Number(id) },
		include: {
			dotters: includeDotters,
		},
	});

	if (!location) {
		return null;
	}

	return location;
};
