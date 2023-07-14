import { useEffect, useState } from "react"
import { Typewriter, TypewriterSpeed } from "./typewriter"

export type TypewriterStagesProps = {
	stages: TypewriterStage[]
}

export type TypewriterStage = {
	delay?: number
	duration?: number
	speed?: TypewriterSpeed
	text: string
}

export function TypewriterStages(props: TypewriterStagesProps) {
	const [typewriterStageIndex, setTypewriterStageIndex] = useState(-1)
	const [typewriterStage, setTypewriterStage] = useState<TypewriterStage>()
	
	const text = typewriterStage?.text ?? ""
	const speed = typewriterStage?.speed

	useEffect(() => {
		if (typewriterStageIndex >= props.stages.length) { return }

		const prevStageIndex = typewriterStageIndex - 1
		const prevStage = prevStageIndex >= 0
			? props.stages[prevStageIndex]
			: undefined
		const newStage = typewriterStageIndex >= 0
			? props.stages[typewriterStageIndex]
			: undefined

		const timeout = setTimeout(() => {
			setTypewriterStage(newStage)
		}, (prevStage?.duration || 1) + (newStage?.delay || 0))

		return () => clearTimeout(timeout)
	}, [typewriterStageIndex])

	useEffect(() => {
		setTypewriterStageIndex(0)
	}, [props.stages])

	function onTypewriterStageFinished() {
		setTypewriterStageIndex(prevStage => prevStage + 1)
	}

	return <Typewriter onFinished={() => onTypewriterStageFinished()} speed={speed} text={text} />
}
