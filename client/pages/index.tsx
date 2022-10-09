import React from "react";
import { GetServerSideProps } from "next";
import Router from "next/router";
import { Dotter, DotterProps } from "@components/Dotter";
import Layout from "@components/Layout";
import { getDotters } from "@utils/DotterService";

type Props = {
	dotters: DotterProps[];
	pageInfo: {
		page: number;
		perPage: number;
		total: number;
		totalPages: number;
	};
};

const DottersIndex: React.FC<Props> = (props) => {
	return (
		<Layout>
			<h1 className="text-4xl">This Dotters</h1>
			<div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center py-8">
				{props.dotters.map((dotter) => (
					<a href={`/dotter/${dotter.id}`} key={dotter.id} className="w-full">
						<Dotter dotter={dotter} />
					</a>
				))}
			</div>
			<div className="flex justify-center gap-16">
				<button
					onClick={() =>
						Router.push({
							pathname: "/",
							query: {
								page: props.pageInfo.page - 1,
							},
						})
					}
					className="block border-black border-2 px-8 py-2 disabled:opacity-50"
					disabled={props.pageInfo.page === 1}
				>
					Prev
				</button>
				<button
					onClick={() =>
						Router.push({
							pathname: "/",
							query: {
								page: props.pageInfo.page + 1,
							},
						})
					}
					className="block border-black border-2 px-8 py-2 disabled:opacity-50"
					disabled={props.pageInfo.page === props.pageInfo.totalPages}
				>
					Next
				</button>
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const dottersConnection = await getDotters(Number(context.query.page ?? 1));
	return {
		props: {
			dotters: dottersConnection.data,
			pageInfo: dottersConnection.pageInfo,
		},
	};
};

export default DottersIndex;
