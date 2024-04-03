import React, { FC } from "react";
import { Link } from "react-router-dom";
import smebudLogo from "../../assets/smebud_logoTwo.svg";
import Button from "../../component/Button/Button";

const CreateAcct: FC = () => {
	return (
		<div className="flex justify-center items-center md:bg-[#f2f2f2] sm:bg-[#FFFFFF]">
			<div className="mt-14">
				<div className="flex justify-center align-center mb-4">
					<img src={smebudLogo} alt="smebud-logo" />
				</div>
				<hr className="sm:block md:hidden bg-slate-50 h-1 border-0 rounded" />
				<div className="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4 md:max-w-[480px] sm:max-w-[350px]">
					<p
						className={`md:tracking-wider mb-4 ${createAcctStyles.text} sm:tracking-tight`}
					>
						How do you think you will use Smebud
					</p>
					<div className="flex mb-4">
						{/* <div className="flex items-center mb-4"> */}
						<div className="mr-4 h-[52px] appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
							<input
								id="default-checkbox"
								type="checkbox"
								value=""
								className="w-4 h-4 text-blue-600 cursor-pointer rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								htmlFor="default-checkbox"
								className={`ml-2 ${createAcctStyles.text} sm:text-[14px]`}
							>
								I want to buy
							</label>
						</div>
						<div className="h-[52px] appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
							<input
								id="default-checkbox"
								type="checkbox"
								value=""
								className="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
							/>
							<label
								htmlFor="default-checkbox"
								className={`ml-2 ${createAcctStyles.text} sm:text-[14px]`}
							>
								I want to sell
							</label>
						</div>
					</div>
					<div className="mb-8 h-[52px] appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
						<input
							id="default-checkbox"
							type="checkbox"
							value=""
							className="w-4 h-4 text-blue-600 cursor-pointer bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label
							htmlFor="default-checkbox"
							className={`ml-2 ${createAcctStyles.text} sm:text-[14px]`}
						>
							Invest in companies
						</label>
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
					{/* className="w-full max-w-xs" */}
					<div>
						<form>
							{/* className={`${createAcctStyles.text}`} */}
							<div className="mb-4">
								<label
									className={`${createAcctStyles.formText}`}
									htmlFor="Full name"
								>
									Full name
								</label>
								<input
									className="h-[52px] appearance-none border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
									id="fullname"
									type="text"
									placeholder="Optional"
								/>
							</div>
							<div className="mb-4">
								<label
									className={`${createAcctStyles.formText}`}
									htmlFor="Company"
								>
									Company
								</label>
								<input
									className="h-[52px] appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
									id="company"
									type="text"
									placeholder="Optional"
								/>
							</div>
							<div className="mb-4">
								<label
									className={`${createAcctStyles.formText}`}
									htmlFor="Company"
								>
									What is Your Email address
								</label>
								<input
									className="h-[52px] appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
									id="company"
									type="text"
									placeholder="johndoe@gmail.com"
								/>
							</div>
							<div className="mb-4 relative">
								<label
									className={`${createAcctStyles.formText}`}
									htmlFor="location"
								>
									Where are you located
								</label>
								<div className="mb-4 relative">
									<select
										className="h-[52px] block appearance-none w-full border border-gray-200 font-light text-[#696E7C] py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-state"
									>
										<option>Sweden</option>
										<option>Mexico</option>
									</select>
									<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#4B6EFF]">
										<svg
											className="fill-current h-6 w-6 text-[#4B6EFF]"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
										</svg>
									</div>
								</div>
							</div>
							<div className="mb-4">
								<label
									className={`${createAcctStyles.formText}`}
									htmlFor="phone"
								>
									What is your phone number
								</label>
								<input
									className="h-[52px] appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-200"
									id="username"
									type="text"
									placeholder="+99"
								/>
							</div>
							{/* <div className="inline-block relative w-64"> */}
							<div className="mb-4">
								<label
									className={`${createAcctStyles.formText}`}
									htmlFor="grid-state"
								>
									How did you hear about Smebud
								</label>
								<div className="mb-4 relative">
									<select
										className="h-[52px] block appearance-none w-full font-light text-[#696E7C] border border-gray-200 text-gray-500 py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-state"
									>
										<option>Select one</option>
										<option></option>
									</select>
									<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[#4B6EFF]">
										<svg
											className="fill-current h-6 w-6 text-[#4B6EFF]"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
										</svg>
									</div>
								</div>
							</div>
							<div className="mb-4">
								<div className="md:w-1/3"></div>
								<label className="block text-gray-500 flex">
									<div>
										<input
											className="mr-2 mt-1 cursor-pointer h-5 w-5 leading-tight"
											type="checkbox"
										/>
									</div>
									<div>
										<span className="text-sm font-light">
											By creating a Smebud account, I agree to Smebuds
											<a
												href="#"
												className="font-medium text-[#4B6EFF] dark:text-blue-500 hover:underline"
											>
												{" "}
												Terms and conditions
											</a>
											,{" "}
											<a
												href="#"
												className="font-medium text-[#4B6EFF]  dark:text-blue-500 hover:underline"
											>
												Privacy policy
											</a>
											,{" "}
											<a
												href="#"
												className="font-medium text-[#4B6EFF] dark:text-blue-500 hover:underline"
											>
												Cookies{" "}
											</a>
											and{" "}
											<a
												href="#"
												className="font-medium text-[#4B6EFF] dark:text-blue-500 hover:underline"
											>
												Tracking policy
											</a>
										</span>
									</div>
								</label>
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
	text: "font-corsa-grotesk font-light text-[#696E7C] md:text-[16px] text-base leading-5",
	formText: `block text-sm mb-2 font-corsa-grotesk font-light text-[#696E7C] text-base leading-5 tracking-wider`,
};

export default CreateAcct;
