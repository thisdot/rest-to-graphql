import { Location, PrismaClient } from "@prisma/client";
import { ValidationError } from "@utils/errors";

const prisma = new PrismaClient();

export const getAll = async ({
	page,
	perPage,
	includeDotters = false,
}: {
	page: number;
	perPage: number;
	includeDotters?: boolean;
}): Promise<{
	locations: Location[];
	count: number;
}> => {
	if (isNaN(page)) {
		throw new ValidationError(
			`Invalid value for page. Expected number, got ${page}`
		);
	}

	if (isNaN(perPage)) {
		throw new ValidationError(
			`Invalid value for perPage. Expected number, got ${perPage}`
		);
	}

	const [locations, count] = await prisma.$transaction([
		prisma.location.findMany({
			include: {
				dotters: includeDotters,
			},
		}),
		prisma.location.count(),
	]);

	return { locations, count };
};
