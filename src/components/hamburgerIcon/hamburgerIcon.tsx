import classNames from "classnames"
import React, { useEffect, useState } from "react"
import "./hamburgerIcon.scss"

export type HamburgerIconProps = {
	isOpen?: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
	isOpenChanged?: (isOpen: boolean) => unknown,
}

export function HamburgerIcon(props: HamburgerIconProps) {
	const [isOpen, setIsOpen] = props.isOpen ?? useState(false)

	useEffect(() => {
		props.isOpenChanged?.(isOpen)
	}, [isOpen])

	function toggleIsOpen() {
		setIsOpen(prevIsOpen => !prevIsOpen)
	}

	return <>
		<div className={classNames("hamburger-icon", { "is-open": isOpen })} onClick={() => toggleIsOpen()}>
			<div className="top-bun"></div>
			<div className="sustenance"></div>
			<div className="bottom-bun"></div>
		</div>
	</>
}
