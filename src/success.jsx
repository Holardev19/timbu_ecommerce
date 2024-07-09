const success = () => {
	return (
		<div className="h-screen flex flex-col">
			{/* The line above */}
			<div className="h-[2px] py-2 bg-[#05422C]"></div>

			{/* Centered content */}
			<div className="flex-grow flex justify-center items-center">
				<p className="text-center font-lexend text-4xl font-normal leading-[3.75rem] px-6">
					Order Completed Check Mail for tracking Details
				</p>
			</div>
		</div>
	);
};

export default success;
