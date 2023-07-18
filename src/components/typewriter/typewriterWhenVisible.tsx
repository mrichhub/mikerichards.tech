import { useEffect, useRef, useState } from "react"
import { useIsVisible } from "../../hooks/useIsVisible"
import { Typewriter, TypewriterProps } from "./typewriter"

export function TypewriterWhenVisible(props: TypewriterProps) {
	const ref = useRef(null)
	const refVisible = useIsVisible(ref)
	const [text, setText] = useState(props.text.substring(0, 1))

	useEffect(() => {
		if (refVisible) {
			setText(props.text)
		}
		else {
			setText(props.text.substring(0, 1))
		}
	}, [refVisible])

	return (
		<span ref={ref}>
			<Typewriter delay={props.delay} onFinished={props.onFinished} speed={props.speed} text={text} />
		</span>
	)
}
