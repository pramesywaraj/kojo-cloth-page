import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL
const defaultHeaders = {
	'Content-Type': 'application/json',
}

export function fetch(path) {
	const config = {
		method: 'get',
		url: `${BASE_URL}/${path}`,
	}

	return new Promise((resolve, reject) => {
		axios(config)
			.then((response) => {
				const { data } = response
				const { errors, success } = data

				console.log(response)

				if (errors && !success) reject(errors)

				return data
			})
			.then((response) => {
				resolve(response)
			})
	})
}

export function post(path, data, headers) {
	const config = {
		method: 'post',
		url: `${BASE_URL}/${path}`,
		headers: {
			...defaultHeaders,
			...headers,
		},
		data,
	}

	return new Promise((resolve, reject) => {
		axios(config)
			.then((response) => {
				const { data } = response
				const { errors, success } = data

				if (errors && !success) reject(errors)

				return data
			})
			.then((response) => {
				resolve(response)
			})
	})
}
