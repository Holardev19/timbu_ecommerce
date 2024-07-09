import { Link } from "react-router-dom";
import menu from "./assets/menu.svg";
import Logo from "./assets/Logo.svg";
import bagTwo from "./assets/bagTwo.svg";
import searchNormal from "./assets/searchNormal.png";

const Navbar = () => {
	return (
		<>
			<div className="px-3 xs:px-6 py-3 flex justify-between items-center border-b">
				<div className="flex items-center gap-3">
					<img
						className="lg:hidden cursor-pointer"
						src={menu}
						alt="menu"
					/>
					<img src={Logo} alt="Logo" />
				</div>

				<div className="hidden  items-start gap-2 lg:flex">
					<input
						className="font-lexend flex w-[25rem] h-[3rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] pl-[1.5rem] items-center gap-2 border border-[#F4F4F4] rounded-[6.25rem] outline-none"
						type="text"
						placeholder="Search"
					/>
					<div className="flex w-12 h-12 p-2 items-center justify-center gap-2 bg-[#17AF26] rounded-[6.25rem] cursor-pointer">
						<img
							className="w-[1.125rem] h-[1.125rem]"
							src={searchNormal}
							alt="search"
						/>
					</div>
				</div>

				<div className="flex justify-end items-center gap-4">
					<p className="font-lexend text-[rgba(70,73,79,1)]">
						Your Account
					</p>

					<div className="w-[0.0625rem] h-[0.75rem] bg-[rgba(200,201,203,1)]"></div>

					<Link to="/cart">
						<div className="flex w-6 h-6 justify-center items-center relative">
							<img
								className="w-6 h-6 shrink"
								src={bagTwo}
								alt=""
							/>

							<div className="flex w-[0.875rem] h-[0.875rem] flex-col justify-center items-center gap-2 absolute right-[-0.25rem] bottom-[0.125rem] rounded-full bg-[#EB2606] px-1">
								<p className="text-center font-lexend text-[0.5rem] font-normal text-[#fff]">
									3
								</p>
							</div>
						</div>
					</Link>
				</div>
			</div>

			<div className=" items-center border gap-2 flex justify-center w-full py-3 px-6 xxs:px-4  lg:hidden ">
				<input
					className="font-lexend flex w-[25rem] h-[3rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] pl-[1.5rem] items-center gap-2 border border-[#F4F4F4] rounded-[6.25rem] outline-none font-normal"
					type="text"
					placeholder="Search"
				/>
				<div className="flex w-12 h-12  p-2 items-center justify-center gap-2 bg-[#17AF26] rounded-[6.25rem] cursor-pointer xxs:w-10 xxs:h-10 border ">
					<img
						className="w-[1.125rem] h-[1.125rem]"
						src={searchNormal}
						alt="search"
					/>
				</div>
			</div>
		</>
	);
};

export default Navbar;
