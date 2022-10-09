import React from "react";
import { GetServerSideProps } from "next";
import Layout from "@components/Layout";
import { DotterProps } from "@components/Dotter";
import { getLocations } from "@utils/LocationService";

type Props = {
	locations: {
		id: number;
		city: string;
		state: string;
		country: string;
		dotters: DotterProps[];
	}[];
};

function getLocationName(location) {
	if (location.state) {
		return `${location.city}, ${location.state}, ${location.country}`;
	}

	return `${location.city}, ${location.country}`;
}

const LocationsIndex: React.FC<Props> = (props) => {
	return (
		<Layout>
			<h1 className="text-4xl mb-8">This Dot Locations</h1>
			<div className="grid gap-8 grid-cols-2 justify-items-center">
				{props.locations.map((location) => (
					<a
						href={`/locations/${location.id}`}
						key={location.id}
						className="w-full"
					>
						{getLocationName(location)} - {location.dotters.length}
					</a>
				))}
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const locations = await getLocations();
	return {
		props: { locations },
	};
};

export default LocationsIndex;
