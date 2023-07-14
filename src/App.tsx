import { lazy } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.scss"

const MainPage = lazy(() => import("./components/pages/main"))
const PortfolioPage = lazy(() => import("./components/pages/portfolio"))
const IntroPage = lazy(() => import("./components/pages/intro"))

export function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" Component={MainPage} />
					<Route path="/intro" Component={IntroPage} />
					<Route path="/portfolio" Component={PortfolioPage} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
