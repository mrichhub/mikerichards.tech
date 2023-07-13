import classNames from "classnames"
import { useEffect, useState } from "react"
import lightbulbImage from "../../assets/images/lightbulb3.jpg"
import { useIsPageLoaded } from "../../hooks/useIsPageLoaded"
import { Typewriter } from "../typewriter/typewriter"
import "./portfolio.main.scss"

export function PortfolioMainPage() {
	const isPageLoaded = useIsPageLoaded()

	const portfolioClassName = classNames(
		"portfolio",
		{
			loaded: isPageLoaded,
		},
	)

	const lightbulbBackgroundClassName = classNames(
		"lightbulb-background",
		{
			show: isPageLoaded, 
		},
	)

	const [typewriterStage, setTypewriterStage] = useState(0)
	const [typewriterText, setTypewriterText] = useState("")

	useEffect(() => {
		if (!isPageLoaded) { return }

		if (typewriterStage === 0) {
			const timer = setTimeout(() => setTypewriterStage(1), 3000)

			return () => clearTimeout(timer)
		}
		
		if (typewriterStage === 1) {
			setTypewriterText("Hi 👋")

			const timer = setTimeout(() => setTypewriterStage(2), 3000)

			return () => clearTimeout(timer)
		}

		if (typewriterStage === 2) {
			setTypewriterText("")

			const timer = setTimeout(() => setTypewriterStage(3), 3000)

			return () => clearTimeout(timer)
		}

		if (typewriterStage === 3) {
			setTypewriterText("I'm Mike Richards")

			const timer = setTimeout(() => setTypewriterStage(4), 3000)

			return () => clearTimeout(timer)
		}

		if (typewriterStage === 4) {
			setTypewriterText("")

			const timer = setTimeout(() => setTypewriterStage(5), 3000)

			return () => clearTimeout(timer)
		}
		
		if (typewriterStage === 5) {
			setTypewriterText("Welcome to my portfolio!")

			const timer = setTimeout(() => setTypewriterStage(6), 3000)

			return () => clearTimeout(timer)
		}

	}, [isPageLoaded, typewriterStage])

	return (
		<div className={portfolioClassName}>
			<img
				alt="Let there be light"
				className={lightbulbBackgroundClassName}
				src={lightbulbImage}
			/>

			<div className="content">
				{typewriterStage > 0 && (
					<Typewriter text={typewriterText} />
				)}
			</div>
		</div>
	)
}
