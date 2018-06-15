import { BASE_URL, API } from '../utils/configs';

export function getKortoons() {
  const url = `${BASE_URL}/${API}/kortoons`;
  return new Promise((resolve, reject) => {
    return fetch(url)
      .then(response => resolve(response.json()))
      .catch(error => reject(error));
  });
}

export function getKortoon(kortoonId) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}/${API}/kortoons/${kortoonId}/episodes`;
    return fetch(url)
      .then(response => resolve(response.json()))
      .catch(error => reject(error));
  });
}

export function getScenes(kortoonId, episodeId) {
  return new Promise((resolve, reject) => {
    const url = `${BASE_URL}/${API}/kortoons/${kortoonId}/episodes/${episodeId}/scenes`;
    return fetch(url)
      .then(response => resolve(response.json()))
      .catch(error => reject(error));
  });
}
