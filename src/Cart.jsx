import { Link } from "react-router-dom";
import cartBag from "./assets/cartBag.svg";
import wallet from "./assets/wallet.svg";
import ticketTwo from "./assets/ticketTwo.svg";
import smallTyre from "./assets/smallTyre.svg";
import closeCircle from "./assets/closeCircle.svg";
import transaction from "./assets/transaction.svg";
import box from "./assets/box.svg";
import truckTime from "./assets/truckTime.svg";
import group from "./assets/group.svg";
import visa from "./assets/visa.svg";
import bitcoin from "./assets/bitcoin.svg";
import clip from "./assets/clip.svg";
import menu from "./assets/menu.svg";
import Logo from "./assets/Logo.svg";
import searchNormal from "./assets/searchNormal.png";

const Cart = () => {
	return (
		<>
			{/* Navbar */}
			{/* For large screen */}
			<div className="px-3 xs:px-6 py-3 flex justify-between items-center lg:border-b">
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

			<div className="w-full h-[2.5rem] hidden lg:block"></div>

			{/* For small screen */}
			<div className=" items-center gap-2 flex justify-center w-full py-3 px-6 xxs:px-4 border-t lg:hidden ">
				<input
					className="font-lexend flex w-[25rem] h-[2.5rem] pt-[0.25rem] pr-[0.25rem] pb-[0.25rem] pl-[1.5rem] items-center gap-2 border border-[#F4F4F4] rounded-[6.25rem] outline-none font-normal xxs:w-[15rem] xs:w-[21rem]"
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
				<div className="flex w-[1.875rem] h-[1.875rem] items-center justify-center gap-2 rounded-[6.25rem] bg-[#05422C]">
					<img src={cartBag} alt="" />
				</div>

				<p className="text-[#060709] font-lexend text-sm font-medium">
					Shopping Cart
				</p>

				<div className="w-[2.46875rem] h-[0.0625rem] bg-[#C3D2CC]"></div>

				<div className="flex w-[1.875rem] h-[1.875rem] items-center justify-center gap-2 rounded-[6.25rem] bg-[#fff]">
					<img
						className="flex w-[0.875rem] h-[0.875rem] justify-center items-center shrink-0"
						src={wallet}
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

			{/* Large screen */}

			<section className="hidden lg:flex lg:flex-row gap-[3rem] py-8 px-[3rem] justify-between xl:flex xl:flex-row xl:gap-16 xl:justify-between xl:ml-14 xl:mr-16">
				<div className="w-[34rem] flex flex-col xl:w-[37rem]">
					<div className="flex pb-4 justify-between items-center self-stretch border-b">
						<p className="text-[#060709] font-lexend text-[1.25rem] font-normal">
							Your Cart
						</p>

						<p className="text-[#9D9EA2] font-lexend text-sm font-light">
							&#40;3&#41;
						</p>
					</div>

					{/* Main */}
					<div className="flex flex-col items-end gap-4 self-stretch ">
						{/* First part */}
						<div className="flex pb-4 items-start gap-4 self-stretch border-b mt-4">
							{/* The image */}
							<div className="flex w-14 h-14 justify-center items-center gap-2 rounded-[0.375rem] border bg-[#fff]">
								<img src={smallTyre} alt="tyre" />
							</div>

							{/* Items purchased */}
							<div className="flex flex-col items-start gap-4 flex-1">
								{/* First Item */}
								<div className="flex items-center gap-6 self-stretch">
									<div className="flex flex-col items-start gap-[0.375rem] flex-1">
										<p className="text-[#1A1E26] font-lexend text-[0.875rem] font-medium">
											Michelin Primacy MXM4
										</p>

										<div className="flex w-20 items-start gap-3">
											<p className="text-[#9D9EA2] font-lexend text-[0.875rem] font-light">
												2x
											</p>

											<p className="text-[#5E5F60] font-lexend text-[0.875rem] font-normal">
												$80.00
											</p>
										</div>
									</div>
									<div className="flex w-20 flex-col justify-between items-end self-stretch">
										<img
											src={closeCircle}
											alt="close circle"
										/>
										<p className="text-[#060709] font-lexend text-sm font-normal">
											$160.00
										</p>
									</div>
								</div>
								{/* Second Item */}
								<div className="flex items-center gap-6 self-stretch">
									<div className="flex flex-col items-start gap-[0.375rem] flex-1">
										<p className="text-[#1A1E26] font-lexend text-[0.875rem] font-medium">
											Toyo Proxes 4 Plus
										</p>

										<div className="flex w-20 items-start gap-3">
											<p className="text-[#9D9EA2] font-lexend text-[0.875rem] font-light">
												1x
											</p>

											<p className="text-[#5E5F60] font-lexend text-[0.875rem] font-normal">
												$30.00
											</p>
										</div>
									</div>
									<div className="flex w-20 flex-col justify-between items-end self-stretch">
										<img
											src={closeCircle}
											alt="close circle"
										/>
										<p className="text-[#060709] font-lexend text-sm font-normal">
											$30.00
										</p>
									</div>
								</div>
								{/* Third item */}

								<div className="flex items-center gap-6 self-stretch">
									<div className="flex flex-col items-start gap-[0.375rem] flex-1">
										<p className="text-[#1A1E26] font-lexend text-[0.875rem] font-medium">
											Michelin Premier LTX
										</p>

										<div className="flex w-20 items-start gap-3">
											<p className="text-[#9D9EA2] font-lexend text-[0.875rem] font-light">
												1x
											</p>

											<p className="text-[#5E5F60] font-lexend text-[0.875rem] font-normal">
												$60.00
											</p>
										</div>
									</div>
									<div className="flex w-20 flex-col justify-between items-end self-stretch">
										<img
											src={closeCircle}
											alt="close circle"
										/>
										<p className="text-[#060709] font-lexend text-sm font-normal">
											$60.00
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Total */}
						<div className="flex pb-4 pl-[4.5rem] justify-between items-center self-stretch border-b">
							<p className="font-lexend text-sm font-normal text-[#060709]">
								TOTAL
							</p>

							<p className="text-[#EB2606] text-[1.25rem] font-lexend font-medium">
								$250.00
							</p>
						</div>
					</div>

					{/* Put it here */}
					<div className="flex flex-row justify-between mt-4 ">
						<p className="font-lexend text-[1rem] font-normal text-[#17AF26]">
							Delivery
						</p>

						<p className="font-lexend text-[1rem] font-normal self-stretch text-[#17AF26]">
							Free Returns
						</p>
					</div>

					{/* Delevery Part */}

					<div className="flex flex-row gap-4 mt-4">
						<div className="flex p-4 flex-col items-start gap-4 rounded-xl border bg-[#fff] flex-auto">
							<div className="flex w-[3rem] h-[3rem] justify-center items-center gap-2 rounded-[6.25rem] text-[#F2F6F4]">
								<img
									className="flex w-[1.375rem] h-[1.375rem] justify-center items-center shrink-0"
									src={transaction}
									alt=""
								/>
							</div>

							<p className="font-lexend text-[1rem] font-medium text-[#1A1E26]">
								Order by 10pm for free next day delivery on
								Orders overs $100
							</p>

							<p className="text-[#5E5F60] font-lexend text-sm font-normal">
								We deliver Monday to Saturday - excluding
								Holidays
							</p>
						</div>

						<div className="flex p-4 flex-col items-start gap-4 rounded-xl border bg-[#fff] flex-initial">
							<div className="flex w-[3rem] h-[3rem] justify-center items-center gap-2 rounded-[6.25rem] bg-[#F2F6F4]">
								<img
									className="flex w-[1.375rem] h-[1.375rem] justify-center items-center shrink-0"
									src={box}
									alt="box"
								/>
							</div>

							<p className="font-lexend text-[1rem] font-medium text-[#1A1E26]">
								Free next day delivery to stores.
							</p>

							<p className="text-[#5E5F60] font-lexend text-sm font-normal">
								Home delivery is $4.99 for orders under $100 and
								is FREE for all orders over $100
							</p>
						</div>

						{/* Free returns */}

						<div className="flex flex-row items-start gap-4 flex-initial">
							<div className="flex p-4 flex-col items-start gap-4 self-stretch rounded-xl border bg-[#fff]">
								<div className="flex w-[3rem] h-[3rem] justify-center items-center gap-2 rounded-[6.25rem] bg-[#F2F6F4]">
									<img
										className="flex w-[1.375rem] h-[1.375rem] justify-center items-center shrink-0"
										src={truckTime}
										alt=""
									/>
								</div>

								<p className="font-lexend text-sm font-normal text-[#5E5F60]">
									30 days to return it to us for a refund. We
									have made returns SO EASY - you can now
									return your order to a store or send it with
									FedEx FOR FREE
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Delivery and free return */}

				{/* Second part large screen */}
				<div className="xl:w-[35%]">
					<div className="flex p-5 flex-col items-start gap-5 self-stretch rounded-2xl border ">
						<ul className="flex flex-col items-start gap-4 self-stretch">
							<li className="flex justify-between items-center self-stretch">
								<span className="text-[#9D9EA2] font-lexend text-sm font-normal">
									Subtotal
								</span>
								<span className="text-[#060709] text-sm font-normal font-lexend">
									$497.00
								</span>
							</li>

							<li className="flex justify-between items-center self-stretch">
								<span className="text-[#9D9EA2] font-lexend text-sm font-normal">
									Discount
								</span>
								<span className="text-[#060709] text-sm font-normal font-lexend">
									$0.0
								</span>
							</li>

							<li className="flex justify-between items-center self-stretch">
								<span className="text-[#9D9EA2] font-lexend text-sm font-normal">
									Shipping Costs
								</span>
								<span className="text-[#060709] text-sm font-normal font-lexend">
									$10.00
								</span>
							</li>
						</ul>

						<div className="flex w-full items-start gap-4 justify-center xl:justify-between">
							<div className="flex h-[3rem] py-1 px-3 items-center gap-2 flex-1 rounded-lg border bg-[#fff]">
								<input
									className="font-lexend text-sm font-normal w-[6.375rem] outline-none"
									type="text"
									name=""
									id=""
									placeholder="Coupon code"
								/>
							</div>

							<div className="flex h-[3rem] py-2 px-5 justify-center items-center gap-2 rounded-[6.25rem] bg-[#F3FBF4]">
								<p className="font-lexend text-xs font-normal text-[#17AF26]">
									Apply Coupon
								</p>
							</div>
						</div>

						<div className="flex pt-4 flex-col items-start gap-4 self-stretch border-t">
							{/* Status bar */}
							<div className="flex h-[0.375rem] flex-col items-start gap-2 self-stretch rounded-[6.25rem] bg-[#F4F4F4] w-[18.875rem]">
								<div className="w-[13.4375rem] flex-1 rounded-[6.25rem] bg-[#17AF26]"></div>
							</div>

							<div className="flex flex-col items-start gap-[0.375rem] self-stretch">
								<p className="font-lexend text-sm font-normal">
									<span className="font-lexend text-[#5E5F60] text-sm font-medium">
										Get Free
									</span>
									&nbsp;Shipping&nbsp;
									<span className="font-lexend text-[#5E5F60] text-sm font-medium">
										for orders over&nbsp;
									</span>
									<span className="text-[#EB2606] font-lexend text-sm font-normal">
										$100.00
									</span>
								</p>

								<p className="text-[#1A1E26] font-lexend text-sm font-medium underline">
									Continue Shopping
								</p>
							</div>
						</div>

						<Link to="/checkout">
							<button className="flex h-12 px-10 justify-center items-center gap-4 self-stretch rounded-[6.25rem] bg-[#C8C9CB] focus:bg-[#17AF26] hover:bg-[#518c57] active:bg-[#17AF26] transition lg:ml-16 xl:ml-16 text-[#fff]">
								Place order
							</button>
						</Link>

						{/* <button className="flex h-12 px-10 justify-center items-center gap-4 self-stretch rounded-[6.25rem] bg-[#C8C9CB] hover:bg-[#17AF26] focus:bg-[#17AF26] active:bg-[#17AF26] transition">
								<p className="font-lexend text-sm font-medium text-[#fff]">
									Checkout
								</p>

								<div className="w-[0.0625rem] h-3 bg-[#fff]"></div>

								<p className="font-lexend text-sm font-medium text-[#fff]">
									$260.00
								</p>
							</button> */}

						{/* Just a line */}
						<div className="w-[18.875rem] h-[0.0625rem] bg-[#F4F4F4]"></div>

						<div className="flex flex-col items-start gap-4">
							<p className="text-[#5E5F60] font-lexend text-[0.75rem] font-light tracking-tight">
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
				</div>
			</section>

			{/* Large screen ends */}

			{/* Main section */}
			<section className="lg:hidden flex p-6 flex-col items-start gap-8 bg-[#fff]">
				{/* Head */}
				<div className="flex pb-4 justify-between items-center self-stretch border-b">
					<p className="text-[#060709] font-lexend text-[1.25rem] font-normal">
						Your Cart
					</p>

					<p className="text-[#9D9EA2] font-lexend text-sm font-light">
						&#40;3&#41;
					</p>
				</div>

				{/* Main */}
				<div className="flex flex-col items-end gap-4 self-stretch">
					{/* First part */}
					<div className="flex pb-4 items-start gap-4 self-stretch border-b">
						{/* The image */}
						<div className="flex w-14 h-14 justify-center items-center gap-2 rounded-[0.375rem] border bg-[#fff]">
							<img src={smallTyre} alt="tyre" />
						</div>

						{/* Items purchased */}
						<div className="flex flex-col items-start gap-4 flex-1">
							{/* First Item */}
							<div className="flex items-center gap-6 self-stretch">
								<div className="flex flex-col items-start gap-[0.375rem] flex-1">
									<p className="text-[#1A1E26] font-lexend text-[0.875rem] font-medium">
										Michelin Primacy MXM4
									</p>

									<div className="flex w-20 items-start gap-3">
										<p className="text-[#9D9EA2] font-lexend text-[0.875rem] font-light">
											2x
										</p>

										<p className="text-[#5E5F60] font-lexend text-[0.875rem] font-normal">
											$80.00
										</p>
									</div>
								</div>
								<div className="flex w-20 flex-col justify-between items-end self-stretch">
									<img src={closeCircle} alt="close circle" />
									<p className="text-[#060709] font-lexend text-sm font-normal">
										$160.00
									</p>
								</div>
							</div>
							{/* Second Item */}
							<div className="flex items-center gap-6 self-stretch">
								<div className="flex flex-col items-start gap-[0.375rem] flex-1">
									<p className="text-[#1A1E26] font-lexend text-[0.875rem] font-medium">
										Toyo Proxes 4 Plus
									</p>

									<div className="flex w-20 items-start gap-3">
										<p className="text-[#9D9EA2] font-lexend text-[0.875rem] font-light">
											1x
										</p>

										<p className="text-[#5E5F60] font-lexend text-[0.875rem] font-normal">
											$30.00
										</p>
									</div>
								</div>
								<div className="flex w-20 flex-col justify-between items-end self-stretch">
									<img src={closeCircle} alt="close circle" />
									<p className="text-[#060709] font-lexend text-sm font-normal">
										$30.00
									</p>
								</div>
							</div>
							{/* Third item */}

							<div className="flex items-center gap-6 self-stretch">
								<div className="flex flex-col items-start gap-[0.375rem] flex-1">
									<p className="text-[#1A1E26] font-lexend text-[0.875rem] font-medium">
										Michelin Premier LTX
									</p>

									<div className="flex w-20 items-start gap-3">
										<p className="text-[#9D9EA2] font-lexend text-[0.875rem] font-light">
											1x
										</p>

										<p className="text-[#5E5F60] font-lexend text-[0.875rem] font-normal">
											$60.00
										</p>
									</div>
								</div>
								<div className="flex w-20 flex-col justify-between items-end self-stretch">
									<img src={closeCircle} alt="close circle" />
									<p className="text-[#060709] font-lexend text-sm font-normal">
										$60.00
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Total */}
					<div className="flex pb-4 pl-[4.5rem] justify-between items-center self-stretch border-b">
						<p className="font-lexend text-sm font-normal text-[#060709]">
							TOTAL
						</p>

						<p className="text-[#EB2606] text-[1.25rem] font-lexend font-medium">
							$250.00
						</p>
					</div>
				</div>

				{/* Footer Section */}
				<div className="flex flex-col items-start pt-6 gap-5 self-stretch border-t">
					{/* Delevery Part */}
					<p className="font-lexend text-[1rem] font-normal text-[#17AF26]">
						Delivery
					</p>

					<div className="flex p-4 flex-col items-start gap-4 self-stretch rounded-xl border bg-[#fff]">
						<div className="flex w-[3rem] h-[3rem] justify-center items-center gap-2 rounded-[6.25rem] text-[#F2F6F4]">
							<img
								className="flex w-[1.375rem] h-[1.375rem] justify-center items-center shrink-0"
								src={transaction}
								alt=""
							/>
						</div>

						<p className="font-lexend text-[1rem] font-medium text-[#1A1E26]">
							Order by 10pm for free next day delivery on Orders
							overs $100
						</p>

						<p className="text-[#5E5F60] font-lexend text-sm font-normal">
							We deliver Monday to Saturday - excluding Holidays
						</p>
					</div>

					<div className="flex p-4 flex-col items-start gap-4 self-stretch rounded-xl border bg-[#fff]">
						<div className="flex w-[3rem] h-[3rem] justify-center items-center gap-2 rounded-[6.25rem] bg-[#F2F6F4]">
							<img
								className="flex w-[1.375rem] h-[1.375rem] justify-center items-center shrink-0"
								src={box}
								alt="box"
							/>
						</div>

						<p className="font-lexend text-[1rem] font-medium text-[#1A1E26]">
							Free next day delivery to stores.
						</p>

						<p className="text-[#5E5F60] font-lexend text-sm font-normal">
							Home delivery is $4.99 for orders under $100 and is
							FREE for all orders over $100
						</p>
					</div>

					{/* Free returns */}

					<div className="flex flex-col items-start gap-4 self-stretch">
						<p className="font-lexend text-[1rem] font-normal self-stretch text-[#17AF26]">
							Free Returns
						</p>

						<div className="flex p-4 flex-col items-start gap-4 self-stretch rounded-xl border bg-[#fff]">
							<div className="flex w-[3rem] h-[3rem] justify-center items-center gap-2 rounded-[6.25rem] bg-[#F2F6F4]">
								<img
									className="flex w-[1.375rem] h-[1.375rem] justify-center items-center shrink-0"
									src={truckTime}
									alt=""
								/>
							</div>

							<p className="font-lexend text-sm font-normal text-[#5E5F60]">
								30 days to return it to us for a refund. We have
								made returns SO EASY - you can now return your
								order to a store or send it with FedEx FOR FREE
							</p>
						</div>
					</div>
				</div>

				{/* Discount section */}
				<div className="flex p-5 flex-col items-start gap-5 self-stretch rounded-2xl border">
					<ul className="flex flex-col items-start gap-4 self-stretch">
						<li className="flex justify-between items-center self-stretch">
							<span className="text-[#9D9EA2] font-lexend text-sm font-normal">
								Subtotal
							</span>
							<span className="text-[#060709] text-sm font-normal font-lexend">
								$250.00
							</span>
						</li>

						<li className="flex justify-between items-center self-stretch">
							<span className="text-[#9D9EA2] font-lexend text-sm font-normal">
								Discount
							</span>
							<span className="text-[#060709] text-sm font-normal font-lexend">
								$0.0
							</span>
						</li>

						<li className="flex justify-between items-center self-stretch">
							<span className="text-[#9D9EA2] font-lexend text-sm font-normal">
								Shipping Costs
							</span>
							<span className="text-[#060709] text-sm font-normal font-lexend">
								$10.00
							</span>
						</li>
					</ul>

					<div className="flex items-start gap-4 justify-center xl:items-center xl:justify-between w-full ">
						<div className="flex h-[3rem] py-1 px-3 items-center gap-2 flex-1 rounded-lg border bg-[#fff] max-w-36">
							<input
								className="font-lexend text-sm font-normal w-[6.375rem] outline-none"
								type="text"
								name=""
								id=""
								placeholder="Coupon code"
							/>
						</div>

						<div className="flex h-[3rem] py-2 px-5 justify-center items-center gap-2 rounded-[6.25rem] bg-[#F3FBF4]">
							<p className="font-lexend text-xs font-normal text-[#17AF26]">
								Apply Coupon
							</p>
						</div>
					</div>

					<div className="flex pt-4 flex-col items-start gap-4 self-stretch border-t">
						{/* Status bar */}
						<div className="flex h-[0.375rem] flex-col items-start gap-2 self-stretch rounded-[6.25rem] bg-[#F4F4F4]  xxs:w-[17.2rem] sm:w-[34.5rem] md:w-[42.7rem]">
							<div className=" flex-1 rounded-[6.25rem] bg-[#17AF26] xxs:w-[11rem] sm:w-[20rem] md:w-[27rem]"></div>
						</div>

						<div className="flex flex-col items-start gap-[0.375rem] self-stretch">
							<p className="font-lexend text-sm font-normal">
								<span className="font-lexend text-[#5E5F60] text-sm font-medium">
									Get Free
								</span>
								&nbsp;Shipping&nbsp;
								<span className="font-lexend text-[#5E5F60] text-sm font-medium">
									for orders over&nbsp;
								</span>
								<span className="text-[#EB2606] font-lexend text-sm font-normal">
									$100.00
								</span>
							</p>

							<p className="text-[#1A1E26] font-lexend text-sm font-medium underline">
								Continue Shopping
							</p>
						</div>
					</div>

					<Link to="/checkout">
						<button className="flex h-12 px-10 justify-center items-center gap-4 self-stretch rounded-[6.25rem] bg-[#C8C9CB] hover:bg-[#518c57] focus:bg-[#17AF26] w-full active:bg-[#17AF26] transition xxs:ml-12 sm:ml-[9rem] md:ml-[11rem] text-[#fff]">
							Place order
						</button>
					</Link>

					{/* <button className="flex h-12 px-10 justify-center items-center gap-4 self-stretch rounded-[6.25rem] bg-[#C8C9CB] focus:bg-[#17AF26] active:bg-[#17AF26] transition">
						<p className="font-lexend text-sm font-medium text-[#fff]">
							Checkout
						</p>

						<div className="w-[0.0625rem] h-3 bg-[#fff]"></div>

						<p className="font-lexend text-sm font-medium text-[#fff]">
							$260.00
						</p>
					</button> */}
					{/* Just a line */}
					<div className="w-[18.875rem] h-[0.0625rem] bg-[#F4F4F4] sm:w-[34rem] md:w-[42.7rem]"></div>

					<div className="flex flex-col items-start gap-4 sm:flex sm:flex-row sm:justify-center sm:items-center md:mx-auto">
						<p className="text-[#5E5F60] font-lexend text-[0.75rem] font-light tracking-tight">
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
			</section>
		</>
	);
};

export default Cart;
