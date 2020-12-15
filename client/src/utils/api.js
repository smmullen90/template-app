import 'whatwg-fetch'
import qs from 'querystring'

const API_BASE = 'http://localhost:3000'

function formatRequestUrl(path, params) {
  const query = qs.stringify(params)
  return [`${API_BASE}${path}`, query].filter(Boolean).join('?')
}

function checkStatus({ json, status }) {
  if (status >= 200 && status < 300) {
    return json
  }

  const error = new Error(json.error)
  error.response = json
  throw error
}

async function parseJSON(response) {
  const json = await response.json()
  return { json, status: response.status }
}

const Api = {
  get(path, params) {
    return fetch(formatRequestUrl(path, params))
      .then(checkStatus)
      .then(parseJSON)
  },

  post(path, data) {
    return fetch(formatRequestUrl(path), {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(parseJSON)
      .then(checkStatus)
  }
}

export default Api