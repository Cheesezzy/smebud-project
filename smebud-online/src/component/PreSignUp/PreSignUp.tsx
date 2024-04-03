import React, { FC } from "react";
import Button from "../../component/Button/Button";
import timer from "../../assets/timer.svg";
import exclamationCircle from "../../assets/exclamation-circle.svg";
import { Link } from "react-router-dom";

const PreSignUp: FC = () => {
	return (
		<div className="flex align-center justify-center bg-gray-200 sm:bg-gray-50 bg-opacity-20 h-screen">
			<div className="md:mt-28 sm:mt-0 max-w-[491px]">
				<h1 className="sm:text-lg md:text-2xl sm:mt-10 md:mt-0 text-center text-[#434A5B] font-bold mb-6">
					Welcome Rasheed, Set up your Profile
				</h1>
				<div className="md:px-6 md:w-full sm:max-w-[500px] sm:px-3">
					<p className="text-center font-light mb-6 sm:text-sm md:text-[18px] text-[#565C6B] tracking-wide">
						Lets Set up your profile and we will show you assets and business
						that match your criteria
					</p>
				</div>
				<div className="flex align-center justify-center mb-6">
					<Link to={"/dashboard"}>
						<Button
							type="submit"
							text="Let's Start"
							className="w-[270px] bg-[#3A56CD] font-thin hover:bg-blue-700 text-white py-2 px-4 rounded"
						/>
					</Link>
				</div>
				<div className="flex align-center justify-center mb-6">
					<img src={timer} alt="timer" />
					<p className="pt-1 md:text-[18px] text-xl pl-3 font-light sm:text-[14px] text-[#565C6B]">
						Estimated Time: 3min
					</p>
				</div>
				<div className="md:px-3 md:tracking-normal flex align-center justify-center mb-6 md:w-full sm:max-w-[500px] sm:px-6 sm:tracking-wide">
					<img src={exclamationCircle} alt="exclamation-circle" />
					<p className="text-yellow-900 text-base text-sm pl-4">
						Sellers are more likely to engage with a buyer, with a complete
						profile
					</p>
				</div>
				<div className="w-full flex sm:px-5 md:px-0">
					<p className="text-center text-[#434A5B] font-light text-[15px]">
						Make sure to be honest and provide useful informations so that
						sellers can assess your fit for their bussiness
					</p>
				</div>
			</div>
		</div>
	);
};

export default PreSignUp;
