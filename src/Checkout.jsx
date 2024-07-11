import { Link } from "react-router-dom";

import ticketTwo from "./assets/ticketTwo.svg";
import menu from "./assets/menu.svg";
import Logo from "./assets/Logo.svg";
import searchNormal from "./assets/searchNormal.png";
import left from "./assets/left.svg";
import arrowDown from "./assets/arrowDown.svg";
import newClip from "./assets/newClip.svg";
import dollar from "./assets/dollar.svg";
import circle from "./assets/circle.svg";
import visa from "./assets/visa.svg";
import bitcoin from "./assets/bitcoin.svg";
import clip from "./assets/clip.svg";
import group from "./assets/group.svg";
import Tick from "./assets/Tick.svg";
import walletTwo from "./assets/walletTwo.svg";

const Checkout = () => {
	return (
		<>
			{/* base styling */}
			<div className="sm:hidden box-border">
				<div className="px-3 xs:px-6 py-3 flex justify-between items-center border-b">
					<div className="flex items-center gap-3">
						<img
							className="lg:hidden cursor-pointer"
							src={menu}
							alt="menu"
						/>
						<img src={Logo} alt="Logo" />
					</div>

					<div className="hidden items-start gap-2 lg:flex">
						<input
							className="font-lexend flex w-[25rem] h-[2.5rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] pl-[1.5rem] items-center gap-2 border border-b-[#F4F4F4] rounded-[6.25rem] outline-none"
							type="text"
							placeholder="Search"
						/>
						<div className="flex w-10 h-10 p-2 items-center justify-center gap-2 bg-[#17AF26] rounded-[6.25rem] cursor-pointer">
							<img
								className="w-[1.125rem] h-[1.125rem]"
								src={searchNormal}
								alt="search"
							/>
						</div>
					</div>
				</div>

				<div className="flex items-center gap-2 justify-center w-full py-3 px-6 ">
					<input
						className="font-lexend flex w-[18rem] h-[2.5rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] pl-[1.5rem] items-center gap-2 border border-[#F4F4F4] rounded-[6.25rem] outline-none font-normal"
						type="text"
						placeholder="Search"
					/>
					<div className="flex w-8 h-8  p-2 items-center justify-center gap-2 bg-[#17AF26] rounded-[6.25rem] cursor-pointer border ">
						<img
							className="w-[0.8rem] h-[0.8rem]"
							src={searchNormal}
							alt="search"
						/>
					</div>
				</div>

				<header className=" flex py-[1rem] px-[1.5rem] items-center gap-4 bg-[#F4F4F4] xs:justify-center">
					<div className="flex w-[1.875rem] h-[1.875rem] items-center justify-center gap-2 rounded-[6.25rem] bg-[#fff]">
						<img className="text-[#05422C]" src={Tick} alt="tick" />
					</div>

					<p className="text-[#060709] font-lexend text-sm font-medium">
						Shopping Cart
					</p>

					<div className="w-[2.46875rem] h-[0.0625rem] bg-[#C3D2CC]"></div>

					<div className="flex w-[1.875rem] h-[1.875rem] items-center justify-center gap-2 rounded-[6.25rem] bg-[#05422C]">
						<img
							className="flex w-[0.875rem] h-[0.875rem] justify-center items-center shrink-0"
							src={walletTwo}
							alt="wallet"
						/>
					</div>

					<div className="w-[2.46875rem] h-[0.0625rem] bg-[#C3D2CC]"></div>

					<div className="flex w-[1.875rem] h-[1.875rem] justify-center items-center gap-2 rounded-[6.25rem] bg-[#fff]">
						<img
							className="flex w-[0.875rem] h-[0.875rem] justify-center items-center shrink-0"
							src={ticketTwo}
							alt=""
						/>
					</div>
				</header>

				<main className="flex flex-col w-[22rem] mr-4">
					<div className="flex flex-col gap-3 p-4 m-0">
						<div className="flex pb-6 justify-between items-center border-b w-[21.5rem]">
							<div className="flex justify-center items-center gap-3 ">
								<Link to="/cart">
									<button className="pt-1">
										<img
											className="flex w-6 h-6 justify-center items-center"
											src={left}
											alt=""
										/>
									</button>
								</Link>

								<p className="font-lexend text-xl font-normal text-[#060709]">
									Shipping
								</p>
							</div>

							<p>&#40;3&#41;</p>
						</div>

						{/* Names */}
						<div className="flex items-start gap-5 self-stretch mt-8 w-[21rem] ">
							<div className="flex flex-col">
								<p className="text-[#46494F] font-normal font-lexend ">
									First Name &#42;
								</p>

								<div className="flex h-[2.3rem] px-[1rem] items-center gap-4 self-stretch rounded-lg border w-[10rem]">
									<input
										className="font-lexend font-normal text-sm w-full outline-none"
										type="text"
									/>
								</div>
							</div>

							<div className="flex flex-col">
								<p className="text-[#46494F] font-normal font-lexend">
									Last Name &#42;
								</p>

								<div className="flex h-[2.3rem] px-[1rem] items-center gap-4 self-stretch rounded-lg border w-[14.5rem] xxs:w-[10rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem]">
									<input
										className="font-lexend font-normal text-sm w-full outline-none"
										type="text"
									/>
								</div>
							</div>
						</div>

						{/* Country */}
						<div className="flex flex-col justify-center items-start gap-2 self-stretch rounded-xl bg-[#fff]">
							<p className="text-[#46494F] font-lexend text-xs font-normal uppercase">
								Country / Region *
							</p>

							<div className="flex h-10  items-center gap-4 self-stretch rounded-lg border justify-between   px-4 w-[21.5rem] ">
								<input
									className="text-[#060709] font-lexend text-sm font-normal outline-none"
									type="text"
									name=""
									id=""
									placeholder="Nigeria"
								/>

								<img
									className="cursor-pointer"
									src={arrowDown}
									alt=""
								/>
							</div>
						</div>

						{/* State */}
						<div className="flex flex-col justify-center items-start gap-2 self-stretch">
							<p className="text-[#46494F] font-lexend text-xs font-normal">
								STATE
							</p>

							<div className="flex h-10 px-[1rem] items-center gap-4 self-stretch rounded-lg border w-[21.5rem]">
								<input
									className="font-lexend text-sm font-normal outline-none w-full"
									type="text"
									name=""
									id=""
									placeholder="House number and street name"
								/>
							</div>

							<div className="flex h-10 px-[1rem] items-center gap-4 rounded-lg border w-[21.5rem]">
								<input
									className="font-lexend text-sm font-normal outline-none w-full"
									type="text"
									name=""
									id=""
									placeholder="Apartment, suite, unit, etc. (optional)"
								/>
							</div>
						</div>

						<div className="flex flex-col items-start gap-4">
							<div className="flex flex-col justify-center items-start gap-2 flex-1 rounded-xl bg-[#fff]">
								<p className="font-lexend text-xs font-normal">
									Town / City *
								</p>
								<div className="flex px-4 items-center gap-4 self-stretch rounded-lg border h-10 w-[21.5rem]">
									<input
										className="font-lexend text-sm font-normal outline-none w-full"
										type="text"
										name=""
										id=""
									/>
								</div>
							</div>

							<div className="flex flex-col justify-center items-start gap-2 flex-1 rounded-xl bg-[#fff]">
								<p className="font-lexend text-xs font-normal">
									Province *
								</p>
								<div className="flex px-4 items-center gap-4 self-stretch rounded-lg border h-10 justify-between w-[21.5rem]">
									<input
										className="font-lexend text-sm font-normal outline-none w-full"
										type="text"
										name=""
										id=""
									/>

									<img src={arrowDown} alt="" />
								</div>

								<div className="flex flex-col justify-center items-start gap-2 flex-1 rounded-xl bg-[#fff]">
									<p className="font-lexend text-xs font-normal">
										Postcode / ZIP *
									</p>
									<div className="flex h-10 px-4 items-center gap-4 self-stretch rounded-lg border w-[21.5rem]">
										<input
											className="font-lexend text-sm font-normal outline-none w-full "
											type="text"
											name=""
											id=""
										/>
									</div>
								</div>
							</div>

							<div className="flex items-center gap-5 w-[21.5rem]">
								<div className="flex flex-col justify-center items-start gap-3 flex-1 rounded-xl bg-[#fff]">
									<p className="text-[#46494F] font-lexend text-xs font-normal">
										Phone (optional)
									</p>

									<div className="flex h-10 px-[1rem] items-center self-stretch rounded-lg border w-[10rem]">
										<input
											className="font-lexend text-sm font-normal outline-none w-full"
											type="text"
											name=""
										/>
									</div>
								</div>

								<div className="flex flex-col justify-center items-start gap-2 flex-1 rounded-xl bg-[#fff]">
									<p className="text-[#46494F] font-lexend text-xs font-normal">
										Email (optional)
									</p>

									<div className="flex h-10 px-[1rem] items-center self-stretch rounded-lg border w-[10rem]">
										<input
											className="font-lexend text-sm font-normal outline-none w-full"
											type="text"
											placeholder="johndoe@example.com"
										/>
									</div>
								</div>
							</div>

							<div className="flex pt-8 flex-col items-start gap-5 self-stretch w-[21.5rem] border-t">
								<div className="flex h-9 justify-center items-center gap-[0.625rem]">
									<div className="flex w-[1.375rem] h-[1.375rem] flex-col justify-center gap-2 rounded-[0.375rem] bg-[#fff] border"></div>
									<p className="font-lexend text-base font-normal">
										Ship to a different Address?
									</p>
								</div>

								<p className="font-lexend text-xs font-normal uppercase tracking-widest">
									Order Notes (optional)
								</p>

								<div className="flex h-[6.125rem] py-3 px-4 items-start gap-4 self-stretch rounded-lg border w-[21.5rem]">
									<textarea
										className="font-lexend text-sm
											font-normal outline-none w-full
											resize-none h-full"
										type="text"
										name=""
										id=""
										placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
								</div>
							</div>

							<div className="flex pt-8 flex-col items-start gap-5 self-stretch border-t w-[21.5rem]">
								<p className="font-lexend text-sm font-normal xxs:w-[20rem] sm:w-[37rem]">
									What would you like us to do if an Item is
									out of stock?
								</p>

								<select className="flex h-12 px-4 gap-4 self-stretch items-center justify-between rounded-lg border bg-[white] w-[21.5rem]">
									<option
										className="font-lexend text-sm font-normal"
										value="">
										Contact me (Without delay)
									</option>

									<img src={arrowDown} alt="" />
								</select>
							</div>

							<div className="flex pt-8 flex-col items-start self-stretch border-t  gap-5 w-[21.5rem]">
								<p className="font-lexend text-sm font-normal">
									Where did you hear About Us?
								</p>
								<textarea
									className="flex h-24 py-3 px-4 items-start gap-4 self-stretch rounded-lg border outline-none resize-none w-[21.5rem]"
									placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
							</div>
						</div>
					</div>

					{/* Second part */}
					<div className="flex p-6 flex-col items-start gap-5 flex-initial rounded-2xl border  mt-6 mx-4 pb-8 w-[21.5rem]">
						<div className="flex flex-col items-start gap-4 self-stretch">
							<div className="flex justify-between items-center self-stretch">
								<p className="font-lexend text-sm font-normal text-[#9D9EA2]">
									Subtotal
								</p>
								<p className="font-lexend text-sm font-normal">
									$260.00
								</p>
							</div>

							<div className="flex justify-between items-center self-stretch">
								<p className="font-lexend text-sm font-normal text-[#9D9EA2]">
									Shipping
								</p>
								<p className="font-lexend text-sm font-normal">
									Lagos, Nigeria
								</p>
							</div>

							<div className="flex justify-between items-center self-stretch">
								<p className="font-lexend text-sm font-normal text-[#9D9EA2]">
									Discount
								</p>
								<p className="font-lexend text-sm font-normal">
									$0.00
								</p>
							</div>

							<div className="flex justify-between items-center self-stretch">
								<p className="font-lexend text-sm font-normal text-[#9D9EA2]">
									Shipping Costs
								</p>
								<p className="font-lexend text-sm font-normal">
									$10.00
								</p>
							</div>

							<div className="flex justify-between items-center self-stretch">
								<p className="font-lexend text-base font-bold text-[#060709] leading-6">
									Total
								</p>
								<p className="font-lexend text-sm font-normal leading-5">
									$260.00
								</p>
							</div>
						</div>

						{/* The line */}
						<div className="w-[18.5rem] h-[0.0625rem] bg-[#F4F4F4]"></div>

						<div className="flex justify-between items-center self-stretch">
							<p className="font-lexend text-sm font-normal leading-5 text-[#9D9EA2]">
								Email Money Transfer
							</p>

							<img src={newClip} alt="" />
						</div>

						<div className="flex items-start gap-3 self-stretch">
							<div className="flex h-12 py-1 px-6 items-center flex-1 rounded-lg border bg-[#fff] w-32 xxs:p-2">
								<input
									className="outline-none font-lexend text-base font-normal leading-6 text-[#C8C9CB] w-full"
									type="text"
									placeholder="Coupon code"
								/>
							</div>

							<button className="flex h-12 py-2 px-5 justify-center items-center gap-2 rounded-[6.25rem] bg-[#F3FBF4]">
								<p className="font-lexend text-sm font-medium leading-5 text-[#17AF26]">
									Apply Coupon
								</p>
							</button>
						</div>

						{/* Another line */}
						<div className="w-[18.5rem] h-[0.0625rem] bg-[#F4F4F4]"></div>

						<article className="text-[#5E5F60] font-lexend text-sm font-normal leading-5">
							I confirm that my address is 100% correct and WILL
							NOT hold Top Shelf BC liable if this shipment is
							sent to an incorrect address. *
						</article>

						<p className="text-[#5E5F60] text-sm font-normal leading-5">
							Sign me up to receive email updates and news
							(optional)
						</p>

						{/* Points */}
						<div className="flex justify-between items-center self-stretch">
							<div className="flex items-center gap-2">
								<div className="flex w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] bg-[#F2BC1B]">
									<img src={dollar} alt="" />
								</div>

								<p className="font-lexend text-sm font-normal leading-5 text-[#9D9EA2]">
									Your point
								</p>

								<p className="text-[#060709] font-lexend text-sm font-normal leading-5">
									10.00
								</p>
							</div>

							<button className="flex w-[3.1rem] h-[1.5rem] p-[0.125rem] items-center gap-2 rounded-[6.25rem] bg-[#C8C9CB]">
								<img src={circle} alt="" />
							</button>
						</div>

						<Link
							className="flex h-[3.5rem] px-10 justify-center items-center gap-4 self-stretch rounded-[6.25rem] bg-[#C8C9CB] hover:bg-[#59935f] active:bg-[#17AF26] focus:bg-[#17AF26]"
							to="/success">
							<button>
								<p className="text-[#fff] font-lexend text-base font-medium leading-6  ">
									Place Order
								</p>
							</button>
						</Link>

						<div className="flex flex-col items-start gap-4 sm:mx-auto">
							<p className="text-[#5E5F60] font-lexend text-[0.75rem] font-light-[100px] tracking-tight leading-5 not-italic sm:mx-auto">
								SECURE PAYMENTS PROVIDED BY
							</p>
							<div className="flex items-start gap-3">
								<button className="flex w-[3.5rem] h-8 flex-col justify-center items-center gap-2 rounded-[0.375rem] border bg-[#fff]">
									<img src={group} alt="mastercard" />
								</button>

								<button className="flex w-[3.5rem] h-8 flex-col justify-center items-center gap-2 rounded-[0.375rem] border bg-[#fff]">
									<img src={visa} alt="visa" />
								</button>

								<button className="flex w-[3.5rem] h-8 flex-col justify-center items-center gap-2 rounded-[0.375rem] border bg-[#fff]">
									<img src={bitcoin} alt="" />
								</button>

								<button className="flex w-[3.5rem] h-8 flex-col justify-center items-center gap-2 rounded-[0.375rem] border bg-[#fff]">
									<img src={clip} alt="" />
								</button>
							</div>
						</div>
					</div>
				</main>
			</div>

			{/* Base styling ends */}

			{/* SM Breakpoint */}
			<div className="hidden sm:block">
				<div className="px-3 xs:px-6 py-3 flex justify-between items-center border-b">
					<div className="flex items-center gap-3">
						<img
							className="lg:hidden cursor-pointer"
							src={menu}
							alt="menu"
						/>
						<img src={Logo} alt="Logo" />
					</div>

					<div className="hidden items-start gap-2 lg:flex">
						<input
							className="font-lexend flex w-[25rem] h-[2.5rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] pl-[1.5rem] items-center gap-2 border border-b-[#F4F4F4] rounded-[6.25rem] outline-none"
							type="text"
							placeholder="Search"
						/>
						<div className="flex w-10 h-10 p-2 items-center justify-center gap-2 bg-[#17AF26] rounded-[6.25rem] cursor-pointer">
							<img
								className="w-[1.125rem] h-[1.125rem]"
								src={searchNormal}
								alt="search"
							/>
						</div>
					</div>
				</div>

				<div className="w-full h-[2.5rem] xxs:hidden"></div>

				{/* For small screen */}
				<div className="flex items-center gap-2 justify-center w-full py-3 px-6 xxs:px-4  lg:hidden ">
					<input
						className="font-lexend flex w-[25rem] h-[2.5rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] pl-[1.5rem] items-center gap-2 border border-[#F4F4F4] rounded-[6.25rem] outline-none font-normal"
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

				{/* Header */}
				<header className=" flex py-[1rem] px-[1.5rem] items-center gap-4 bg-[#F4F4F4] xs:justify-center">
					<div className="flex w-[1.875rem] h-[1.875rem] items-center justify-center gap-2 rounded-[6.25rem] bg-[#fff]">
						<img className="text-[#05422C]" src={Tick} alt="tick" />
					</div>

					<p className="text-[#060709] font-lexend text-sm font-medium">
						Shopping Cart
					</p>

					<div className="w-[2.46875rem] h-[0.0625rem] bg-[#C3D2CC]"></div>

					<div className="flex w-[1.875rem] h-[1.875rem] items-center justify-center gap-2 rounded-[6.25rem] bg-[#05422C]">
						<img
							className="flex w-[0.875rem] h-[0.875rem] justify-center items-center shrink-0"
							src={walletTwo}
							alt="wallet"
						/>
					</div>

					<div className="w-[2.46875rem] h-[0.0625rem] bg-[#C3D2CC]"></div>

					<div className="flex w-[1.875rem] h-[1.875rem] justify-center items-center gap-2 rounded-[6.25rem] bg-[#fff]">
						<img
							className="flex w-[0.875rem] h-[0.875rem] justify-center items-center shrink-0"
							src={ticketTwo}
							alt=""
						/>
					</div>
				</header>

				{/* Main section */}
				<main className="lg:flex lg:flex-row justify-between gap-[3rem] xxs:flex-col xxs:w-[22rem] lg:gap-8 xl:w-full xl:flex xl:justify-center xl:gap-4">
					{/* The form */}
					<div className="flex flex-col gap-3 p-4 w-[40rem] m-6 xxs:m-0">
						<div className="flex pb-6 justify-between items-center border-b xxs:w-[21rem] sm:w-[37rem] md:w-[45rem] lg:w-[36rem]">
							<div className="flex flex-row justify-center items-center gap-3">
								<button>
									<img
										className="flex w-6 h-6 justify-center items-center"
										src={left}
										alt=""
									/>
								</button>

								<p className="font-lexend text-xl font-normal text-[#060709]">
									Shipping
								</p>
							</div>

							<p>&#40;3&#41;</p>
						</div>

						<form action="" className="flex flex-col gap-5">
							<div className="flex items-start gap-5 self-stretch mt-8 xxs:w-[21rem] sm:w-[37rem] md:w-[45rem lg:w-[36rem]">
								<div className="flex flex-col">
									<p className="text-[#46494F] font-normal font-lexend ">
										First Name &#42;
									</p>

									<div className="flex h-[2.3rem] px-[1rem] items-center gap-4 self-stretch rounded-lg border w-[14.1rem] xxs:w-[10rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem]">
										<input
											className="font-lexend font-normal text-sm w-full outline-none"
											type="text"
										/>
									</div>
								</div>

								<div className="flex flex-col">
									<p className="text-[#46494F] font-normal font-lexend">
										Last Name &#42;
									</p>

									<div className="flex h-[2.3rem] px-[1rem] items-center gap-4 self-stretch rounded-lg border w-[14.5rem] xxs:w-[10rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem]">
										<input
											className="font-lexend font-normal text-sm w-full outline-none"
											type="text"
										/>
									</div>
								</div>
							</div>

							{/* Country */}

							<div className="flex flex-col justify-center items-start gap-2 self-stretch rounded-xl bg-[#fff]">
								<p className="text-[#46494F] font-lexend text-xs font-normal uppercase">
									Country / Region *
								</p>

								<div className="flex h-10  items-center gap-4 self-stretch rounded-lg border justify-between   px-4 xxs:w-[21rem] sm:w-[37rem] md:w-[45rem] lg:w-[36rem]">
									<input
										className="text-[#060709] font-lexend text-sm font-normal outline-none"
										type="text"
										name=""
										id=""
										placeholder="Nigeria"
									/>

									<img
										className="cursor-pointer"
										src={arrowDown}
										alt=""
									/>
								</div>
							</div>

							<div className="flex flex-col justify-center items-start gap-2 self-stretch">
								<p className="text-[#46494F] font-lexend text-xs font-normal">
									STATE
								</p>

								<div
									className="flex h-10 px-[1rem] items-center gap-4 self-stretch rounded-lg border xxs:w-[21rem] sm:w-[37rem] md:w-[45rem]
								 lg:w-[36rem]">
									<input
										className="font-lexend text-sm font-normal outline-none w-full"
										type="text"
										name=""
										id=""
										placeholder="House number and street name"
									/>
								</div>

								<div className="flex h-10 px-[1rem] items-center gap-4 self-stretch rounded-lg border xxs:w-[21rem] sm:w-[37rem] md:w-[45rem] lg:w-[36rem]">
									<input
										className="font-lexend text-sm font-normal outline-none w-full"
										type="text"
										name=""
										id=""
										placeholder="Apartment, suite, unit, etc. (optional)"
									/>
								</div>
							</div>

							<div className="flex items-start gap-4 self-stretch xxs:flex xxs:flex-col">
								<div className="flex flex-col justify-center items-start gap-2 flex-1 rounded-xl bg-[#fff]">
									<p className="font-lexend text-xs font-normal">
										Town / City *
									</p>
									<div className="flex px-4 items-center gap-4 self-stretch rounded-lg border w-36 h-10 xxs:w-[21rem] sm:w-[37rem] md:w-[45rem] lg:w-[36rem]">
										<input
											className="font-lexend text-sm font-normal outline-none w-full"
											type="text"
											name=""
											id=""
										/>
									</div>
								</div>

								<div className="flex flex-col justify-center items-start gap-2 flex-1 rounded-xl bg-[#fff]">
									<p className="font-lexend text-xs font-normal">
										Province *
									</p>
									<div className="flex px-4 items-center gap-4 self-stretch rounded-lg border w-36 h-10 justify-between xxs:w-[21rem] sm:w-[37rem] md:w-[45rem] lg:w-[36rem]">
										<input
											className="font-lexend text-sm font-normal outline-none w-full"
											type="text"
											name=""
											id=""
										/>

										<img src={arrowDown} alt="" />
									</div>

									<div className="flex flex-col justify-center items-start gap-2 flex-1 rounded-xl bg-[#fff]">
										<p className="font-lexend text-xs font-normal">
											Postcode / ZIP *
										</p>
										<div className="flex h-10 px-4 items-center gap-4 self-stretch rounded-lg border w-40 xxs:w-[21rem] sm:w-[37rem] md:w-[45rem] lg:w-[36rem]">
											<input
												className="font-lexend text-sm font-normal outline-none w-full "
												type="text"
												name=""
												id=""
											/>
										</div>
									</div>
								</div>

								<div className="flex items-start gap-5 xxs:w-[21rem] sm:w-[37rem] md:w-[45rem] lg:w-[36rem]">
									<div className="flex flex-col justify-center items-start gap-2 flex-1 rounded-xl bg-[#fff]">
										<p className="text-[#46494F] font-lexend text-xs font-normal">
											Phone (optional)
										</p>

										<div className="flex h-10 px-[1rem] items-center self-stretch rounded-lg border xxs:w-[10rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem]">
											<input
												className="font-lexend text-sm font-normal outline-none w-full"
												type="text"
												name=""
											/>
										</div>
									</div>

									<div className="flex flex-col justify-center items-start gap-2 flex-1 rounded-xl bg-[#fff]">
										<p className="text-[#46494F] font-lexend text-xs font-normal">
											Email (optional)
										</p>

										<div className="flex h-10 px-[1rem] items-center self-stretch rounded-lg border xxs:w-[10rem] sm:w-[18rem] md:w-[22rem] lg:w-[17rem]">
											<input
												className="font-lexend text-sm font-normal outline-none w-full"
												type="text"
												placeholder="johndoe@example.com"
											/>
										</div>
									</div>
								</div>

								<div className="flex pt-8 flex-col items-start gap-5 self-stretch xxs:w-[21rem] sm:w-[37rem] md:w-[45rem] lg:w-[36rem] border-t">
									<div className="flex h-9 justify-center items-center gap-[0.625rem]">
										<div className="flex w-[1.375rem] h-[1.375rem] flex-col justify-center gap-2 rounded-[0.375rem] bg-[#fff] border"></div>
										<p className="font-lexend text-base font-normal">
											Ship to a different Address?
										</p>
									</div>

									<p className="font-lexend text-xs font-normal uppercase tracking-widest">
										Order Notes (optional)
									</p>

									<div className="flex h-[6.125rem] py-3 px-4 items-start gap-4 self-stretch rounded-lg border xxs:w-[21rem] sm:w-[37rem] md:w-[45rem] lg:w-[36rem]">
										<textarea
											className="font-lexend text-sm
											font-normal outline-none w-full
											resize-none h-full"
											type="text"
											name=""
											id=""
											placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
									</div>
								</div>

								<div className="flex pt-8 flex-col items-start gap-5 self-stretch border-t xxs:w-[21rem] sm:w-[37rem] md:w-[45rem] lg:w-[36rem]">
									<p className="font-lexend text-sm font-normal xxs:w-[20rem] sm:w-[37rem]">
										What would you like us to do if an Item
										is out of stock?
									</p>

									<select className="flex h-12 px-4 gap-4 self-stretch items-center justify-between rounded-lg border bg-[white] xxs:w-[21rem] sm:w-[37rem] md:w-[45rem] lg:w-[36rem]">
										<option
											className="font-lexend text-sm font-normal"
											value="">
											Contact me (Without delay)
										</option>

										<img src={arrowDown} alt="" />
									</select>
								</div>

								<div className="flex pt-8 flex-col items-start self-stretch border-t  gap-5 xxs:w-[21rem] sm:w-[37rem] md:w-[45rem] lg:w-[36rem]">
									<p className="font-lexend text-sm font-normal">
										Where did you hear About Us?
									</p>
									<textarea
										className="flex h-24 py-3 px-4 items-start gap-4 self-stretch rounded-lg border outline-none resize-none xxs:w-[21rem] sm:w-[37rem] md:w-[45rem] lg:w-[36rem]"
										placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
								</div>
							</div>
						</form>
					</div>

					{/* The second part */}
					<div className="flex p-6 flex-col items-start gap-5 flex-initial rounded-2xl border w-96  mt-6 mx-12 xxs:mx-4 pb-8 xxs:w-[21rem] sm:w-[37rem] md:w-[45rem] lg:w-[22rem] lg:h-[47rem] xl:w-[27rem]">
						<div className="flex flex-col items-start gap-4 self-stretch">
							<div className="flex justify-between items-center self-stretch">
								<p className="font-lexend text-sm font-normal text-[#9D9EA2]">
									Subtotal
								</p>
								<p className="font-lexend text-sm font-normal">
									$260.00
								</p>
							</div>

							<div className="flex justify-between items-center self-stretch">
								<p className="font-lexend text-sm font-normal text-[#9D9EA2]">
									Shipping
								</p>
								<p className="font-lexend text-sm font-normal">
									Lagos, Nigeria
								</p>
							</div>

							<div className="flex justify-between items-center self-stretch">
								<p className="font-lexend text-sm font-normal text-[#9D9EA2]">
									Discount
								</p>
								<p className="font-lexend text-sm font-normal">
									$0.00
								</p>
							</div>

							<div className="flex justify-between items-center self-stretch">
								<p className="font-lexend text-sm font-normal text-[#9D9EA2]">
									Shipping Costs
								</p>
								<p className="font-lexend text-sm font-normal">
									$10.00
								</p>
							</div>

							<div className="flex justify-between items-center self-stretch">
								<p className="font-lexend text-base font-bold text-[#060709] leading-6">
									Total
								</p>
								<p className="font-lexend text-sm font-normal leading-5">
									$260.00
								</p>
							</div>
						</div>

						{/* The line */}
						<div className="w-[20rem] h-[0.0625rem] bg-[#F4F4F4] md:w-[19rem]"></div>

						<div className="flex justify-between items-center self-stretch">
							<p className="font-lexend text-sm font-normal leading-5 text-[#9D9EA2]">
								Email Money Transfer
							</p>

							<img src={newClip} alt="" />
						</div>

						<div className="flex items-start gap-3 self-stretch">
							<div className="flex h-12 py-1 px-6 items-center flex-1 rounded-lg border bg-[#fff] w-32 xxs:p-2">
								<input
									className="outline-none font-lexend text-base font-normal leading-6 text-[#C8C9CB] w-full"
									type="text"
									placeholder="Coupon code"
								/>
							</div>

							<button className="flex h-12 py-2 px-5 justify-center items-center gap-2 rounded-[6.25rem] bg-[#F3FBF4]">
								<p className="font-lexend text-sm font-medium leading-5 text-[#17AF26]">
									Apply Coupon
								</p>
							</button>
						</div>

						{/* Another line */}
						<div className="w-[23rem] h-[0.0625rem] bg-[#F4F4F4]  md:w-[19rem]"></div>

						<article className="text-[#5E5F60] font-lexend text-sm font-normal leading-5">
							I confirm that my address is 100% correct and WILL
							NOT hold Top Shelf BC liable if this shipment is
							sent to an incorrect address. *
						</article>

						<p className="text-[#5E5F60] text-sm font-normal leading-5">
							Sign me up to receive email updates and news
							(optional)
						</p>

						{/* Points */}
						<div className="flex justify-between items-center self-stretch">
							<div className="flex items-center gap-2">
								<div className="flex w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] bg-[#F2BC1B]">
									<img src={dollar} alt="" />
								</div>

								<p className="font-lexend text-sm font-normal leading-5 text-[#9D9EA2]">
									Your point
								</p>

								<p className="text-[#060709] font-lexend text-sm font-normal leading-5">
									10.00
								</p>
							</div>

							<button className="flex w-[3.1rem] h-[1.5rem] p-[0.125rem] items-center gap-2 rounded-[6.25rem] bg-[#C8C9CB]">
								<img src={circle} alt="" />
							</button>
						</div>

						<Link
							className="flex h-[3.5rem] px-10 justify-center items-center gap-4 self-stretch rounded-[6.25rem] bg-[#C8C9CB] hover:bg-[#59935f] active:bg-[#17AF26] focus:bg-[#17AF26]"
							to="/success">
							<button>
								<p className="text-[#fff] font-lexend text-base font-medium leading-6  ">
									Place Order
								</p>
							</button>
						</Link>

						<div className="flex flex-col items-start gap-4 sm:mx-auto">
							<p className="text-[#5E5F60] font-lexend text-[0.75rem] font-light-[100px] tracking-tight leading-5 not-italic sm:mx-auto">
								SECURE PAYMENTS PROVIDED BY
							</p>
							<div className="flex items-start gap-3">
								<button className="flex w-[3.5rem] h-8 flex-col justify-center items-center gap-2 rounded-[0.375rem] border bg-[#fff]">
									<img src={group} alt="mastercard" />
								</button>

								<button className="flex w-[3.5rem] h-8 flex-col justify-center items-center gap-2 rounded-[0.375rem] border bg-[#fff]">
									<img src={visa} alt="visa" />
								</button>

								<button className="flex w-[3.5rem] h-8 flex-col justify-center items-center gap-2 rounded-[0.375rem] border bg-[#fff]">
									<img src={bitcoin} alt="" />
								</button>

								<button className="flex w-[3.5rem] h-8 flex-col justify-center items-center gap-2 rounded-[0.375rem] border bg-[#fff]">
									<img src={clip} alt="" />
								</button>
							</div>
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default Checkout;
