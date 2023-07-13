import { useEffect, useState } from "react"
import { Random } from "../../common/random"

type TypewriterProps = {
	text: string
}

export function Typewriter({ text }: TypewriterProps) {
	const [currentText, setCurrentText] = useState("")

	useEffect(() => {
		// Determine if we're making forward progression
		if (currentText === "" || text.substring(0, currentText.length) === currentText) {
			if (currentText.length < text.length) {
				const timer = setTimeout(() => {
					setCurrentText(prevText => prevText + text[currentText.length])
				}, Random.int(30, 100))

				return () => clearTimeout(timer)
			}
		}
		// We need to delete characters
		else {
			if (currentText.length > 0) {
				const timer = setTimeout(() => {
					setCurrentText(prevText => prevText.substring(0, prevText.length - 1))
				}, 30)

				return () => clearTimeout(timer)
			}
		}
	}, [text, currentText])

	return (
		<div className="typewriter">
			{currentText}
		</div>
	)
}
