import { faker } from "@faker-js/faker";

const mockDotterDefaultData = [
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
];

const withLocationMockDotterData = [
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
		location: {
			id: 1,
			city: "Atlanta",
			state: "GA",
			country: "USA",
			createdAt: "2023-02-20T20:48:58.104Z",
			updatedAt: "2023-02-20T20:48:58.104Z",
		},
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
		location: {
			id: 1,
			city: "Atlanta",
			state: "GA",
			country: "USA",
			createdAt: "2023-02-20T20:48:58.104Z",
			updatedAt: "2023-02-20T20:48:58.104Z",
		},
	},
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
		location: {
			id: 2,
			city: "Cupertino",
			state: "CA",
			country: "USA",
			createdAt: "2023-02-20T20:48:58.108Z",
			updatedAt: "2023-02-20T20:48:58.108Z",
		},
	},
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
		location: {
			id: 3,
			city: "Durham",
			state: "NC",
			country: "USA",
			createdAt: "2023-02-20T20:48:58.109Z",
			updatedAt: "2023-02-20T20:48:58.109Z",
		},
	},
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
		location: {
			id: 4,
			city: "Truckee",
			state: "CA",
			country: "USA",
			createdAt: "2023-02-20T20:48:58.110Z",
			updatedAt: "2023-02-20T20:48:58.110Z",
		},
	},
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
		location: {
			id: 5,
			city: "Swansea",
			state: null,
			country: "UK",
			createdAt: "2023-02-20T20:48:58.111Z",
			updatedAt: "2023-02-20T20:48:58.111Z",
		},
	},
];

/**
 * Default no query paramaters sent
 */
export const mockDotterDefault = {
	data: mockDotterDefaultData,
	pageInfo: { page: 1, perPage: 6 },
};
/**
 * Default no query paramaters sent
 */
export const mockDotterWithLocation = {
	data: withLocationMockDotterData,
	pageInfo: { page: 1, perPage: 6 },
};

/**
 *
 * @param id Query parameter from API request
 * @returns Dotter found or undefined
 */
export const mockDotterById = (id: number) => {
	return mockDotterDefaultData.find((member) => member.id === id);
};

/**
 * create new mock dotter
 */
export const mockNewDotter = () => ({
	firstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	title: faker.name.jobTitle(),
	profilePic: faker.image.imageUrl(1234, 2345, "profile"),
	city: faker.address.cityName(),
	state: faker.address.stateAbbr(),
	country: faker.address.country(),
});

/**
 * New Dotter property
 */
export const mockNewDotterTitle = faker.name.jobTitle;
