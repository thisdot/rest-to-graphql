import React from "react";
import { GetServerSideProps } from "next";
import Layout from "@components/Layout";
import { DotterProps } from "@components/Dotter";
import { getLocations } from "@utils/LocationService";
import { getLocationName } from "@utils/getLocationName";

type Props = {
	locations: {
		id: number;
		city: string;
		state: string;
		country: string;
		dotters: DotterProps[];
	}[];
};

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
	const { data } = await getLocations();
	return {
		props: { locations: data },
	};
};

export default LocationsIndex;
