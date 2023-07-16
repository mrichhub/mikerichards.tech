import classNames from "classnames"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import lightbulbImage from "../../assets/images/lightbulb3.jpg"
import avatarImage from "../../assets/images/mike-richards-avatar.png"
import { localData } from "../../data/localData"
import { useIsPageLoaded } from "../../hooks/useIsPageLoaded"
import { TypewriterStage, TypewriterStages } from "../typewriter/typewriterStages"
import "./intro.scss"

export type IntroPageParams = {
	stay?: boolean
}

const introTypewriterStages: TypewriterStage[] = [
	{ text: "Hi 👋", delay: 3250, duration: 1500 },
	{ text: "", speed: 20, duration: 250, },
	{ text: "I'm Mike Richards.", duration: 1000, },
	{ text: "I'm Mike Richards.\nWelcome to my tech portfolio!", duration: 2000 },
	{ text: "", speed: 10, },
]

export default function IntroPage(props: IntroPageParams) {
	const isPageLoaded = useIsPageLoaded()
	const [showLightbulb, setShowLightbulb] = useState(false)
	const [displayMainPortfolio, setDisplayMainPortfolio] = useState(false)
	const navigate = useNavigate()

	const introClassName = classNames(
		"intro",
		{
			loaded: isPageLoaded,
		},
	)

	const avatarClassName = classNames(
		"avatar",
		{
			disappear: displayMainPortfolio,
			show: isPageLoaded,
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
		localData.didViewIntro = true
	}, [])

	useEffect(() => {
		if (showLightbulb) {
			const timer = setTimeout(() => {
				setDisplayMainPortfolio(true)
			}, 2250)

			return () => clearTimeout(timer)
		}
	}, [showLightbulb])

	useEffect(() => {
		if (displayMainPortfolio && !props.stay) {
			const timer = setTimeout(() => {
				navigate("/portfolio")
			}, 4000)

			return () => clearTimeout(timer)
		}
	}, [displayMainPortfolio])

	function onTypewriterFinished() {
		setShowLightbulb(true)
	}

	return (
		<div className={introClassName}>
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

			<div className="typewriter-container display-linebreaks">
				{isPageLoaded && (
					<TypewriterStages stages={introTypewriterStages} onCompleted={() => onTypewriterFinished()} />
				)}
			</div>
		</div>
	)
}
