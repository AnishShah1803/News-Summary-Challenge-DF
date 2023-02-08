import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AllHeadLines from "./components/AllHeadLines";
import Article from "./components/Article";
import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	const [newsData, setNews] = useState([]);
	const [errorStatus, setErrorStatus] = useState("");
	const getNews = async () => {
		try {
			const response = await axios.get(process.env.REACT_APP_GUARDIANNEWSDATA);
			setNews(response.data.response.results);
		} catch (error) {
			setErrorStatus(error.message);
		}
	};
	useEffect(() => {
		getNews();
	}, []);

	return (
		<Router>
			{errorStatus && <p>There is an error: {errorStatus}</p>}
			{!errorStatus && newsData.length === 0 ? (
				<p>Your news is loading ...</p>
			) : (
				<div className="App">
					<Header />
					<main>
						<div className="container-fluid">
							<Routes>
								<Route
									path="/"
									element={<AllHeadLines newsData={newsData} />}
								/>
								<Route
									path="/article/:id"
									element={<Article newsData={newsData} />}
								/>
							</Routes>
						</div>
					</main>
					<Footer />
				</div>
			)}
		</Router>
	);
}

export default App;
