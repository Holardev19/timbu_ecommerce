import propTypes from "prop-types";
import star from "./assets/star.svg";
import starEmpty from "./assets/starEmpty.svg";

const Filter = () => {
	const categories = [
		{ category: "Tyres", available: 43 },
		{ category: "Brakes", available: 40 },
		{ category: "Suspension", available: 20 },
		{ category: "Engines", available: 34 },
		{ category: "Interior", available: 26 },
		{ category: "Electrical", available: 32 },
		{ category: "Steering", available: 12 },
		{ category: "Exhaust", available: 10 },
		{ category: "Drive Train", available: 8 },
		{ category: "Exterior", available: 24 },
	];

	const orderBy = [
		"Default",
		"Review",
		"Popularity",
		"Average Rating",
		"Newness",
		"Price: Low to High",
		"Price: High to Low",
		"Random Products",
		"Product Name",
	];

	return (
		<div className="w-[15rem] border-r mt-10">
			<div className="w-full flex flex-col pr-8 items-start gap-5 sm:w-[11rem] sm:pr-0">
				<div className="flex pt-[1.0625rem] pb-6 border-b gap-2 self-stretch sm:w-40">
					<p className="font-lexend text-[1.125rem] font-normal">
						Filter
					</p>
				</div>

				{/* Categories */}
				<div className="flex flex-col pb-5 items-start gap-5 self-stretch border-b sm:w-40">
					<p className="font-lexend text-[#5E5F60] text-xs font-light">
						PRODUCT CATEGORY
					</p>

					{/* Listing the categories */}

					<ul className="flex flex-col items-start gap-3">
						<li className="flex items-center gap-3 w-">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#17AF26]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="9"
									height="9"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{categories[0].category}
							</span>
							<span className="w-[0.0625rem] h-[0.9rem] bg-[#a19d9d]"></span>
							<span className="text-[#9D9EA2] font-lexend text-sm font-light">
								{categories[0].available}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{categories[1].category}
							</span>
							<span className="w-[0.0625rem] h-[0.9rem] bg-[#a19d9d]"></span>
							<span className="text-[#9D9EA2] font-lexend text-sm font-light">
								{categories[1].available}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{categories[2].category}
							</span>
							<span className="w-[0.0625rem] h-[0.9rem] bg-[#a19d9d]"></span>
							<span className="text-[#9D9EA2] font-lexend text-sm font-light">
								{categories[2].available}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{categories[3].category}
							</span>
							<span className="w-[0.0625rem] h-[0.9rem] bg-[#a19d9d]"></span>
							<span className="text-[#9D9EA2] font-lexend text-sm font-light">
								{categories[3].available}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{categories[4].category}
							</span>
							<span className="w-[0.0625rem] h-[0.9rem] bg-[#a19d9d]"></span>
							<span className="text-[#9D9EA2] font-lexend text-sm font-light">
								{categories[4].available}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{categories[5].category}
							</span>
							<span className="w-[0.0625rem] h-[0.9rem] bg-[#a19d9d]"></span>
							<span className="text-[#9D9EA2] font-lexend text-sm font-light">
								{categories[5].available}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{categories[6].category}
							</span>
							<span className="w-[0.0625rem] h-[0.9rem] bg-[#a19d9d]"></span>
							<span className="text-[#9D9EA2] font-lexend text-sm font-light">
								{categories[6].available}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{categories[7].category}
							</span>
							<span className="w-[0.0625rem] h-[0.9rem] bg-[#a19d9d]"></span>
							<span className="text-[#9D9EA2] font-lexend text-sm font-light">
								{categories[7].available}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{categories[8].category}
							</span>
							<span className="w-[0.0625rem] h-[0.9rem] bg-[#a19d9d]"></span>
							<span className="text-[#9D9EA2] font-lexend text-sm font-light">
								{categories[8].available}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{categories[9].category}
							</span>
							<span className="w-[0.0625rem] h-[0.9rem] bg-[#a19d9d]"></span>
							<span className="text-[#9D9EA2] font-lexend text-sm font-light">
								{categories[9].available}
							</span>
						</li>
					</ul>
				</div>

				{/* Price filter */}
				<div className="flex flex-col pb-6 items-start gap-5 self-stretch border-b sm:w-40">
					<p className="text-[#5E5F60] font-lexend text-xs font-light">
						FILTER BY PRICE
					</p>

					{/* Price range */}
					<div className="flex w-52 justify-between sm:w-40">
						<div className="flex h-7 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[6.25rem] bg-[#F4F4F4]">
							<p className="text-[#060709] font-lexend text-xs font-normal">
								$0
							</p>
						</div>

						<div className="flex h-7 pt-1 pr-[0.625rem] pb-[0.3125rem] pl-[0.625rem] justify-center items-center gap-3 rounded-[6.25rem] bg-[#F4F4F4]">
							<p className="text-[#060709] font-lexend text-xs font-normal">
								$50,000.00
							</p>
						</div>
					</div>
					{/* The range toggle */}
					<div className="flex items-center">
						<div className="flex w-2 h-2 justify-center items-center gap-2 rounded-[6.25rem] border-2 border-[#000] bg-[#fff] cursor-pointer"></div>

						<div className="h-[0.125rem] w-[12rem] rounded-[6.25rem] bg-[#060709] sm:w-36"></div>

						<div className="flex w-2 h-2 justify-center items-center gap-2 rounded-[6.25rem] border-2 border-[#000] bg-[#fff] cursor-pointer"></div>
					</div>

					<button className="flex h-10 px-8 items-center gap-4 rounded-[62.5rem] bg-[#17AF26]">
						<p className="font-lexend text-sm font-normal text-[#fff]">
							Apply
						</p>
					</button>
				</div>
				{/* Order */}
				<div className="flex flex-col items-start gap-5 self-stretch pb-5 border-b sm:w-40">
					<p className="text-[#5E5F60] font-lexend text-xs font-light">
						ORDER BY
					</p>

					<ul className="flex flex-col items-start gap-3">
						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{orderBy[0]}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#17AF26]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="9"
									height="9"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{orderBy[1]}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{orderBy[2]}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{orderBy[3]}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{orderBy[4]}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{orderBy[5]}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{orderBy[6]}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{orderBy[7]}
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-5 h-5 justify-center items-center gap-2 rounded-[6.25rem] border bg-[#fff]">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="14"
									height="15"
									viewBox="0 0 14 15"
									fill="none">
									<circle
										cx="7"
										cy="7.5"
										r="5.5"
										fill="white"
										stroke="white"
										strokeWidth="3"
									/>
								</svg>
							</span>
							<span className="font-lexend text-sm font-normal">
								{orderBy[8]}
							</span>
						</li>
					</ul>
				</div>

				{/* Filter by reviews */}
				<div className="flex flex-col pb-6 items-start gap-5 self-stretch border-b sm:w-40">
					<p className="text-[#5E5F60] font-lexend text-xs font-light ">
						FILTER BY REVIEWS
					</p>

					<ul className="flex flex-col items-start gap-4">
						<li className="flex items-center gap-3">
							<span className="flex flex-col w-[1.375rem] h-[1.375rem] justify-center items-center gap-2 rounded-[0.375rem] border bg-[#fff]"></span>

							<span className="flex items-start gap-1">
								<img src={star} alt="Golden star" />
								<img src={star} alt="Golden star" />
								<img src={star} alt="Golden star" />
								<img src={star} alt="Golden star" />
								<img src={star} alt="Golden star" />
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-[1.375rem] h-[1.375rem] justify-center items-center gap-2 rounded-[0.375rem] border bg-[#fff]"></span>

							<span className="flex items-start gap-1">
								<img src={star} alt="Golden star" />
								<img src={star} alt="Golden star" />
								<img src={star} alt="Golden star" />
								<img src={star} alt="Golden star" />
								<img src={starEmpty} alt="Golden star" />
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-[1.375rem] h-[1.375rem] justify-center items-center gap-2 rounded-[0.375rem] border bg-[#fff]"></span>

							<span className="flex items-start gap-1">
								<img src={star} alt="Golden star" />
								<img src={star} alt="Golden star" />
								<img src={star} alt="Golden star" />
								<img src={starEmpty} alt="Golden star" />
								<img src={starEmpty} alt="Golden star" />
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-[1.375rem] h-[1.375rem] justify-center items-center gap-2 rounded-[0.375rem] border bg-[#fff]"></span>

							<span className="flex items-start gap-1">
								<img src={star} alt="Golden star" />
								<img src={star} alt="Golden star" />
								<img src={starEmpty} alt="Golden star" />
								<img src={starEmpty} alt="Golden star" />
								<img src={starEmpty} alt="Golden star" />
							</span>
						</li>

						<li className="flex items-center gap-3">
							<span className="flex flex-col w-[1.375rem] h-[1.375rem] justify-center items-center gap-2 rounded-[0.375rem] border bg-[#fff]"></span>

							<span className="flex items-start gap-1">
								<img src={star} alt="Golden star" />
								<img src={starEmpty} alt="Golden star" />
								<img src={starEmpty} alt="Golden star" />
								<img src={starEmpty} alt="Golden star" />
								<img src={starEmpty} alt="Golden star" />
							</span>
						</li>
					</ul>
				</div>

				{/* Clear Filters */}

				<button className="flex h-10 px-8 items-center gap-4 rounded-[62.5rem] bg-[#F3FBF4]">
					<p className="font-lexend text-sm font-normal text-[#17AF26]">
						Clear Filters
					</p>
				</button>
			</div>
		</div>
	);
};

Filter.propTypes = {
	className: propTypes.string,
};

export default Filter;
