import Discount from "./Discount";
import Navbar from "./Navbar";
import Info from "./Info";
import Filter from "./Filter";
import Shop from "./Shop";
import Shopresponsive from "./Shopresponsive";

const Productpage = () => {
	return (
		<>
			<Discount />
			<Navbar />
			<Info />

			<div className="hidden lg:flex gap-16 px-8 w-[100%]">
				<Filter className="w-[15rem] border-r mt-10" />
				<Shop className=" mt-10 w-[54rem] " />
			</div>

			<Shopresponsive />
		</>
	);
};

export default Productpage;
