import React, { useEffect, useState } from "react"

export function useIsVisible(ref: React.RefObject<Element>) {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		if (ref.current === undefined || ref.current === null) { return }

		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting)
		)

		observer.observe(ref.current)
		
		return () => {
			observer.disconnect()
		}
	}, [ref])

	return isIntersecting
}