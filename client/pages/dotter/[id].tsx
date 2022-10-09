import { FC } from "react";
import { GetServerSideProps } from "next";
import Layout from "@components/Layout";
import Router from "next/router";
import { Dotter, DotterProps } from "@components/Dotter";
import {
	getDotterById,
	updateDotterById,
	deleteDotterById,
} from "@utils/DotterService";

async function update(id: number, data): Promise<void> {
	await updateDotterById(id, data);
	await Router.push("/");
}

async function destroy(id: number): Promise<void> {
	await deleteDotterById(id);
	await Router.push("/");
}

const EditDotter: FC<{ dotter: DotterProps }> = ({ dotter }) => {
	return (
		<Layout>
			<Dotter dotter={dotter} />
			<button onClick={() => update(dotter.id, {})}>Update</button>
			<button onClick={() => destroy(dotter.id)}>Delete</button>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const dotter = await getDotterById(context.params.id);
	return { props: { dotter } };
};

export default EditDotter;
