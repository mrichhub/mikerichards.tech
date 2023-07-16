import { useEffect, useState } from "react"

export function useTimedFlag(timeMS: number): boolean {
	const [flag, setFlag] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => setFlag(true), timeMS)

		return () => clearTimeout(timer)
	}, [])

	return flag
}
