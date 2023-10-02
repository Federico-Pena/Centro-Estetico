export const fetchData = async (url, options, callback) => {
	try {
		if (!url) {
			throw new Error('URL no definida')
		}
		const response = await fetch(url, options)
		if (response.ok) {
			const data = await response.json()
			callback(data)
			return data
		} else {
			const data = await response.json()
			callback(data)
			return data
		}
	} catch (error) {
		callback({
			error,
		})
		return error.message
	}
}
