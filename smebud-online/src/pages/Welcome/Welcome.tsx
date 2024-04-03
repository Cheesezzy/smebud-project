import React, { FC } from "react";
import PreNavbar from "../../component/PreLoginNavbar/PreNavbar";
import PreSignUp from "../../component/PreSignUp/PreSignUp";

const Welcome: FC = () => {
	return (
		<>
			<PreNavbar />
			<PreSignUp />
		</>
	);
};

export default Welcome;
