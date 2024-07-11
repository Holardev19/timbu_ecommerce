import Discount from "./Discount";
import Navbar from "./Navbar";
import Info from "./Info";
import Filter from "./Filter";
import Shop from "./Shop";
import Shopresponsive from "./Shopresponsive";
import Productmobile from "./Productmobile";

const Productpage = () => {
	return (
		<>
			<Discount />
			<Navbar />
			<Info />

			<div className="hidden lg:flex gap-8 px-8 w-[100%]">
				<Filter  />
				<Shop />
			</div>
			<Productmobile />
			<Shopresponsive />
		</>
	);
};

export default Productpage;
