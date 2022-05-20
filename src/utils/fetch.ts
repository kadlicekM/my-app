interface FetchType {
	method?: string

	body?: any
	headers?: Headers
}

export async function apiAuthFetch<T>(
	url: string,
	{ ...rest }: FetchType = {},
): Promise<T | undefined> {
	const options = { ...rest }

	const token = localStorage.getItem('token')

	const headers = options.headers ?? new Headers()

	if (!token) {
		return undefined
	}

	try {
		const response = await fetch(url, {
			...options,
			headers: {
				...headers,
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		})

		const result: T = await response.json()

		return result
	} catch (e) {
		console.error(e)

		return
	}
}
