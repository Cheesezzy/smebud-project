import React from "react";
import smebudLogo from "../../assets/smebud_logoTwo.svg";

const PreNavbar = () => {
	return (
		<>
			<div className="flex md:justify-start sm:justify-center min-w-[375px] md:h-[80px] sm:h-[104px] shadow-md shadow-slate-100 md:pl-24">
				<img src={smebudLogo} alt="smebud-logo" width={153} />
			</div>
		</>
	);
};

export default PreNavbar;
