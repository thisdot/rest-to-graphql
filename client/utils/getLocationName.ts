export function getLocationName(location: {
	city: string;
	state: string;
	country: string;
}): string {
	if (!location) {
		return "Unknown Location";
	}

	if (location.state) {
		return `${location.city}, ${location.state}, ${location.country}`;
	}

	return `${location.city}, ${location.country}`;
}
