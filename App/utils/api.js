import { BASE_URL } from '../utils/configs';

export function getKortoons() {
  return new Promise((resolve, reject) => {
    return fetch(`${BASE_URL}/api/kortoons`)
      .then(response => resolve(response.json()))
      .catch(error => reject(error));
  });
}
