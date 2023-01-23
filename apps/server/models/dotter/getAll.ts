import { Dotter, PrismaClient } from "@prisma/client";
import { ValidationError } from "@utils/errors";

const prisma = new PrismaClient();

export const getAll = async ({
	page,
	perPage,
	includeLocation = false,
}: {
	page: number;
	perPage: number;
	includeLocation: boolean;
}): Promise<{
	dotters: Dotter[];
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

	const [dotters, count] = await prisma.$transaction([
		prisma.dotter.findMany({
			take: perPage,
			skip: (page - 1) * perPage,
			include: {
				location: includeLocation,
			},
		}),
		prisma.dotter.count(),
	]);

	return { dotters, count };
};
