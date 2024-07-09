import truckFast from "./assets/truckFast.png";
import trapezium from "./assets/trapezium.svg";
import flower from "./assets/flower.png";
import shield from "./assets/shield.svg";
import coin from "./assets/coin.svg";
import security from "./assets/security.svg";

const Info = () => {
	return (
		<>
			<div className="flex w-full py-4 px-4 items-start  gap-5 bg-[#F2F6F4] sm:px-6 lg:p-6 lg:px-16 lg:justify-center lg:items-center lg:gap-8">
				{/* Reliable Shipping */}
				<div className="flex flex-col justify-center items-start gap-2 flex-1 lg:flex-row lg:items-center lg:gap-4">
					<div className="flex w-8 h-8 p-2 justify-center items-center gap-2 bg-[#FFF] rounded-[6.25rem] lg:w-12 lg:h-12 lg:p-2">
						<img src={truckFast} alt="truck" />
					</div>

					<p className="font-lexend text-[0.875rem] font-normal text-[#1A1E26]   lg:text-[1.25rem] lg:font-medium">
						Reliable Shipping
					</p>
				</div>

				{/* The line between */}
				<div className="w-[0.0625rem] h-6 bg-[#C3D2CC] lg:h-10 lg:bg-[#05422C]"></div>

				{/* Safe with us */}
				<div className="flex flex-col justify-center items-start gap-2 flex-1 lg:flex-row lg:items-center lg:gap-4">
					<div className="flex w-8 h-8 p-2 justify-center items-center gap-2 bg-[#FFF] rounded-[6.25rem] lg:w-12 lg:h-12 lg:p-2">
						{/* For the svg images */}

						<div className="relative">
							<img
								className="hidden lg:block w-6 h-6 shrink-0"
								src={security}
								alt="secure"
							/>

							<img
								className="lg:hidden w-[0.88981rem] h-[0.87313rem] shrink-0"
								src={trapezium}
								alt="trapezium"
							/>
							<img
								className="lg:hidden absolute top-[3.5px] left-[2px]"
								src={flower}
								alt="flower"
							/>
							<img
								className="lg:hidden absolute top-[7px] left-2 w-[0.41769rem] h-[0.46863rem]"
								src={shield}
								alt="shield"
							/>
						</div>
					</div>

					<p className="font-lexend text-[0.875rem] font-normal text-[#1A1E26] lg:text-[1.25rem] lg:font-medium">
						You’re Safe With Us
					</p>
				</div>

				<div className="w-[0.0625rem] h-6 bg-[#C3D2CC] lg:h-10 lg:bg-[#05422C]"></div>

				<div className="flex flex-col justify-center items-start gap-2 flex-1 lg:flex-row lg:items-center lg:gap-4">
					<div className="flex w-8 h-8 p-2 justify-center items-center gap-2 bg-[#FFF] rounded-[6.25rem] lg:w-12 lg:h-12 lg:p-2">
						<img src={coin} alt="coin" />
					</div>

					<p className="font-lexend text-[0.875rem] font-normal text-[#1A1E26] lg:text-[1.25rem] lg:font-medium">
						Best Quality & Pricing
					</p>
				</div>
			</div>
		</>
	);
};

export default Info;
