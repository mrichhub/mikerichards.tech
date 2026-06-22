import { useEffect } from "react"
import PortfolioPage from "./components/pages/portfolio"
import "./App.scss"

export function App() {
	useEffect(() => {
		console.log("You found the source. Nice.")
		console.log("Want to build something interesting? hi@mikerichards.tech")
	}, [])

	return (
		<div className="App">
			<PortfolioPage />
		</div>
	)
}
