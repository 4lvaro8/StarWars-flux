import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import Home from "./views/home";
import { Navbar } from "./component/navbar";
import injectContext from "./store/appContext";
import { SingleCharacter } from "./views/SingleCharacter";
import { SingleShip } from "./views/SingleShip";
import { SinglePlanet } from "./views/SinglePlanet";

//create your first component
const Layout = () => {
	

	return (
		<div>
			<BrowserRouter >
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/characters/:id" element={<SingleCharacter />} />
						<Route path="/planets/:id" element={<SinglePlanet />} />
						<Route path="/starships/:id" element={<SingleShip />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);