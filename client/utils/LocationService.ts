export const getLocations = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}locations`);
	const locationsConnection = await res.json();
	return locationsConnection;
};

export const getLocationById = async (id) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}locations/${id}`);
	const location = await res.json();
	return location;
};
