export const getLocations = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}locations?includeDotters=true`
	);
	const locationsConnection = await res.json();
	return locationsConnection;
};

export const getLocationById = async (id) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}locations/${id}?includeDotters=true`
	);
	const location = await res.json();
	return location;
};
