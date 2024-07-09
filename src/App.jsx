import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Productpage from "./Productpage";
import Cart from "./Cart";
import Checkout from "./Checkout";
import Success from "./success";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Productpage />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route path="/success" element={<Success />} />
			</Routes>
		</Router>
	);
}

export default App;
