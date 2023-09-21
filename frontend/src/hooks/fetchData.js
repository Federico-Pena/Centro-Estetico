export const fetchData = async (url, options, callback) => {
	try {
		const response = await fetch(url, options)
		const data = await response.json()
		callback(data)
		return data
	} catch (error) {
		callback(error)
		return error
	}
}
