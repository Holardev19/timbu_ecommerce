import { Link } from "react-router-dom";
import arrowDown from "./assets/arrowDown.svg";
import imageOne from "./assets/imageOne.svg";
import star from "./assets/star.svg";
import imageTwo from "./assets/imageTwo.svg";
import imageThree from "./assets/imageThree.svg";
import imageFour from "./assets/imageFour.svg";
import imageFive from "./assets/imageFive.png";
import imageSix from "./assets/imageSix.svg";
import imageSeven from "./assets/imageSeven.svg";
import imageEight from "./assets/imageEight.svg";
import arrowRight from "./assets/arrowRight.svg";
import arrowLeft from "./assets/arrowLeft.svg";

const Shopresponsive = () => {
	const generalInfo = [
		{
			text: "Tyre size",
			rating: "4.6/5",
			numberReviews: 135,
			R: "Reviews",
		},
	];

	const tyreNames = [
		"Michelin",
		"Falken",
		"Toyo",
		"Yokohama",
		"Continental",
		"Pirelli",
		"Hankook",
		"Dunlop",
		"Bridgestone",
	];

	const fullNames = [
		"Michelin Primacy MXM4",
		"Falken Ziex ZE950 A/S",
		"Toyo Proxes 4 Plus",
		"Michelin Premier LTX",
		"Yokohama AVID Ascend GT",
		"Continental TrueContact Tour",
		"Pirelli P Zero",
		"Hankook Ventus V12 evo2",
		"Dunlop Signature HP",
		"Falken Azenis FK510",
		"Pirelli Cinturato P7",
		"Bridgestone Turanza QuietTrack",
	];

	const models = [
		"2020 BMW Series",
		"2013 Nissan Altima",
		"2022 Chevrolet Malibu",
		"2019 Lexus RX",
		"2014 Subaru Outback",
		"2017 Toyota Camry ",
		"2018 Mercedes-Benz GLC",
		"2020 Lexus ES",
		"2018 Toyota Camry",
		"2019 Mercedes-Benz E-Class",
	];

	const idNumber = [
		"215/55R17",
		"235/55R20",
		"225/60R17",
		"215/55R17",
		"235/55R19",
		"225/45R18",
		"225/45R17",
	];

	const prices = [
		"$100.00",
		"$80.00",
		"$40.00",
		"$30.00",
		"$60.00",
		"$20.00",
		"$70.00",
	];

	const button = "Add to Cart";

	const productList = document.getElementById("productList");

	function scrollLeft() {
		productList.scrollBy({ left: 500, behavior: "smooth" });
	}

	function scrollRight() {
		productList.scrollBy({ left: -500, behavior: "smooth" });
	}

	return (
		<>
			<div className="hidden sm:block lg:hidden mt-10">
				{/* Header */}
				<header className="flex pr-6 pb-4 pl-6 justify-between items-center border-b">
					<p className="text-[#1A1E26] text-base font-normal font-lexend">
						Tyres
					</p>

					<button className="flex h-[2.125rem] px-[0.875rem] justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
						<p className="">Filter</p>
						<img src={arrowDown} alt="" />
					</button>
				</header>

				<article className="mt-6 ml-6 mr-6 text-[#5E5F60] font-lexend text-sm font-normal self-stretch">
					Choosing the right tyres is crucial for vehicle performance,
					safety, and comfort. Our online store offers a comprehensive
					selection of high-quality tyres from top brands such as
					Michelin, Bridgestone, Goodyear, Continental, Pirelli, and
					more. Whether you drive a sedan, SUV, or sports car, we have
					the perfect tyres to suit your specific needs and
					preferences.Our tyre inventory includes options for various
					driving conditions and requirements. From all-season tyres
					that offer reliable performance year-round to
					high-performance tyres designed for superior grip and
					handling, we have it all. We also offer eco-friendly tyres
					with low rolling resistance for improved fuel efficiency and
					reduced environmental impact.
				</article>

				<section className="flex flex-col py-6 px-8 items-start gap-6 rounded-2xl bg-[#F2F6F4] mt-7 relative">
					<p className="text-[#060709] font-lexend text-2xl font-medium">
						Top Selling
					</p>

					<div
						className="flex py-1 items-center justify-center gap-8 self-stretch overflow-hidden"
						id="productList">
						<button
							onClick={scrollLeft}
							className="absolute left-[1rem] top-[50%] flex w-[2.25rem] h-[2.25rem] justify-center items-center gap-2 rounded-[6.25rem] bg-[#fff] shadow cursor-pointer sm:hidden">
							<img src={arrowLeft} alt="" />
						</button>

						<button
							onClick={scrollRight}
							className="absolute right-[1rem] top-[50%] flex w-[2.25rem] h-[2.25rem] justify-center items-center gap-2 rounded-[6.25rem] bg-[#fff] shadow cursor-pointer sm:hidden">
							<img src={arrowRight} alt="" />
						</button>

						{/* one */}
						<div className="flex flex-col p-y items-start gap-5 bg-[#fff]">
							{/* The image */}
							<div className="flex h-[15rem] justify-center items-center gap-2 self-stretch bg-[#f4f4f4]">
								<img
									className="w-[10.25rem] h-[10.25rem]"
									src={imageOne}
									alt=""
								/>
							</div>

							{/* The tyre name */}
							<div className="flex py-2 flex-col items-center gap-3 self-stretch">
								<p className="text-[#9D9EA2] items-center font-lexend font-light text-sm">
									{tyreNames[0]}
								</p>

								{/* The tyre full name */}
								<p className="text-[#1A1E26] items-center font-lexend text-[1rem] font-normal text-center px-2">
									{fullNames[0]}
								</p>

								{/* The tyre model */}
								<div className="flex h-7 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] bg-[#F2F6F4]">
									<p className="text-[#05422C] font-lexend text-xs font-bold">
										{models[0]}
									</p>
								</div>

								{/* Text and id number */}
								<div className="flex items-start gap-2">
									<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
										<p className="text-[#1A1E26] font-lexend text-[0.5rem] font-normal">
											{generalInfo[0].text}
										</p>
									</div>
									<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
										<p className="text-[#1A1E26] font-lexend text-xs font-normal">
											{idNumber[0]}
										</p>
									</div>
								</div>

								{/* Rating and review */}
								<div className="flex justify-center items-center gap-2 rounded-[6.25rem] bg-[#fff] px-2">
									<span className="flex">
										<img
											className="pr-1"
											src={star}
											alt=""
										/>

										{generalInfo[0].rating}
									</span>

									<div className="w-[0rem] h-3 bg-[#C8C9CB]"></div>

									<span>
										<span className="pr-1 text-[#060709] font-lexend text-sm font-normal">
											{generalInfo[0].numberReviews}
										</span>
										<span className="text-[#C8C9CB] font-lexend text-sm font-normal">
											{generalInfo[0].R}
										</span>
									</span>
								</div>

								{/* Costs */}
								<div className="flex items-center gap-4">
									<span className="text-[#9D9EA2] font-lexend text-sm font-normal line-through">
										{prices[0]}
									</span>
									<span className="text-[#EB2606] font-lexend text-base font-normal">
										{prices[1]}
									</span>
								</div>

								{/* The button */}
								<div>
									<Link to="/cart">
										<button className="flex h-10 px-6 justify-center items-center gap-2 self-stretch rounded-[6.25rem] bg-[#17AF26] w-28">
											<p className="font-lexend text-sm font-medium text-[#fff]">
												{button}
											</p>
										</button>
									</Link>
								</div>
							</div>
						</div>

						{/* Two */}
						<div className="flex flex-col w-64 items-start gap-5 bg-[#fff]">
							{/* The image */}
							<div className="flex h-[15rem] justify-center items-center gap-2 self-stretch bg-[#f4f4f4]">
								<img
									className="w-[10.25rem] h-[10.25rem]"
									src={imageTwo}
									alt=""
								/>
							</div>

							{/* The tyre name */}
							<div className="flex py-2 flex-col items-center gap-3 self-stretch">
								<p className="text-[#9D9EA2] items-center font-lexend font-light text-sm">
									{tyreNames[1]}
								</p>

								{/* The tyre full name */}
								<p className="text-[#1A1E26] items-center font-lexend text-[1rem] font-normal text-center w-40">
									{fullNames[1]}
								</p>

								{/* The tyre model */}
								<div className="flex h-7 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] bg-[#F2F6F4]">
									<p className="text-[#05422C] font-lexend text-xs font-bold">
										{models[1]}
									</p>
								</div>

								{/* Text and id number */}
								<div className="flex items-start gap-1 px-2">
									<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
										<p className="text-[#1A1E26] font-lexend text-[0.5rem] font-normal">
											{generalInfo[0].text}
										</p>
									</div>
									<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
										<p className="text-[#1A1E26] font-lexend text-xs font-normal">
											{idNumber[0]}
										</p>
									</div>
								</div>

								{/* Rating and review */}
								<div className="flex justify-center items-center gap-2 px-2 rounded-[6.25rem] bg-[#fff]">
									<span className="flex">
										<img
											className="pr-1"
											src={star}
											alt=""
										/>
										{generalInfo[0].rating}
									</span>

									<div className="w-[0rem] h-3 bg-[#C8C9CB]"></div>

									<span>
										<span className="pr-1 text-[#060709] font-lexend text-sm font-normal">
											{generalInfo[0].numberReviews}
										</span>
										<span className="text-[#C8C9CB] font-lexend text-sm font-normal">
											{generalInfo[0].R}
										</span>
									</span>
								</div>

								{/* Costs */}
								<div className="flex items-center gap-4">
									<span className="text-[#EB2606] font-lexend text-base font-normal">
										{prices[2]}
									</span>
								</div>

								{/* The button */}
								<div>
									<Link to="/cart">
										<button className="flex h-10 px-6 justify-center items-center gap-2 self-stretch rounded-[6.25rem] bg-[#17AF26] w-[7rem]">
											<p className="font-lexend text-sm font-medium text-[#fff]">
												{button}
											</p>
										</button>
									</Link>
								</div>
							</div>
						</div>
						{/* Closing the second tag */}

						{/* third */}
						<div className="flex flex-col w-64 items-start gap-5 bg-[#fff]">
							{/* The image */}
							<div className="flex h-[15rem] justify-center items-center gap-2 self-stretch bg-[#f4f4f4]">
								<img
									className="w-[10.25rem] h-[10.25rem]"
									src={imageThree}
									alt=""
								/>
							</div>

							{/* The tyre name */}
							<div className="flex py-2 flex-col items-center gap-3 self-stretch">
								<p className="text-[#9D9EA2] items-center font-lexend font-light text-sm">
									{tyreNames[2]}
								</p>

								{/* The tyre full name */}
								<p className="text-[#1A1E26] text-center items-center px-2 font-lexend text-[1rem] font-normal w-[7rem]">
									{fullNames[2]}
								</p>

								{/* The tyre model */}
								<div className="flex h-7 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] bg-[#F2F6F4]">
									<p className="text-[#05422C] font-lexend text-xs font-bold">
										{models[2]}
									</p>
								</div>

								{/* Text and id number */}
								<div className="flex items-start gap-1 px-2">
									<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
										<p className="text-[#1A1E26] font-lexend text-[0.5rem] font-normal">
											{generalInfo[0].text}
										</p>
									</div>
									<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
										<p className="text-[#1A1E26] font-lexend text-xs font-normal">
											{idNumber[0]}
										</p>
									</div>
								</div>

								{/* Rating and review */}
								<div className="flex justify-center items-center gap-3 rounded-[6.25rem] bg-[#fff] px-2">
									<span className="flex">
										<img
											className="pr-1"
											src={star}
											alt=""
										/>
										{generalInfo[0].rating}
									</span>

									<div className="w-[0rem] h-3 bg-[#C8C9CB]"></div>

									<span>
										<span className="pr-1 text-[#060709] font-lexend text-sm font-normal">
											{generalInfo[0].numberReviews}
										</span>
										<span className="text-[#C8C9CB] font-lexend text-sm font-normal">
											{generalInfo[0].R}
										</span>
									</span>
								</div>

								{/* Costs */}
								<div className="flex items-center gap-4">
									<span className="text-[#9D9EA2] font-lexend text-sm font-normal line-through hidden">
										{prices[0]}
									</span>
									<span className="text-[#EB2606] font-lexend text-base font-normal">
										{prices[3]}
									</span>
								</div>

								{/* The button */}
								<div>
									<Link to="/cart">
										<button className="flex h-10 px-6 justify-center items-center gap-2 self-stretch rounded-[6.25rem] bg-[#17AF26] w-[7rem]">
											<p className="font-lexend text-sm font-medium text-[#fff]">
												{button}
											</p>
										</button>
									</Link>
								</div>
							</div>
						</div>
						{/* Third closing tag */}
					</div>
				</section>

				<section className="grid grid-cols-2 grid-rows-5 gap-[1rem] mt-6 place-items-center">
					{/* Product One */}
					<div className="flex flex-col w-64 items-start gap-5 bg-[#fff]">
						{/* The image */}
						<div className="flex h-[15rem] justify-center items-center gap-2 self-stretch bg-[#f4f4f4]">
							<img
								className="w-[10.25rem] h-[10.25rem]"
								src={imageFour}
								alt=""
							/>
						</div>

						{/* The tyre name */}
						<div className="flex py-2 flex-col items-center gap-3 self-stretch">
							<p className="text-[#9D9EA2] items-center font-lexend font-light text-sm">
								{tyreNames[0]}
							</p>

							{/* The tyre full name */}
							<p className="text-[#1A1E26] items-center font-lexend text-[0.75rem] font-normal px-2 w-">
								{fullNames[3]}
							</p>

							{/* The tyre model */}
							<div className="flex h-7 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] bg-[#F2F6F4]">
								<p className="text-[#05422C] font-lexend text-xs font-bold">
									{models[3]}
								</p>
							</div>

							{/* Text and id number */}
							<div className="flex items-start gap-2">
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{generalInfo[0].text}
									</p>
								</div>
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{idNumber[1]}
									</p>
								</div>
							</div>

							{/* Rating and review */}
							<div className="flex justify-center items-center gap-3 rounded-[6.25rem] bg-[#fff]">
								<span className="flex">
									<img className="pr-1" src={star} alt="" />
									{generalInfo[0].rating}
								</span>

								<div className="w-[0.0625rem] h-3 bg-[#C8C9CB]"></div>

								<span>
									<span className="pr-1 text-[#060709] font-lexend text-sm font-normal">
										{generalInfo[0].numberReviews}
									</span>
									<span className="text-[#C8C9CB] font-lexend text-sm font-normal">
										{generalInfo[0].R}
									</span>
								</span>
							</div>

							{/* Costs */}
							<div className="flex items-center gap-4">
								<span className="text-[#EB2606] font-lexend text-base font-normal">
									{prices[4]}
								</span>
							</div>

							{/* The button */}
							<div>
								<Link to="/cart">
									<button className="flex h-10 px-6 justify-center items-center w-[10em] gap-2 self-stretch rounded-[6.25rem] bg-[#17AF26]">
										<p className="font-lexend text-sm font-medium text-[#fff]">
											{button}
										</p>
									</button>
								</Link>
							</div>
						</div>
					</div>

					{/* Product Two */}

					<div className="flex flex-col w-64 items-start gap-5 bg-[#fff]">
						{/* The image */}
						<div className="flex h-[15rem] justify-center items-center gap-2 self-stretch bg-[#f4f4f4]">
							<img
								className="w-[10.25rem] h-[10.25rem]"
								src={imageFive}
								alt=""
							/>
						</div>

						{/* The tyre name */}
						<div className="flex py-2 flex-col items-center gap-3 self-stretch">
							<p className="text-[#9D9EA2] items-center font-lexend font-light text-sm">
								{tyreNames[3]}
							</p>

							{/* The tyre full name */}
							<p className="text-[#1A1E26] items-center font-lexend text-lg font-normal">
								{fullNames[4]}
							</p>

							{/* The tyre model */}
							<div className="flex h-7 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] bg-[#F2F6F4]">
								<p className="text-[#05422C] font-lexend text-xs font-bold">
									{models[4]}
								</p>
							</div>

							{/* Text and id number */}
							<div className="flex items-start gap-2">
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{generalInfo[0].text}
									</p>
								</div>
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{idNumber[2]}
									</p>
								</div>
							</div>

							{/* Rating and review */}
							<div className="flex justify-center items-center gap-3 rounded-[6.25rem] bg-[#fff]">
								<span className="flex">
									<img className="pr-1" src={star} alt="" />
									{generalInfo[0].rating}
								</span>

								<div className="w-[0.0625rem] h-3 bg-[#C8C9CB]"></div>

								<span>
									<span className="pr-1 text-[#060709] font-lexend text-sm font-normal">
										{generalInfo[0].numberReviews}
									</span>
									<span className="text-[#C8C9CB] font-lexend text-sm font-normal">
										{generalInfo[0].R}
									</span>
								</span>
							</div>

							{/* Costs */}
							<div className="flex items-center gap-4">
								<span className="text-[#EB2606] font-lexend text-base font-normal">
									{prices[5]}
								</span>
							</div>

							{/* The button */}
							<div>
								<Link to="/cart">
									<button className="flex h-10 px-6 justify-center items-center w-[10em] gap-2 self-stretch rounded-[6.25rem] bg-[#17AF26]">
										<p className="font-lexend text-sm font-medium text-[#fff]">
											{button}
										</p>
									</button>
								</Link>
							</div>
						</div>
					</div>

					{/* Product Three */}

					<div className="flex flex-col w-64 items-start gap-5 bg-[#fff]">
						{/* The image */}
						<div className="flex h-[15rem] justify-center items-center gap-2 self-stretch bg-[#f4f4f4]">
							<img
								className="w-[10.25rem] h-[10.25rem]"
								src={imageSix}
								alt=""
							/>
						</div>

						{/* The tyre name */}
						<div className="flex py-2 flex-col items-center gap-3 self-stretch">
							<p className="text-[#9D9EA2] items-center font-lexend font-light text-sm">
								{tyreNames[4]}
							</p>

							{/* The tyre full name */}
							<p className="text-[#1A1E26] items-center font-lexend text-lg font-normal">
								{fullNames[5]}
							</p>

							{/* The tyre model */}
							<div className="flex h-7 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] bg-[#F2F6F4]">
								<p className="text-[#05422C] font-lexend text-xs font-bold">
									{models[5]}
								</p>
							</div>

							{/* Text and id number */}
							<div className="flex items-start gap-2">
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{generalInfo[0].text}
									</p>
								</div>
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{idNumber[0]}
									</p>
								</div>
							</div>

							{/* Rating and review */}
							<div className="flex justify-center items-center gap-3 rounded-[6.25rem] bg-[#fff]">
								<span className="flex">
									<img className="pr-1" src={star} alt="" />
									{generalInfo[0].rating}
								</span>

								<div className="w-[0.0625rem] h-3 bg-[#C8C9CB]"></div>

								<span>
									<span className="pr-1 text-[#060709] font-lexend text-sm font-normal">
										{generalInfo[0].numberReviews}
									</span>
									<span className="text-[#C8C9CB] font-lexend text-sm font-normal">
										{generalInfo[0].R}
									</span>
								</span>
							</div>

							{/* Costs */}
							<div className="flex items-center gap-4">
								<span className="text-[#EB2606] font-lexend text-base font-normal">
									{prices[2]}
								</span>
							</div>

							{/* The button */}
							<div>
								<Link to="/cart">
									<button className="flex h-10 px-6 justify-center items-center w-[10em] gap-2 self-stretch rounded-[6.25rem] bg-[#17AF26]">
										<p className="font-lexend text-sm font-medium text-[#fff]">
											{button}
										</p>
									</button>
								</Link>
							</div>
						</div>
					</div>

					{/* Product four */}

					<div className="flex flex-col w-64 items-start gap-5 bg-[#fff]">
						{/* The image */}
						<div className="flex h-[15rem] justify-center items-center gap-2 self-stretch bg-[#f4f4f4]">
							<img
								className="w-[10.25rem] h-[10.25rem]"
								src={imageSeven}
								alt=""
							/>
						</div>

						{/* The tyre name */}
						<div className="flex py-2 flex-col items-center gap-3 self-stretch">
							<p className="text-[#9D9EA2] items-center font-lexend font-light text-sm">
								{tyreNames[5]}
							</p>

							{/* The tyre full name */}
							<p className="text-[#1A1E26] items-center font-lexend text-xl font-normal">
								{fullNames[6]}
							</p>

							{/* The tyre model */}
							<div className="flex h-7 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] bg-[#F2F6F4]">
								<p className="text-[#05422C] font-lexend text-xs font-bold">
									{models[6]}
								</p>
							</div>

							{/* Text and id number */}
							<div className="flex items-start gap-2">
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{generalInfo[0].text}
									</p>
								</div>
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{idNumber[4]}
									</p>
								</div>
							</div>

							{/* Rating and review */}
							<div className="flex justify-center items-center gap-3 rounded-[6.25rem] bg-[#fff]">
								<span className="flex">
									<img className="pr-1" src={star} alt="" />
									{generalInfo[0].rating}
								</span>

								<div className="w-[0.0625rem] h-3 bg-[#C8C9CB]"></div>

								<span>
									<span className="pr-1 text-[#060709] font-lexend text-sm font-normal">
										{generalInfo[0].numberReviews}
									</span>
									<span className="text-[#C8C9CB] font-lexend text-sm font-normal">
										{generalInfo[0].R}
									</span>
								</span>
							</div>

							{/* Costs */}
							<div className="flex items-center gap-4">
								<span className="text-[#EB2606] font-lexend text-base font-normal">
									{prices[6]}
								</span>
							</div>

							{/* The button */}
							<div>
								<Link to="/cart">
									<button className="flex h-10 px-6 justify-center items-center w-[10em] gap-2 self-stretch rounded-[6.25rem] bg-[#17AF26]">
										<p className="font-lexend text-sm font-medium text-[#fff]">
											{button}
										</p>
									</button>
								</Link>
							</div>
						</div>
					</div>

					{/* Product five */}
					<div className="flex flex-col w-64 items-start gap-5 bg-[#fff]">
						{/* The image */}
						<div className="flex h-[15rem] justify-center items-center gap-2 self-stretch bg-[#f4f4f4]">
							<img
								className="w-[10.25rem] h-[10.25rem]"
								src={imageEight}
								alt=""
							/>
						</div>

						{/* The tyre name */}
						<div className="flex py-2 flex-col items-center gap-3 self-stretch">
							<p className="text-[#9D9EA2] items-center font-lexend font-light text-sm">
								{tyreNames[6]}
							</p>

							{/* The tyre full name */}
							<p className="text-[#1A1E26] items-center font-lexend text-xl font-normal">
								{fullNames[7]}
							</p>

							{/* The tyre model */}
							<div className="flex h-7 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] bg-[#F2F6F4]">
								<p className="text-[#05422C] font-lexend text-xs font-bold">
									{models[7]}
								</p>
							</div>

							{/* Text and id number */}
							<div className="flex items-start gap-2">
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{generalInfo[0].text}
									</p>
								</div>
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{idNumber[5]}
									</p>
								</div>
							</div>

							{/* Rating and review */}
							<div className="flex justify-center items-center gap-3 rounded-[6.25rem] bg-[#fff]">
								<span className="flex">
									<img className="pr-1" src={star} alt="" />
									{generalInfo[0].rating}
								</span>

								<div className="w-[0.0625rem] h-3 bg-[#C8C9CB]"></div>

								<span>
									<span className="pr-1 text-[#060709] font-lexend text-sm font-normal">
										{generalInfo[0].numberReviews}
									</span>
									<span className="text-[#C8C9CB] font-lexend text-sm font-normal">
										{generalInfo[0].R}
									</span>
								</span>
							</div>

							{/* Costs */}
							<div className="flex items-center gap-4">
								<span className="text-[#EB2606] font-lexend text-base font-normal">
									{prices[5]}
								</span>
							</div>

							{/* The button */}

							<div>
								<Link to="/cart">
									<button className="flex h-10 px-6 justify-center items-center w-[10em] gap-2 self-stretch rounded-[6.25rem] bg-[#17AF26]">
										<p className="font-lexend text-sm font-medium text-[#fff]">
											{button}
										</p>
									</button>
								</Link>
							</div>
						</div>
					</div>

					{/* Product six */}

					<div className="flex flex-col w-64 items-start gap-5 bg-[#fff]">
						{/* The image */}
						<div className="flex h-[15rem] justify-center items-center gap-2 self-stretch bg-[#f4f4f4]">
							<img
								className="w-[10.25rem] h-[10.25rem]"
								src={imageEight}
								alt=""
							/>
						</div>

						{/* The tyre name */}
						<div className="flex py-2 flex-col items-center gap-3 self-stretch">
							<p className="text-[#9D9EA2] items-center font-lexend font-light text-sm">
								{tyreNames[7]}
							</p>

							{/* The tyre full name */}
							<p className="text-[#1A1E26] items-center font-lexend text-xl font-normal">
								{fullNames[8]}
							</p>

							{/* The tyre model */}
							<div className="flex h-7 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] bg-[#F2F6F4]">
								<p className="text-[#05422C] font-lexend text-xs font-bold">
									{models[8]}
								</p>
							</div>

							{/* Text and id number */}
							<div className="flex items-start gap-2">
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{generalInfo[0].text}
									</p>
								</div>
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{idNumber[0]}
									</p>
								</div>
							</div>

							{/* Rating and review */}
							<div className="flex justify-center items-center gap-3 rounded-[6.25rem] bg-[#fff]">
								<span className="flex">
									<img className="pr-1" src={star} alt="" />
									{generalInfo[0].rating}
								</span>

								<div className="w-[0.0625rem] h-3 bg-[#C8C9CB]"></div>

								<span>
									<span className="pr-1 text-[#060709] font-lexend text-sm font-normal">
										{generalInfo[0].numberReviews}
									</span>
									<span className="text-[#C8C9CB] font-lexend text-sm font-normal">
										{generalInfo[0].R}
									</span>
								</span>
							</div>

							{/* Costs */}
							<div className="flex items-center gap-4">
								<span className="text-[#EB2606] font-lexend text-base font-normal">
									{prices[5]}
								</span>
							</div>

							{/* The button */}
							<div>
								<Link to="/cart">
									<button className="flex h-10 px-6 justify-center items-center w-[10em] gap-2 self-stretch rounded-[6.25rem] bg-[#17AF26]">
										<p className="font-lexend text-sm font-medium text-[#fff]">
											{button}
										</p>
									</button>
								</Link>
							</div>
						</div>
					</div>

					{/* Product seven */}
					<div className="flex flex-col w-64 items-start gap-5 bg-[#fff]">
						{/* The image */}
						<div className="flex h-[15rem] justify-center items-center gap-2 self-stretch bg-[#f4f4f4]">
							<img
								className="w-[10.25rem] h-[10.25rem]"
								src={imageSeven}
								alt=""
							/>
						</div>

						{/* The tyre name */}
						<div className="flex py-2 flex-col items-center gap-3 self-stretch">
							<p className="text-[#9D9EA2] items-center font-lexend font-light text-sm">
								{tyreNames[1]}
							</p>

							{/* The tyre full name */}
							<p className="text-[#1A1E26] items-center font-lexend text-xl font-normal">
								{fullNames[9]}
							</p>

							{/* The tyre model */}
							<div className="flex h-7 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] bg-[#F2F6F4]">
								<p className="text-[#05422C] font-lexend text-xs font-bold">
									{models[3]}
								</p>
							</div>

							{/* Text and id number */}
							<div className="flex items-start gap-2">
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{generalInfo[0].text}
									</p>
								</div>
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{idNumber[1]}
									</p>
								</div>
							</div>

							{/* Rating and review */}
							<div className="flex justify-center items-center gap-3 rounded-[6.25rem] bg-[#fff]">
								<span className="flex">
									<img className="pr-1" src={star} alt="" />
									{generalInfo[0].rating}
								</span>

								<div className="w-[0.0625rem] h-3 bg-[#C8C9CB]"></div>

								<span>
									<span className="pr-1 text-[#060709] font-lexend text-sm font-normal">
										{generalInfo[0].numberReviews}
									</span>
									<span className="text-[#C8C9CB] font-lexend text-sm font-normal">
										{generalInfo[0].R}
									</span>
								</span>
							</div>

							{/* Costs */}
							<div className="flex items-center gap-4">
								<span className="text-[#EB2606] font-lexend text-base font-normal">
									{prices[6]}
								</span>
							</div>

							{/* The button */}
							<div>
								<Link to="/cart">
									<button className="flex h-10 px-6 justify-center items-center w-[10em] gap-2 self-stretch rounded-[6.25rem] bg-[#17AF26]">
										<p className="font-lexend text-sm font-medium text-[#fff]">
											{button}
										</p>
									</button>
								</Link>
							</div>
						</div>
					</div>

					{/* Product eight */}

					<div className="flex flex-col w-64 items-start gap-5 bg-[#fff]">
						{/* The image */}
						<div className="flex h-[15rem] justify-center items-center gap-2 self-stretch bg-[#f4f4f4]">
							<img
								className="w-[10.25rem] h-[10.25rem]"
								src={imageEight}
								alt=""
							/>
						</div>

						{/* The tyre name */}
						<div className="flex py-2 flex-col items-center gap-3 self-stretch">
							<p className="text-[#9D9EA2] items-center font-lexend font-light text-sm">
								{tyreNames[5]}
							</p>

							{/* The tyre full name */}
							<p className="text-[#1A1E26] items-center font-lexend text-xl font-normal">
								{fullNames[10]}
							</p>

							{/* The tyre model */}
							<div className="flex h-7 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] bg-[#F2F6F4]">
								<p className="text-[#05422C] font-lexend text-xs font-bold">
									{models[5]}
								</p>
							</div>

							{/* Text and id number */}
							<div className="flex items-start gap-2">
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{generalInfo[0].text}
									</p>
								</div>
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{idNumber[0]}
									</p>
								</div>
							</div>

							{/* Rating and review */}
							<div className="flex justify-center items-center gap-3 rounded-[6.25rem] bg-[#fff]">
								<span className="flex">
									<img className="pr-1" src={star} alt="" />
									{generalInfo[0].rating}
								</span>

								<div className="w-[0.0625rem] h-3 bg-[#C8C9CB]"></div>

								<span>
									<span className="pr-1 text-[#060709] font-lexend text-sm font-normal">
										{generalInfo[0].numberReviews}
									</span>
									<span className="text-[#C8C9CB] font-lexend text-sm font-normal">
										{generalInfo[0].R}
									</span>
								</span>
							</div>

							{/* Costs */}
							<div className="flex items-center gap-4">
								<span className="text-[#EB2606] font-lexend text-base font-normal">
									{prices[5]}
								</span>
							</div>

							{/* The button */}
							<div>
								<Link to="/cart">
									<button className="flex h-10 px-6 justify-center items-center w-[10em] gap-2 self-stretch rounded-[6.25rem] bg-[#17AF26]">
										<p className="font-lexend text-sm font-medium text-[#fff]">
											{button}
										</p>
									</button>
								</Link>
							</div>
						</div>
					</div>

					{/* Product nine */}

					<div className="flex flex-col w-64 items-start gap-5 bg-[#fff]">
						{/* The image */}
						<div className="flex h-[15rem] justify-center items-center gap-2 self-stretch bg-[#f4f4f4]">
							<img
								className="w-[10.25rem] h-[10.25rem]"
								src={imageEight}
								alt=""
							/>
						</div>

						{/* The tyre name */}
						<div className="flex py-2 flex-col items-center gap-3 self-stretch">
							<p className="text-[#9D9EA2] items-center font-lexend font-light text-sm">
								{tyreNames[8]}
							</p>

							{/* The tyre full name */}
							<p className="text-[#1A1E26] items-center font-lexend text-md font-normal">
								{fullNames[11]}
							</p>

							{/* The tyre model */}
							<div className="flex h-7 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] bg-[#F2F6F4]">
								<p className="text-[#05422C] font-lexend text-xs font-bold">
									{models[9]}
								</p>
							</div>

							{/* Text and id number */}
							<div className="flex items-start gap-2">
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{generalInfo[0].text}
									</p>
								</div>
								<div className="flex h-8 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[0.25rem] border bg-[#fff]">
									<p className="text-[#1A1E26] font-lexend text-xs font-normal">
										{idNumber[5]}
									</p>
								</div>
							</div>

							{/* Rating and review */}
							<div className="flex justify-center items-center gap-3 rounded-[6.25rem] bg-[#fff]">
								<span className="flex">
									<img className="pr-1" src={star} alt="" />
									{generalInfo[0].rating}
								</span>

								<div className="w-[0.0625rem] h-3 bg-[#C8C9CB]"></div>

								<span>
									<span className="pr-1 text-[#060709] font-lexend text-sm font-normal">
										{generalInfo[0].numberReviews}
									</span>
									<span className="text-[#C8C9CB] font-lexend text-sm font-normal">
										{generalInfo[0].R}
									</span>
								</span>
							</div>

							{/* Costs */}
							<div className="flex items-center gap-4">
								<span className="text-[#EB2606] font-lexend text-base font-normal">
									{prices[5]}
								</span>
							</div>

							{/* The button */}
							<div>
								<Link to="/cart">
									<button className="flex h-10 px-6 justify-center items-center w-[10em] gap-2 self-stretch rounded-[6.25rem] bg-[#17AF26]">
										<p className="font-lexend text-sm font-medium text-[#fff]">
											{button}
										</p>
									</button>
								</Link>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Shopresponsive;
