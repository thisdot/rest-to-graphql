import { FC } from "react";
import { GetServerSideProps } from "next";
import Layout from "@components/Layout";
import { Dotter, DotterProps } from "@components/Dotter";
import { getLocationById } from "@utils/LocationService";

type Props = {
	location: {
		id: number;
		city: string;
		state: string;
		country: string;
		dotters: DotterProps[];
	};
};

const LocationDetails: FC<Props> = ({ location }) => {
	let locationName;
	if (location.state) {
		locationName = `${location.city}, ${location.state}, ${location.country}`;
	} else {
		locationName = `${location.city}, ${location.country}`;
	}

	return (
		<Layout>
			<h1 className="text-4xl mb-8">{locationName}</h1>
			<div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
				{location.dotters.map((dotter) => (
					<a href={`/dotter/${dotter.id}`} key={dotter.id} className="w-full">
						<Dotter dotter={dotter} />
					</a>
				))}
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const location = await getLocationById(context.params.id);
	return { props: { location } };
};

export default LocationDetails;
