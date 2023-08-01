import { lazy, useEffect } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.scss"

const HomePage = lazy(() => import("./components/pages/home"))
const PortfolioPage = lazy(() => import("./components/pages/portfolio"))
const IntroPage = lazy(() => import("./components/pages/intro"))

export function App() {
	useEffect(() => {
		console.log("🚨 HACKER DETECTED! I see you checking out my console! 👀 And... I appreciate you being here. I'd love to to connect with you, email me at MayTheSourceBeWithYou (at) mikerichards.tech and I'll respond even quicker.")
	}, [])

	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" Component={HomePage} />
					<Route path="/intro" Component={IntroPage} />
					<Route path="/intro/stay" Component={() => <IntroPage stay={true} />} />
					<Route path="/portfolio" Component={PortfolioPage} />
					<Route path="/portfolio/:sectionId" Component={PortfolioPage} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
