import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header: FC = () => {
	const router = useRouter();
	const isActive: (pathname: string) => boolean = (pathname) =>
		router.pathname === pathname;

	return (
		<nav className="flex p-8 items-center">
			<div>
				<Link href="/">
					<a className={`${isActive("/") ? "text-gray-500" : null}`}>Dotters</a>
				</Link>
				<Link href="/locations">
					<a
						className={`${
							isActive("/locations") ? "text-gray-500" : null
						} ml-4`}
					>
						Locations
					</a>
				</Link>
			</div>
			<div className="ml-auto">
				<Link href="/dotters/create">
					<a
						className={`${
							isActive("/dotters/create") ? "text-gray-500" : null
						} border-black border-2 px-2 py-2 rounded-sm`}
					>
						+ Create Dotter
					</a>
				</Link>
			</div>
		</nav>
	);
};

export default Header;
