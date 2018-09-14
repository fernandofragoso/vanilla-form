import { API_URL, API_PORT } from '../config';

export const getFields = () => {
  return fetch(`${API_URL}:${API_PORT}/fields`)
    .then(res => res.json())
    .then(json => json._embedded.request_fields);
}