import { fetchWrapper } from '../helpers/fetchWrapper'

const baseUrl = `${import.meta.env.VITE_BASE_URL}/dish`

export const dishService = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
}

function getAll () {
  return fetchWrapper.get(baseUrl)
}

function getById (id) {
  return fetchWrapper.get(`${baseUrl}/${id}`)
}

function create (params) {
  return fetchWrapper.post(baseUrl, params)
}

function update (id, params) {
  return fetchWrapper.put(`${baseUrl}/${id}`, params)
}

function _delete (id) {
  return fetchWrapper.delete(`${baseUrl}/${id}`)
}
