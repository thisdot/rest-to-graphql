import React from "react";
import { GetServerSideProps } from "next";
import Layout from "@components/Layout";
import { getLocations } from "@utils/LocationService";

type Props = {
	locations: {
		id: number;
		displayName: string;
		dotterCount: number;
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
						{location.displayName} - {location.dotterCount}
					</a>
				))}
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const data = await getLocations();
	return {
		props: { locations: data.nodes },
	};
};

export default LocationsIndex;
