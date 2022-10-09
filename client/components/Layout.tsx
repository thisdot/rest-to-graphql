import { ReactNode, FC } from "react";
import Header from "./Header";

type Props = {
	children: ReactNode;
};

const Layout: FC<Props> = (props) => (
	<>
		<Header />
		<div className="px-8">{props.children}</div>
	</>
);

export default Layout;
