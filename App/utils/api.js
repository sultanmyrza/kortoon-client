import { BASE_URL } from '../utils/configs';

export function getKortoons() {
  return new Promise((resolve, reject) => {
    return fetch(`${BASE_URL}/api/kortoons`)
      .then(response => resolve(response.json()))
      .catch(error => reject(error));
  });
}

export function getKortoon(kortoonId) {
  return new Promise((resolve, reject) => {
    return fetch(`${BASE_URL}/api/kortoons/${kortoonId}`)
      .then(response => resolve(response.json()))
      .catch(error => reject(error));
  });
}
