import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const dotterData: Prisma.DotterCreateInput[] = [
	{
		firstName: "Tracy",
		lastName: "Lee",
		title: "CEO, Co-Founder",
		profilePic:
			"https://images.ctfassets.net/zojzzdop0fzx/4qGqE6H1ZXusAtPK3CFX0w/a38221fa86434f1be2d82fca78272ed8/tracy_lee.jpg",
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
				},
			},
		},
	},
];

async function seedDotterData() {
	console.log("Start seeding Dotter data...");
	for (const d of dotterData) {
		console.log(`Seeding data for ${d.firstName} ${d.lastName}`);
		const dotter = await prisma.dotter.create({
			data: d,
		});
		console.log(
			`Create record ${dotter.id} for ${dotter.firstName} ${dotter.lastName}`
		);
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
