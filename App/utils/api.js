import { BASE_URL, API } from '../utils/configs';

export function getKortoons() {
  return new Promise((resolve, reject) => {
    return fetch(`${BASE_URL}/${API}/kortoons`)
      .then(response => resolve(response.json()))
      .catch(error => reject(error));
  });
}

export function getKortoon(kortoonId) {
  return new Promise((resolve, reject) => {
    return fetch(`${BASE_URL}/${API}/kortoons/${kortoonId}/episodes`)
      .then(response => resolve(response.json()))
      .catch(error => reject(error));
  });
}

export function getScenes(kortoonId, episodeId) {
  return new Promise((resolve, reject) => {
    return fetch(
      `${BASE_URL}/${API}/kortoons/${kortoonId}/episodes/${episodeId}/scenes`
    )
      .then(response => resolve(response.json()))
      .catch(error => reject(error));
  });
}
