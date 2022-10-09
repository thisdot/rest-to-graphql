import { getLocationName } from "@utils/getLocationName";
import { FC } from "react";

export type DotterProps = {
	id: number;
	firstName: string;
	lastName: string;
	title: string;
	profilePic: string;
	location?: {
		id: number;
		city: string;
		state: string;
		country: string;
	};
};

export const Dotter: FC<{ dotter: DotterProps; hideLocation?: boolean }> = ({
	dotter,
	hideLocation = false,
}) => {
	const { firstName, lastName, title, profilePic, location } = dotter;
	return (
		<div className="w-full rounded overflow-hidden shadow-lg bg-slate-100">
			<img
				className="w-auto h-60 lg:h-72 m-auto"
				src={`${profilePic}?w=400&h=400`}
				alt={`${firstName} ${lastName} profile picture`}
			/>
			<div className="bg-white px-6 py-4">
				<div className="font-bold text-xl mb-2">
					{firstName} {lastName}
				</div>
				<p className="text-gray-700 text-lg">{title}</p>
				{!hideLocation && (
					<p className="text-gray-700 text-sm">{getLocationName(location)}</p>
				)}
			</div>
		</div>
	);
};
