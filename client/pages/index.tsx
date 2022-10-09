import React from "react";
import { GetServerSideProps } from "next";
import { Dotter, DotterProps } from "@components/Dotter";
import Layout from "@components/Layout";

type Props = {
	dotters: DotterProps[];
};

const DottersIndex: React.FC<Props> = (props) => {
	return (
		<Layout>
			<h1 className="text-4xl mb-8">This Dotters</h1>
			<div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
				{props.dotters.map((dotter) => (
					<a href={`/dotter/${dotter.id}`} key={dotter.id} className="w-full">
						<Dotter dotter={dotter} />
					</a>
				))}
			</div>
			<div>TODO: add pagination here</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}dotters`);
	const dotters = await res.json();
	return {
		props: { dotters },
	};
};

export default DottersIndex;
