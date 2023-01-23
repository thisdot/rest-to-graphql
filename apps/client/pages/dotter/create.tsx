import { FC, SyntheticEvent } from "react";
import Router from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import Layout from "@components/Layout";
import { createDotter } from "@utils/DotterService";

type Inputs = {
	firstName: string;
	lastName: string;
	title: string;
	profilePic: string;
	city: string;
	state: string;
	country: string;
};

const Draft: FC = () => {
	const { register, handleSubmit } = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		try {
			const dotter = await createDotter(data);
			await Router.push("/dotter/[id]", `/dotter/${dotter.id}`);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Layout>
			<div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1 className="text-4xl mb-4">Create New Dotter</h1>

					<label htmlFor="firstName">First Name</label>
					<input
						type="text"
						className="w-full p-2 m-2 mb-4 rounded border-gray-300 border-2"
						id="firstName"
						name="firstName"
						placeholder="John"
						required
						autoFocus
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
						required
						{...register("lastName", {
							required: true,
						})}
					/>

					<label htmlFor="title">Title</label>
					<input
						type="text"
						className="w-full p-2 m-2 mb-4 rounded border-gray-300 border-2"
						id="title"
						name="title"
						placeholder="Software Engineer"
						required
						{...register("title", {
							required: true,
						})}
					/>

					<label htmlFor="profilePic">Profile Picture</label>
					<input
						type="url"
						className="w-full p-2 m-2 mb-4 rounded border-gray-300 border-2"
						id="profilePic"
						name="profilePic"
						placeholder="https://"
						required
						{...register("profilePic", {
							required: true,
						})}
					/>

					<label htmlFor="city">City</label>
					<input
						type="text"
						className="w-full p-2 m-2 mb-4 rounded border-gray-300 border-2"
						id="city"
						name="city"
						placeholder="San Francisco"
						required
						{...register("city", {
							required: true,
						})}
					/>

					<label htmlFor="state">State</label>
					<input
						type="text"
						className="w-full p-2 m-2 mb-4 rounded border-gray-300 border-2"
						id="state"
						name="state"
						placeholder="CA"
						{...register("state")}
					/>

					<label htmlFor="country">Country</label>
					<input
						type="text"
						className="w-full p-2 m-2 mb-4 rounded border-gray-300 border-2"
						id="country"
						name="country"
						placeholder="USA"
						required
						{...register("country", {
							required: true,
						})}
					/>

					<input
						type="submit"
						value="Create Dotter"
						className="bg-blue-300 px-4 py-2 rounded"
					/>
				</form>
			</div>
		</Layout>
	);
};

export default Draft;
