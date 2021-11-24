//Purpose: Creates fetch calls to database.json
const remoteURL = "http://localhost:8088"

export const getDevById = (userId) => {
  return fetch(`${remoteURL}/users/${userId}`)
    .then(res => res.json())
}

export const getAllDevs = () => {
    return fetch(`${remoteURL}/users`)
      .then(res => res.json())
}