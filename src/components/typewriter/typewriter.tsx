import { useEffect, useState } from "react"
import { Random } from "../../common/random"
import "./typewriter.scss"

export type TypewriterProps = {
	onFinished?: () => unknown
	speed?: TypewriterSpeed
	text: string
}

export type TypewriterSpeed = number|{
	max: number,
	min: number,
}

export function Typewriter(props: TypewriterProps) {
	const speedMin = props.speed !== undefined ? (typeof props.speed === "number" ? props.speed : props.speed.min) : 20
	const speedMax = props.speed !== undefined ? (typeof props.speed === "number" ? props.speed : props.speed.max) : 80
	const text = [...props.text] // 'text' must be initialized like this in order to handle emojis
	const [currentText, setCurrentText] = useState("")

	useEffect(() => {
		// Determine if we're making forward progression
		if (currentText === "" || text.join("").substring(0, currentText.length) === currentText) {
			if (currentText.length < text.length) {
				const timer = setTimeout(() => {
					setCurrentText(prevText => prevText + text[currentText.length])
				}, Random.int(speedMin, speedMax))

				return () => clearTimeout(timer)
			}
			else {
				props.onFinished?.()
			}
		}
		// We need to delete characters
		else {
			if (currentText.length > 0) {
				const timer = setTimeout(() => {
					setCurrentText(prevText => {
						const prevTextArray = [...prevText] // Must be like this to handle emojis
 						return prevTextArray.slice(0, prevTextArray.length - 1).join("").substring(0, prevText.length - 1)
					})
				}, Random.int(speedMin, speedMax))

				return () => clearTimeout(timer)
			}
			else {
				props.onFinished?.()
			}
		}
	}, [props.text, currentText])

	return (
		<div className="typewriter display-linebreaks">
			{currentText}
		</div>
	)
}
