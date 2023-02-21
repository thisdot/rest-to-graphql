const defaultLocationData = [
	{
		id: 1,
		city: "Atlanta",
		state: "GA",
		country: "USA",
		createdAt: "2023-02-20T20:48:58.104Z",
		updatedAt: "2023-02-20T20:48:58.104Z",
	},
	{
		id: 2,
		city: "Cupertino",
		state: "CA",
		country: "USA",
		createdAt: "2023-02-20T20:48:58.108Z",
		updatedAt: "2023-02-20T20:48:58.108Z",
	},
	{
		id: 3,
		city: "Durham",
		state: "NC",
		country: "USA",
		createdAt: "2023-02-20T20:48:58.109Z",
		updatedAt: "2023-02-20T20:48:58.109Z",
	},
	{
		id: 4,
		city: "Truckee",
		state: "CA",
		country: "USA",
		createdAt: "2023-02-20T20:48:58.110Z",
		updatedAt: "2023-02-20T20:48:58.110Z",
	},
	{
		id: 5,
		city: "Swansea",
		state: null,
		country: "UK",
		createdAt: "2023-02-20T20:48:58.111Z",
		updatedAt: "2023-02-20T20:48:58.111Z",
	},
	{
		id: 6,
		city: "Phoenix",
		state: "AZ",
		country: "USA",
		createdAt: "2023-02-20T20:48:58.112Z",
		updatedAt: "2023-02-20T20:48:58.112Z",
	},
	{
		id: 7,
		city: "New Orleans",
		state: "LA",
		country: "USA",
		createdAt: "2023-02-20T20:48:58.114Z",
		updatedAt: "2023-02-20T20:48:58.114Z",
	},
	{
		id: 8,
		city: "Denton",
		state: "TX",
		country: "USA",
		createdAt: "2023-02-20T20:48:58.115Z",
		updatedAt: "2023-02-20T20:48:58.115Z",
	},
	{
		id: 9,
		city: "Sudbury",
		state: "Ontario",
		country: "Canada",
		createdAt: "2023-02-20T20:48:58.117Z",
		updatedAt: "2023-02-20T20:48:58.117Z",
	},
	{
		id: 10,
		city: "Nairobi",
		state: null,
		country: "Kenya",
		createdAt: "2023-02-20T20:48:58.118Z",
		updatedAt: "2023-02-20T20:48:58.118Z",
	},
	{
		id: 11,
		city: "Los Angeles",
		state: "CA",
		country: "USA",
		createdAt: "2023-02-20T20:48:58.119Z",
		updatedAt: "2023-02-20T20:48:58.119Z",
	},
	{
		id: 12,
		city: "Montevideo",
		state: null,
		country: "Uruguay",
		createdAt: "2023-02-20T20:48:58.121Z",
		updatedAt: "2023-02-20T20:48:58.121Z",
	},
	{
		id: 13,
		city: "Valencia",
		state: null,
		country: "Venezuela",
		createdAt: "2023-02-20T20:48:58.122Z",
		updatedAt: "2023-02-20T20:48:58.122Z",
	},
];
const withDotterLocationData = [
	{
		id: 1,
		city: "Atlanta",
		state: "GA",
		country: "USA",
		createdAt: "2023-02-20T20:48:58.104Z",
		updatedAt: "2023-02-20T20:48:58.104Z",
		dotters: [
			{
				id: 1,
				firstName: "Tracy",
				lastName: "Lee",
				title: "CEO, Co-Founder",
				profilePic:
					"https://images.ctfassets.net/zojzzdop0fzx/4qGqE6H1ZXusAtPK3CFX0w/a38221fa86434f1be2d82fca78272ed8/tracy_lee.jpg",
				locationId: 1,
				createdAt: "2023-02-20T21:23:48.095Z",
				updatedAt: "2023-02-20T21:23:48.095Z",
			},
			{
				id: 2,
				firstName: "Elliott",
				lastName: "Fouts",
				title: "COO & VP of Engineering",
				profilePic:
					"https://images.ctfassets.net/zojzzdop0fzx/76cEyJIw1xAHlpIMNgPoIJ/d41648294c6fbd27f0d71c8e8fbb3752/image.png",
				locationId: 1,
				createdAt: "2023-02-20T21:23:48.115Z",
				updatedAt: "2023-02-20T21:23:48.115Z",
			},
		],
	},
	{
		id: 2,
		city: "Cupertino",
		state: "CA",
		country: "USA",
		createdAt: "2023-02-20T20:48:58.108Z",
		updatedAt: "2023-02-20T20:48:58.108Z",
		dotters: [
			{
				id: 3,
				firstName: "Wentao",
				lastName: "Shu",
				title: "Operations Manager",
				profilePic:
					"https://images.ctfassets.net/zojzzdop0fzx/3Mp1BNqnUNmTdTtW7omXfk/f13bf52eac95ccc082f5a9c5488f1165/20191011-_ELR8604.jpg",
				locationId: 2,
				createdAt: "2023-02-20T21:23:48.117Z",
				updatedAt: "2023-02-20T21:23:48.117Z",
			},
		],
	},
	{
		id: 3,
		city: "Durham",
		state: "NC",
		country: "USA",
		createdAt: "2023-02-20T20:48:58.109Z",
		updatedAt: "2023-02-20T20:48:58.109Z",
		dotters: [
			{
				id: 4,
				firstName: "Rob",
				lastName: "Ocel",
				title: "Software Architect and Engineering Lead",
				profilePic:
					"https://images.ctfassets.net/zojzzdop0fzx/6cERKI4uJPI8NaHejLcCDf/e500e34d5864b824e55ae277b942cf98/test.png",
				locationId: 3,
				createdAt: "2023-02-20T21:23:48.119Z",
				updatedAt: "2023-02-20T21:23:48.119Z",
			},
		],
	},
	{
		id: 4,
		city: "Truckee",
		state: "CA",
		country: "USA",
		createdAt: "2023-02-20T20:48:58.110Z",
		updatedAt: "2023-02-20T20:48:58.110Z",
		dotters: [
			{
				id: 5,
				firstName: "Sarah",
				lastName: "Ronau",
				title: "Director of Marketing",
				profilePic:
					"https://images.ctfassets.net/zojzzdop0fzx/3unKGZJ2IqnIzdGQYeyma7/8d63d5a38cf87a2a9ace96c622b6b3a7/Image_from_iOS.jpg",
				locationId: 4,
				createdAt: "2023-02-20T21:23:48.120Z",
				updatedAt: "2023-02-20T21:23:48.120Z",
			},
		],
	},
	{
		id: 5,
		city: "Swansea",
		state: null,
		country: "UK",
		createdAt: "2023-02-20T20:48:58.111Z",
		updatedAt: "2023-02-20T20:48:58.111Z",
		dotters: [
			{
				id: 6,
				firstName: "Simone",
				lastName: "Cuomo",
				title: "Software Architect",
				profilePic:
					"https://images.ctfassets.net/zojzzdop0fzx/59RPVhlrYsGilokuWG9eEt/3088f77ef8f512cc502f6fd0f92b5916/simone.png",
				locationId: 5,
				createdAt: "2023-02-20T21:23:48.122Z",
				updatedAt: "2023-02-20T21:23:48.122Z",
			},
		],
	},
	{
		id: 6,
		city: "Phoenix",
		state: "AZ",
		country: "USA",
		createdAt: "2023-02-20T20:48:58.112Z",
		updatedAt: "2023-02-20T20:48:58.112Z",
		dotters: [
			{
				id: 7,
				firstName: "Jesse",
				lastName: "Tomchak",
				title: "Software Architect",
				profilePic:
					"https://images.ctfassets.net/zojzzdop0fzx/4kPl5OakAb0YefRfpjQCth/c5d7e16bc9a1190e0cc354c17818433b/profile_Jesse_Tomchak_web.jpeg",
				locationId: 6,
				createdAt: "2023-02-20T21:23:48.123Z",
				updatedAt: "2023-02-20T21:23:48.123Z",
			},
		],
	},
	{
		id: 7,
		city: "New Orleans",
		state: "LA",
		country: "USA",
		createdAt: "2023-02-20T20:48:58.114Z",
		updatedAt: "2023-02-20T20:48:58.114Z",
		dotters: [
			{
				id: 8,
				firstName: "Dustin",
				lastName: "Goodman",
				title: "Engineering Manager",
				profilePic:
					"https://images.ctfassets.net/zojzzdop0fzx/51N8yXuvGCUIPMfPwKZxzq/8a988dcce7e95504c50b6a21c544c7d6/Dustin.jpg",
				locationId: 7,
				createdAt: "2023-02-20T21:23:48.124Z",
				updatedAt: "2023-02-20T21:23:48.124Z",
			},
		],
	},
	{
		id: 8,
		city: "Denton",
		state: "TX",
		country: "USA",
		createdAt: "2023-02-20T20:48:58.115Z",
		updatedAt: "2023-02-20T20:48:58.115Z",
		dotters: [
			{
				id: 9,
				firstName: "Linda",
				lastName: "Thompson",
				title: "Software Engineer",
				profilePic:
					"https://images.ctfassets.net/zojzzdop0fzx/69456XLDjgg7ooe1y5y4n0/24a781683876b345f0710d28184571de/me-sm.jpg",
				locationId: 8,
				createdAt: "2023-02-20T21:23:48.125Z",
				updatedAt: "2023-02-20T21:23:48.125Z",
			},
		],
	},
	{
		id: 9,
		city: "Sudbury",
		state: "Ontario",
		country: "Canada",
		createdAt: "2023-02-20T20:48:58.117Z",
		updatedAt: "2023-02-20T20:48:58.117Z",
		dotters: [
			{
				id: 10,
				firstName: "Morgan",
				lastName: "Worrell",
				title: "Senior Software Engineer",
				profilePic:
					"https://images.ctfassets.net/zojzzdop0fzx/41n9dr8aK7W3fzC0aSrAEx/095da95c57b1fb5b670206e9d7d13575/profile-1.jpg",
				locationId: 9,
				createdAt: "2023-02-20T21:23:48.126Z",
				updatedAt: "2023-02-20T21:23:48.126Z",
			},
		],
	},
	{
		id: 10,
		city: "Nairobi",
		state: null,
		country: "Kenya",
		createdAt: "2023-02-20T20:48:58.118Z",
		updatedAt: "2023-02-20T20:48:58.118Z",
		dotters: [
			{
				id: 11,
				firstName: "Allan",
				lastName: "Jeremy",
				title: "Senior Software Engineer",
				profilePic:
					"https://images.ctfassets.net/zojzzdop0fzx/5Zh99sFIOSa7fABxmQZuRU/e6f407c1c6f10bccc06d933e47944da0/image.png",
				locationId: 10,
				createdAt: "2023-02-20T21:23:48.127Z",
				updatedAt: "2023-02-20T21:23:48.127Z",
			},
		],
	},
	{
		id: 11,
		city: "Los Angeles",
		state: "CA",
		country: "USA",
		createdAt: "2023-02-20T20:48:58.119Z",
		updatedAt: "2023-02-20T20:48:58.119Z",
		dotters: [
			{
				id: 12,
				firstName: "Jessica",
				lastName: "Wilkins",
				title: "Software Engineer",
				profilePic:
					"https://images.ctfassets.net/zojzzdop0fzx/41LVxAEICSxJ400sVBxRvz/5f7b7bfd5a83e08278d1879245abb62a/image.png",
				locationId: 11,
				createdAt: "2023-02-20T21:23:48.128Z",
				updatedAt: "2023-02-20T21:23:48.128Z",
			},
		],
	},
	{
		id: 12,
		city: "Montevideo",
		state: null,
		country: "Uruguay",
		createdAt: "2023-02-20T20:48:58.121Z",
		updatedAt: "2023-02-20T20:48:58.121Z",
		dotters: [
			{
				id: 13,
				firstName: "Nacho",
				lastName: "Vazquez",
				title: "Senior Software Engineer",
				profilePic:
					"https://images.ctfassets.net/zojzzdop0fzx/6GoUy33dVDj7733rPsqnUB/ae1bf80e9f8f3417ad2af9874bfa8d90/58662270_10211680522283181_798127338754670592_o_10211680522203179.jpg",
				locationId: 12,
				createdAt: "2023-02-20T21:23:48.130Z",
				updatedAt: "2023-02-20T21:23:48.130Z",
			},
		],
	},
	{
		id: 13,
		city: "Valencia",
		state: null,
		country: "Venezuela",
		createdAt: "2023-02-20T20:48:58.122Z",
		updatedAt: "2023-02-20T20:48:58.122Z",
		dotters: [
			{
				id: 14,
				firstName: "Jesus",
				lastName: "Padron",
				title: "Software Engineer",
				profilePic:
					"https://images.ctfassets.net/zojzzdop0fzx/3wMLLUCQIe8Xd92GcgXRPX/eceddfc679d005379cfb4f7be4eef018/yisus.png",
				locationId: 13,
				createdAt: "2023-02-20T21:23:48.131Z",
				updatedAt: "2023-02-20T21:23:48.131Z",
			},
		],
	},
];

/**
 * Default no query paramaters sent
 */
export const mockLocationDefault = {
	data: defaultLocationData,
	pageInfo: { page: 1, perPage: 6, total: 13, totalPages: 3 },
};

/**
 * Flagged to add dotters to query
 */
export const mockWithDotterLocation = {
	data: withDotterLocationData,
	pageInfo: { page: 1, perPage: 6, total: 13, totalPages: 3 },
};

/**
 * Specific request for second page `?page=2`
 */
export const mockLocationSecondPage = {
	data: defaultLocationData,
	pageInfo: { page: 2, perPage: 6 },
};

/**
 * Specific request 3 locations perpage `?perPage=3`
 */
export const mockLocationPerPage = {
	data: defaultLocationData,
	pageInfo: { page: 1, perPage: 3 },
};

/**
 * Specific location by id
 */
export const mockLocationById = {
	id: 3,
	city: "Durham",
	state: "NC",
	country: "USA",
	createdAt: "2023-02-20T20:48:58.109Z",
	updatedAt: "2023-02-20T20:48:58.109Z",
};

/**
 * Specific location by id with dotter info
 */
export const mockLocationByIdWithDotter = {
	id: 3,
	city: "Durham",
	state: "NC",
	country: "USA",
	createdAt: "2023-02-20T20:48:58.109Z",
	updatedAt: "2023-02-20T20:48:58.109Z",
	dotters: [
		{
			id: 4,
			firstName: "Rob",
			lastName: "Ocel",
			title: "Software Architect and Engineering Lead",
			profilePic:
				"https://images.ctfassets.net/zojzzdop0fzx/6cERKI4uJPI8NaHejLcCDf/e500e34d5864b824e55ae277b942cf98/test.png",
			locationId: 3,
			createdAt: "2023-02-20T21:23:48.119Z",
			updatedAt: "2023-02-20T21:23:48.119Z",
		},
	],
};
