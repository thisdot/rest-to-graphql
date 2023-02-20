import { PrismaClient, Prisma } from "@prisma/client";
import * as dotenv from "dotenv";
dotenv.config();
const prisma = new PrismaClient();

export const dotterData: Prisma.DotterCreateInput[] = [
	{
		firstName: "Tracy",
		lastName: "Lee",
		title: "CEO, Co-Founder",
		profilePic:
			"https://images.ctfassets.net/zojzzdop0fzx/4qGqE6H1ZXusAtPK3CFX0w/a38221fa86434f1be2d82fca78272ed8/tracy_lee.jpg",
		createdAt: "2023-02-20T21:23:48.095Z",
		updatedAt: "2023-02-20T21:23:48.095Z",
		location: {
			connectOrCreate: {
				where: {
					city_state_country: {
						city: "Atlanta",
						state: "GA",
						country: "USA",
					},
				},
				create: {
					city: "Atlanta",
					state: "GA",
					country: "USA",
					createdAt: "2023-02-20T20:48:58.104Z",
					updatedAt: "2023-02-20T20:48:58.104Z",
				},
			},
		},
	},
	{
		firstName: "Elliott",
		lastName: "Fouts",
		title: "COO & VP of Engineering",
		profilePic:
			"https://images.ctfassets.net/zojzzdop0fzx/76cEyJIw1xAHlpIMNgPoIJ/d41648294c6fbd27f0d71c8e8fbb3752/image.png",
		createdAt: "2023-02-20T21:23:48.115Z",
		updatedAt: "2023-02-20T21:23:48.115Z",
		location: {
			connectOrCreate: {
				where: {
					city_state_country: {
						city: "Atlanta",
						state: "GA",
						country: "USA",
					},
				},
				create: {
					city: "Atlanta",
					state: "GA",
					country: "USA",
					createdAt: "2023-02-20T20:48:58.104Z",
					updatedAt: "2023-02-20T20:48:58.104Z",
				},
			},
		},
	},
	{
		firstName: "Wentao",
		lastName: "Shu",
		title: "Operations Manager",
		profilePic:
			"https://images.ctfassets.net/zojzzdop0fzx/3Mp1BNqnUNmTdTtW7omXfk/f13bf52eac95ccc082f5a9c5488f1165/20191011-_ELR8604.jpg",
		createdAt: "2023-02-20T21:23:48.117Z",
		updatedAt: "2023-02-20T21:23:48.117Z",
		location: {
			connectOrCreate: {
				where: {
					city_state_country: {
						city: "Cupertino",
						state: "CA",
						country: "USA",
					},
				},
				create: {
					city: "Cupertino",
					state: "CA",
					country: "USA",
					createdAt: "2023-02-20T20:48:58.108Z",
					updatedAt: "2023-02-20T20:48:58.108Z",
				},
			},
		},
	},
	{
		firstName: "Rob",
		lastName: "Ocel",
		title: "Software Architect and Engineering Lead",
		profilePic:
			"https://images.ctfassets.net/zojzzdop0fzx/6cERKI4uJPI8NaHejLcCDf/e500e34d5864b824e55ae277b942cf98/test.png",
		createdAt: "2023-02-20T21:23:48.119Z",
		updatedAt: "2023-02-20T21:23:48.119Z",
		location: {
			connectOrCreate: {
				where: {
					city_state_country: {
						city: "Durham",
						state: "NC",
						country: "USA",
					},
				},
				create: {
					city: "Durham",
					state: "NC",
					country: "USA",
					createdAt: "2023-02-20T20:48:58.109Z",
					updatedAt: "2023-02-20T20:48:58.109Z",
				},
			},
		},
	},
	{
		firstName: "Sarah",
		lastName: "Ronau",
		title: "Director of Marketing",
		profilePic:
			"https://images.ctfassets.net/zojzzdop0fzx/3unKGZJ2IqnIzdGQYeyma7/8d63d5a38cf87a2a9ace96c622b6b3a7/Image_from_iOS.jpg",
		createdAt: "2023-02-20T21:23:48.120Z",
		updatedAt: "2023-02-20T21:23:48.120Z",
		location: {
			connectOrCreate: {
				where: {
					city_state_country: {
						city: "Truckee",
						state: "CA",
						country: "USA",
					},
				},
				create: {
					city: "Truckee",
					state: "CA",
					country: "USA",
					createdAt: "2023-02-20T20:48:58.110Z",
					updatedAt: "2023-02-20T20:48:58.110Z",
				},
			},
		},
	},
	{
		firstName: "Simone",
		lastName: "Cuomo",
		title: "Software Architect",
		profilePic:
			"https://images.ctfassets.net/zojzzdop0fzx/59RPVhlrYsGilokuWG9eEt/3088f77ef8f512cc502f6fd0f92b5916/simone.png",
		createdAt: "2023-02-20T21:23:48.122Z",
		updatedAt: "2023-02-20T21:23:48.122Z",
		location: {
			connectOrCreate: {
				where: {
					city_country: {
						city: "Swansea",
						country: "UK",
					},
				},
				create: {
					city: "Swansea",
					state: null,
					country: "UK",
					createdAt: "2023-02-20T20:48:58.111Z",
					updatedAt: "2023-02-20T20:48:58.111Z",
				},
			},
		},
	},
	{
		firstName: "Jesse",
		lastName: "Tomchak",
		title: "Software Architect",
		profilePic:
			"https://images.ctfassets.net/zojzzdop0fzx/4kPl5OakAb0YefRfpjQCth/c5d7e16bc9a1190e0cc354c17818433b/profile_Jesse_Tomchak_web.jpeg",
		createdAt: "2023-02-20T21:23:48.123Z",
		updatedAt: "2023-02-20T21:23:48.123Z",
		location: {
			connectOrCreate: {
				where: {
					city_state_country: {
						city: "Phoenix",
						state: "AZ",
						country: "USA",
					},
				},
				create: {
					city: "Phoenix",
					state: "AZ",
					country: "USA",
					createdAt: "2023-02-20T20:48:58.112Z",
					updatedAt: "2023-02-20T20:48:58.112Z",
				},
			},
		},
	},
	{
		firstName: "Dustin",
		lastName: "Goodman",
		title: "Engineering Manager",
		profilePic:
			"https://images.ctfassets.net/zojzzdop0fzx/51N8yXuvGCUIPMfPwKZxzq/8a988dcce7e95504c50b6a21c544c7d6/Dustin.jpg",
		createdAt: "2023-02-20T21:23:48.124Z",
		updatedAt: "2023-02-20T21:23:48.124Z",
		location: {
			connectOrCreate: {
				where: {
					city_state_country: {
						city: "New Orleans",
						state: "LA",
						country: "USA",
					},
				},
				create: {
					city: "New Orleans",
					state: "LA",
					country: "USA",
					createdAt: "2023-02-20T20:48:58.114Z",
					updatedAt: "2023-02-20T20:48:58.114Z",
				},
			},
		},
	},
	{
		firstName: "Linda",
		lastName: "Thompson",
		title: "Software Engineer",
		profilePic:
			"https://images.ctfassets.net/zojzzdop0fzx/69456XLDjgg7ooe1y5y4n0/24a781683876b345f0710d28184571de/me-sm.jpg",
		createdAt: "2023-02-20T21:23:48.125Z",
		updatedAt: "2023-02-20T21:23:48.125Z",
		location: {
			connectOrCreate: {
				where: {
					city_state_country: {
						city: "Denton",
						state: "TX",
						country: "USA",
					},
				},
				create: {
					city: "Denton",
					state: "TX",
					country: "USA",
					createdAt: "2023-02-20T20:48:58.115Z",
					updatedAt: "2023-02-20T20:48:58.115Z",
				},
			},
		},
	},
	{
		firstName: "Morgan",
		lastName: "Worrell",
		title: "Senior Software Engineer",
		profilePic:
			"https://images.ctfassets.net/zojzzdop0fzx/41n9dr8aK7W3fzC0aSrAEx/095da95c57b1fb5b670206e9d7d13575/profile-1.jpg",
		createdAt: "2023-02-20T21:23:48.126Z",
		updatedAt: "2023-02-20T21:23:48.126Z",
		location: {
			connectOrCreate: {
				where: {
					city_state_country: {
						city: "Sudbury",
						state: "Ontario",
						country: "Canada",
					},
				},
				create: {
					city: "Sudbury",
					state: "Ontario",
					country: "Canada",
					createdAt: "2023-02-20T20:48:58.117Z",
					updatedAt: "2023-02-20T20:48:58.117Z",
				},
			},
		},
	},
	{
		firstName: "Allan",
		lastName: "Jeremy",
		title: "Senior Software Engineer",
		profilePic:
			"https://images.ctfassets.net/zojzzdop0fzx/5Zh99sFIOSa7fABxmQZuRU/e6f407c1c6f10bccc06d933e47944da0/image.png",
		createdAt: "2023-02-20T21:23:48.127Z",
		updatedAt: "2023-02-20T21:23:48.127Z",
		location: {
			connectOrCreate: {
				where: {
					city_country: {
						city: "Nairobi",
						country: "Kenya",
					},
				},
				create: {
					city: "Nairobi",
					state: null,
					country: "Kenya",
					createdAt: "2023-02-20T20:48:58.118Z",
					updatedAt: "2023-02-20T20:48:58.118Z",
				},
			},
		},
	},
	{
		firstName: "Jessica",
		lastName: "Wilkins",
		title: "Software Engineer",
		profilePic:
			"https://images.ctfassets.net/zojzzdop0fzx/41LVxAEICSxJ400sVBxRvz/5f7b7bfd5a83e08278d1879245abb62a/image.png",
		createdAt: "2023-02-20T21:23:48.128Z",
		updatedAt: "2023-02-20T21:23:48.128Z",
		location: {
			connectOrCreate: {
				where: {
					city_state_country: {
						city: "Los Angeles",
						state: "CA",
						country: "USA",
					},
				},
				create: {
					city: "Los Angeles",
					state: "CA",
					country: "USA",
					createdAt: "2023-02-20T20:48:58.119Z",
					updatedAt: "2023-02-20T20:48:58.119Z",
				},
			},
		},
	},
	{
		firstName: "Nacho",
		lastName: "Vazquez",
		title: "Senior Software Engineer",
		profilePic:
			"https://images.ctfassets.net/zojzzdop0fzx/6GoUy33dVDj7733rPsqnUB/ae1bf80e9f8f3417ad2af9874bfa8d90/58662270_10211680522283181_798127338754670592_o_10211680522203179.jpg",
		createdAt: "2023-02-20T21:23:48.130Z",
		updatedAt: "2023-02-20T21:23:48.130Z",
		location: {
			connectOrCreate: {
				where: {
					city_country: {
						city: "Montevideo",
						country: "Uruguay",
					},
				},
				create: {
					city: "Montevideo",
					state: null,
					country: "Uruguay",
					createdAt: "2023-02-20T20:48:58.121Z",
					updatedAt: "2023-02-20T20:48:58.121Z",
				},
			},
		},
	},
	{
		firstName: "Jesus",
		lastName: "Padron",
		title: "Software Engineer",
		profilePic:
			"https://images.ctfassets.net/zojzzdop0fzx/3wMLLUCQIe8Xd92GcgXRPX/eceddfc679d005379cfb4f7be4eef018/yisus.png",
		createdAt: "2023-02-20T21:23:48.131Z",
		updatedAt: "2023-02-20T21:23:48.131Z",
		location: {
			connectOrCreate: {
				where: {
					city_country: {
						city: "Valencia",
						country: "Venezuela",
					},
				},
				create: {
					city: "Valencia",
					state: null,
					country: "Venezuela",
					createdAt: "2023-02-20T20:48:58.122Z",
					updatedAt: "2023-02-20T20:48:58.122Z",
				},
			},
		},
	},
];

async function seedDotterData() {
	console.log("Start seeding Dotter data...");
	for (const d of dotterData) {
		const dotter = await prisma.dotter.create({
			data: d,
		});
	}
	console.log("Finished seeding Dotter data!");
}

seedDotterData()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (err) => {
		console.error(err);
		await prisma.$disconnect();
		process.exit(1);
	});
