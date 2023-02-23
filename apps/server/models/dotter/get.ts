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

export const getDotter = async ({
	id,
	name,
}: {
	id?: number;
	name?: string;
}): Promise<[Dotter & { location: Location }] | null> => {
	// if id is provided and not a number
	if (id && isNaN(id)) {
		throw new ValidationError("Invalid identifier");
	}

	// gotta provid an ID or name to filter
	if (!id && name) {
		throw new ValidationError("Invalid identifier");
	}

	const where = name
		? {
				OR: [
					{ firstName: { contains: name } },
					{ lastName: { contains: name } },
				],
		  }
		: { id: Number(id) };

	const dotters = await prisma.dotter.findMany({
		where: where,
		include: {
			location: true,
		},
	});

	// if no results found
	if (dotters.length === 0) {
		return null;
	}

	return dotters;
};
