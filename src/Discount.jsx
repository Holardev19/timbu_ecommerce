const Discount = () => {
	return (
		<>
			<div className="w-full py-2 px-6 bg-[#05422C] flex flex-col xs:flex-row justify-center items-center text-white font-lexend gap-2 xs:gap-4 sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full  sm:h-auto md:h-auto lg:h-auto xl:h-auto 2xl:h-auto">
				<p className="text-xs font-normal w-64 h-[1.125rem] overflow-hidden text-ellipsis whitespace-nowrap sm:w-auto sm:h-auto">
					LIMITED OFFER: 30% OFF. Use RABBIT30 at checkout
				</p>
				<p className="text-xs font-normal">
					23 &nbsp;: &nbsp; 15 &nbsp;: &nbsp;10
				</p>
			</div>
		</>
	);
};

export default Discount;
