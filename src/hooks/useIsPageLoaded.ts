import { useState } from "react"
import { usePageLoad } from "./usePageLoad"

export function useIsPageLoaded(): boolean {
	const [isPageLoaded, setIsPageLoaded] = useState(false)

	usePageLoad(() => {
		// Guard to make sure we only set isPageLoaded once
		if (isPageLoaded) { return }
		
		setIsPageLoaded(true)
	})

	return isPageLoaded
}
