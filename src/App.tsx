import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.scss"
import { PortfolioMainPage } from "./components/pages/portfolio.main"

export function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" Component={() => PortfolioMainPage()} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
