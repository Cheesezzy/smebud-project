import React, { FC } from "react";
import { Link } from "react-router-dom";
import smebudLogo from "../../assets/smebud_logoTwo.svg";
import Button from "../../component/Button/Button";

const Login: FC = () => {
	return (
		<div className="flex justify-center items-center md:h-screen md:bg-[#f2f2f2] sm:bg-[#FFFFFF]">
			<div className="">
				<div className="flex justify-center align-center mb-4 md:mt-0 min-w-[375px] sm:mt-20">
					<img src={smebudLogo} alt="smebud-logo" />
				</div>
				<hr className="sm:block md:hidden bg-slate-50 h-1 border-0 rounded" />
				<div className="bg-white md:shadow-xl rounded px-8 pt-6 pb-8 mb-4 md:w-[520px] sm:w-[350px]">
					<p
						className={`md:tracking-wider ${createAcctStyles.text} sm:tracking-tight`}
					>
						Welcome Back{" "}
					</p>
					<div>
						<form>
							<div className="mb-4">
								<label
									className={`${createAcctStyles.formText}`}
									htmlFor="email"
								>
									Email address
								</label>
								<input
									className="h-[52px] appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
									id="company"
									type="text"
									placeholder="johndoe@gmail.com"
								/>
							</div>
							<div className="mb-4">
								<label
									className={`${createAcctStyles.formText}`}
									htmlFor="password"
								>
									Password
								</label>
								<input
									className="h-[52px] appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
									id="username"
									type="text"
									placeholder="Optional"
								/>
							</div>
							<div className="flex justify-end  my-8">
								<Link
									to={"/reset-password"}
									className="font-light text-[#3A56CD] text-[13px] dark:text-blue-500 hover:underline"
								>
									Forgot password
								</Link>
							</div>
							<div>
								<Button
									type="submit"
									text="Sign up using EID of your country"
									className="w-full font-thin h-[52px] bg-transparent hover:bg-blue-500 text-[#3A56CD] font-semibold hover:text-white py-2 px-4 border border-[#3A56CD] hover:border-transparent rounded-lg"
								/>
							</div>
							<div className="inline-flex items-center justify-center w-full">
								<hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
								<span
									className={`absolute px-1 font-medium text-gray-500 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900`}
								>
									Or
								</span>
							</div>
							<div className="">
								<Link to={"/signup/welcome"}>
									<Button
										type="submit"
										text="Create Account"
										className="w-full font-thin h-[52px] bg-[#3A56CD] hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
									/>
								</Link>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

const createAcctStyles = {
	text: "font-corsa-grotesk font-extrabold text-[#434A5B] text-center md:text-[24px] mb-14 mt-8 text-base leading-5",
	formText: `block text-sm mb-2 font-corsa-grotesk font-light text-[#696E7C] text-base leading-5 tracking-wider`,
};

export default Login;
