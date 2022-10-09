import { FC } from "react";
import { GetServerSideProps } from "next";
import Layout from "@components/Layout";
import Router from "next/router";
import { Dotter, DotterProps } from "@components/Dotter";

async function update(id: number): Promise<void> {
	await fetch(`http://localhost:3001/publish/${id}`, {
		method: "PUT",
	});
	await Router.push("/");
}

async function destroy(id: number): Promise<void> {
	await fetch(`http://localhost:3001/Dotter/${id}`, {
		method: "DELETE",
	});
	await Router.push("/");
}

const EditDotter: FC<{ dotter: DotterProps }> = ({ dotter }) => {
	return (
		<Layout>
			<Dotter dotter={dotter} />
			<button onClick={() => update(dotter.id)}>Update</button>
			<button onClick={() => destroy(dotter.id)}>Delete</button>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_URL}dotters/${context.params.id}`
	);
	const data = await res.json();
	return { props: { dotter: data } };
};

export default EditDotter;
