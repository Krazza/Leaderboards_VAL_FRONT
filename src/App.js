import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Layout";
import Leaderboard from "./components/Leaderboard/Leaderboard";

function App() {
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout/>}>
					<Route index element={<Leaderboard/>}/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;