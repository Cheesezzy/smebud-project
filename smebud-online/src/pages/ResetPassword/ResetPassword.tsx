import React, { FC } from "react";
import { Link } from "react-router-dom";
import smebudLogo from "../../assets/smebud_logoTwo.svg";
import Button from "../../component/Button/Button";

const ResetPassword: FC = () => {
	return (
		<div className="flex justify-center items-center md:h-screen md:bg-[#f2f2f2] sm:bg-[#FFFFFF]">
			<div className="">
				<div className="flex justify-center align-center mb-4 sm:mt-10 md:mt-0 min-w-[375px] sm:mb-4">
					<img src={smebudLogo} alt="smebud-logo" />
				</div>
				<hr className="sm:block md:hidden bg-slate-50 h-1 border-0 rounded" />
				<div className="bg-white md:shadow-xl rounded px-8 pt-6 pb-8 mb-4 md:w-[520px] sm:w-[400px]">
					<p
						className={`md:tracking-wider ${createAcctStyles.text} sm:hidden md:block sm:tracking-tight`}
					>
						Reset your password
					</p>
					<p
						className={`md:tracking-wider sm:block md:hidden ${createAcctStyles.text} sm:tracking-wider`}
					>
						Reset password
					</p>
					<p
						className={`md:tracking-wider md:block sm:hidden font-corsa-grotesk text-[#565C6B] text-center md:text-[18px] mb-14 mt-8 text-base leading-5 sm:tracking-tight`}
					>
						A reset link has been sent to your <br /> email address
					</p>
					<div className="">
						<form>
							<div className="mb-4">
								<label
									className={`${createAcctStyles.formText}`}
									htmlFor="email"
								>
									Email address
								</label>
								<input
									className="h-[52px] appearance-none border mb-6 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
									id="company"
									type="text"
									placeholder="johndoe@gmail.com"
								/>
							</div>
							<div className="">
								<Button
									type="submit"
									text="Reset Password"
									className="w-full font-thin h-[52px] bg-[#3A56CD] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

const createAcctStyles = {
	text: "font-corsa-grotesk font-extrabold text-[#434A5B] text-center md:text-[24px] sm:mb-8 md:mb-14 mt-8 text-base leading-5",
	formText: `block text-sm mb-2 font-corsa-grotesk font-light text-[#696E7C] text-base leading-5 tracking-wider`,
};

export default ResetPassword;
