import classNames from "classnames"
import lightbulbImage from "../../assets/images/lightbulb3.jpg"
import { useIsPageLoaded } from "../../hooks/useIsPageLoaded"
import { TypewriterStage, TypewriterStages } from "../typewriter/typewriterStages"
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

	const typewriterStages: TypewriterStage[] = [
		{ text: "Hi 👋", delay: 4000, duration: 3000, },
		{ text: "", speed: 30, duration: 250, },
		{ text: "I'm Mike Richards", duration: 3000, },
		{ text: "", speed: 30, duration: 250, },
		{ text: "Welcome to my portfolio!" },
	]

	return (
		<div className={portfolioClassName}>
			<img
				alt="Let there be light"
				className={lightbulbBackgroundClassName}
				src={lightbulbImage}
			/>

			<div className="content">
			</div>

			<div className="typewriter-container">
				{isPageLoaded && (
					<TypewriterStages stages={typewriterStages} />
				)}
			</div>
		</div>
	)
}
