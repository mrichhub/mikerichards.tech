import classNames from "classnames"
import { ReactNode, useEffect, useRef, useState } from "react"
import { useIsVisible } from "../../hooks/useIsVisible"
import "./animateInWhenVisible.scss"

export type AnimateInWhenVisibleProps = {
	children?: ReactNode
	delay?: number
}

export function AnimateInWhenVisible(props: AnimateInWhenVisibleProps) {
	const container = useRef(null)
	const containerVisible = useIsVisible(container)
	const [animateIn, setAnimateIn] = useState(false)

	useEffect(() => {
		if (!containerVisible || animateIn) { return }

		const timer = setTimeout(() => setAnimateIn(containerVisible), props.delay || 1)

		return () => clearTimeout(timer)
	}, [containerVisible])

	return (
		<div className={classNames("animate-in-when-visible", { "show": animateIn })} ref={container}>
			{props.children}
		</div>
	)
}
