class LocalData
{
	constructor(
		private readonly storage: Storage,
	) { }

	get didViewIntro(): boolean {
		return this.getBoolItem("didViewIntro") ?? false
	}

	set didViewIntro(didViewIntro: boolean) {
		this.setBoolItem("didViewIntro", didViewIntro)
	}

	private getBoolItem(key: string): boolean|undefined {
		const value = this.getItem(key)

		if (value === undefined) {
			return undefined
		}

		return value === "true"
	}

	private getItem(key: string): string|undefined {
		return this.storage.getItem(key) || undefined
	}

	private setBoolItem(key: string, value: boolean|undefined): void {
		this.setItem(key, value === undefined ? undefined : (value ? "true" : "false"))
	}

	private setItem(key: string, value: string|undefined): void {
		if (value === undefined) {
			this.storage.removeItem(key)
		}
		else {
			this.storage.setItem(key, value)
		}
	}
}

export const localData = new LocalData(localStorage)
