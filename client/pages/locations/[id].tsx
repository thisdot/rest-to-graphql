import { FC } from "react";
import { GetServerSideProps } from "next";
import Layout from "@components/Layout";
import { Dotter, DotterProps } from "@components/Dotter";
import { getLocationById } from "@utils/LocationService";

type Props = {
	location: {
		id: number;
		displayName: string;
		dotters: DotterProps[];
	};
};

const LocationDetails: FC<Props> = ({ location }) => {
	return (
		<Layout>
			<h1 className="text-4xl mb-8">{location.displayName}</h1>
			<div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
				{location.dotters.map((dotter) => (
					<a href={`/dotter/${dotter.id}`} key={dotter.id} className="w-full">
						<Dotter dotter={dotter} hideLocation={true} />
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
