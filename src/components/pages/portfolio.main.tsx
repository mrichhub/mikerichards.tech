import classNames from "classnames"
import { useEffect, useState } from "react"
import lightbulbImage from "../../assets/images/lightbulb3.jpg"
import avatarImage from "../../assets/images/mike-richards-avatar.png"
import { useIsPageLoaded } from "../../hooks/useIsPageLoaded"
import { TypewriterStage, TypewriterStages } from "../typewriter/typewriterStages"
import "./portfolio.main.scss"

const introTypewriterStages: TypewriterStage[] = [
	{ text: "Hi 👋", delay: 2750, duration: 1500 },
	{ text: "", speed: 20, duration: 250, },
	{ text: "I'm Mike Richards.", duration: 1000, },
	{ text: "I'm Mike Richards.\nWelcome to my portfolio!", duration: 2000 },
	{ text: "", speed: 10, },
]

export function PortfolioMainPage() {
	const isPageLoaded = useIsPageLoaded()
	const [showLightbulb, setShowLightbulb] = useState(false)
	const [displayMainPortfolio, setDisplayMainPortfolio] = useState(false)

	const avatarClassName = classNames(
		"avatar",
		{
			disappear: displayMainPortfolio,
			show: isPageLoaded,
			// "move-to-bottom-left": displayMainPortfolio,
		},
	)

	const portfolioClassName = classNames(
		"portfolio",
		{
			loaded: isPageLoaded,
		},
	)

	const lightbulbBackgroundClassName = classNames(
		"lightbulb-background",
		{
			"move-to-center": displayMainPortfolio,
			show: showLightbulb,
		},
	)

	useEffect(() => {
		if (showLightbulb) {
			const timer = setTimeout(() => {
				setDisplayMainPortfolio(true)
			}, 2500)

			return () => clearTimeout(timer)
		}
	}, [showLightbulb])

	function onTypewriterFinished() {
		setShowLightbulb(true)
	}

	return (
		<div className={portfolioClassName}>
			<img
				alt="Let there be light"
				className={lightbulbBackgroundClassName}
				src={lightbulbImage}
			/>

			<img
				alt="Mike Richards"
				className={avatarClassName}
				src={avatarImage}
			/>

			<div className="content">
			</div>

			<div className="typewriter-container">
				{isPageLoaded && (
					<TypewriterStages stages={introTypewriterStages} onCompleted={() => onTypewriterFinished()} />
				)}
			</div>
		</div>
	)
}
