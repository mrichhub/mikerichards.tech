import { lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.scss"

const HomePage = lazy(() => import("./components/pages/home"))
const PortfolioPage = lazy(() => import("./components/pages/portfolio"))
const IntroPage = lazy(() => import("./components/pages/intro"))

export function App() {
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
