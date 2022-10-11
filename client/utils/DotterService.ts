export const getDotters = async (page = 1, perPage = 8) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}dotters?page=${page}&perPage=${perPage}&includeLocation=true`
	);
	const dottersConnection = await res.json();
	return dottersConnection;
};

export const createDotter = async (data) => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}dotters`, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	});
	const newDotter = await res.json();
	return newDotter;
};

export const getDotterById = async (id) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}dotters/${id}?includeLocation=true`
	);
	const dotter = await res.json();
	return dotter;
};

export const updateDotterById = async (id, data) => {
	await fetch(`${process.env.NEXT_PUBLIC_API_URL}dotters/${id}`, {
		method: "PUT",
		body: data,
	});
};

export const deleteDotterById = async (id) => {
	await fetch(`${process.env.NEXT_PUBLIC_API_URL}dotters/${id}`, {
		method: "DELETE",
	});
};
