import { FC } from "react";
import { GetServerSideProps } from "next";
import Router from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import Layout from "@components/Layout";
import { Dotter, DotterProps } from "@components/Dotter";
import {
	getDotterById,
	updateDotterById,
	deleteDotterById,
} from "@utils/DotterService";

type Inputs = {
	firstName: string;
	lastName: string;
	title: string;
	profilePic: string;
};

const EditDotter: FC<{ dotter: DotterProps }> = ({ dotter }) => {
	const { register, handleSubmit } = useForm<Inputs>();

	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			await updateDotterById(dotter.id, data);
			await Router.reload();
		} catch (error) {
			console.error(error);
		}
	};

	const destroy = async () => {
		await deleteDotterById(dotter.id);
		await Router.push("/");
	};

	return (
		<Layout>
			<div className="grid grid-cols-2 gap-x-8 justify-center">
				<div className="w-full max-w-sm mx-auto">
					<Dotter dotter={dotter} />
				</div>
				<div className="w-full max-w-xl mr-auto">
					<form onSubmit={handleSubmit(onSubmit)}>
						<h1 className="text-4xl mb-4">Update Dotter</h1>

						<label htmlFor="firstName">First Name</label>
						<input
							type="text"
							className="w-full p-2 m-2 mb-4 rounded border-gray-300 border-2"
							id="firstName"
							name="firstName"
							placeholder="John"
							defaultValue={dotter.firstName}
							autoFocus
							required
							{...register("firstName", {
								required: true,
							})}
						/>

						<label htmlFor="lastName">Last Name</label>
						<input
							type="text"
							className="w-full p-2 m-2 mb-4 rounded border-gray-300 border-2"
							id="lastName"
							name="lastName"
							placeholder="Doe"
							defaultValue={dotter.lastName}
							required
							{...register("lastName")}
						/>

						<label htmlFor="title">Title</label>
						<input
							type="text"
							className="w-full p-2 m-2 mb-4 rounded border-gray-300 border-2"
							id="title"
							name="title"
							placeholder="Software Engineer"
							defaultValue={dotter.title}
							required
							{...register("title")}
						/>

						<label htmlFor="profilePic">Profile Picture</label>
						<input
							type="url"
							className="w-full p-2 m-2 mb-4 rounded border-gray-300 border-2"
							id="profilePic"
							name="profilePic"
							placeholder="https://"
							defaultValue={dotter.profilePic}
							required
							{...register("profilePic")}
						/>
						<input
							type="submit"
							value="Update"
							className="bg-blue-300 px-4 py-2 rounded mr-4"
						/>
						<button
							onClick={() => destroy()}
							type="button"
							className="bg-red-400 px-4 py-2 rounded"
						>
							Delete
						</button>
					</form>
				</div>
			</div>
		</Layout>
	);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
	const dotter = await getDotterById(context.params.id);
	return { props: { dotter } };
};

export default EditDotter;
