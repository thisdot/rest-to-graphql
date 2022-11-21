import { Prisma } from "@prisma/client";

export const generateConnectOrCreate = (
	city: string,
	state: string | undefined,
	country: string
): Prisma.LocationCreateOrConnectWithoutDottersInput => {
	if (!state) {
		return {
			where: {
				city_country: {
					city,
					country,
				},
			},
			create: {
				city,
				state: null,
				country,
			},
		};
	}

	return {
		where: {
			city_state_country: {
				city,
				state,
				country,
			},
		},
		create: {
			city,
			state,
			country,
		},
	};
};
