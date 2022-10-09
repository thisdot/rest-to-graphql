import { FC, SyntheticEvent } from "react";
import Layout from "../../components/Layout";
import Router from "next/router";
import { createDotter } from "@utils/DotterService";

const Draft: FC = () => {
	const submitData = async (evt: SyntheticEvent) => {
		evt.preventDefault();
		try {
			const data = {
				firstName: evt.target.firstName.value,
				lastName: evt.target.lastName.value,
				title: evt.target.title.value,
				profilePic: evt.target.profilePic.value,
				city: evt.target.city.value,
				state: evt.target.state.value,
				country: evt.target.country.value,
			};
			const dotter = await createDotter(data);
			await Router.push("/dotter/[id]", `/dotter/${dotter.id}`);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<Layout>
			<div>
				<form onSubmit={submitData}>
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
					/>

					<label htmlFor="lastName">Last Name</label>
					<input
						type="text"
						className="w-full p-2 m-2 mb-4 rounded border-gray-300 border-2"
						id="lastName"
						name="lastName"
						placeholder="Doe"
						required
					/>

					<label htmlFor="title">Title</label>
					<input
						type="text"
						className="w-full p-2 m-2 mb-4 rounded border-gray-300 border-2"
						id="title"
						name="title"
						placeholder="Software Engineer"
						required
					/>

					<label htmlFor="profilePic">Profile Picture</label>
					<input
						type="url"
						className="w-full p-2 m-2 mb-4 rounded border-gray-300 border-2"
						id="profilePic"
						name="profilePic"
						placeholder="https://"
						required
					/>

					<label htmlFor="city">City</label>
					<input
						type="text"
						className="w-full p-2 m-2 mb-4 rounded border-gray-300 border-2"
						id="city"
						name="city"
						placeholder="San Francisco"
						required
					/>

					<label htmlFor="state">State</label>
					<input
						type="text"
						className="w-full p-2 m-2 mb-4 rounded border-gray-300 border-2"
						id="state"
						name="state"
						placeholder="CA"
					/>

					<label htmlFor="country">Country</label>
					<input
						type="text"
						className="w-full p-2 m-2 mb-4 rounded border-gray-300 border-2"
						id="country"
						name="country"
						placeholder="USA"
						required
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
