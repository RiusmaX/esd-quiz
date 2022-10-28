import axios from 'axios'

const api = axios.create({
  baseURL: 'https://strapi.esd-quiz.sergent.tech/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const getQuestions = async () => {
  try {
    const result = await api.get('/questions?sort=order&populate=*')
    return result.data
  } catch (error) {
    console.error(error)
  }
}

const getPlayers = async () => {
  try {
    const result = await api.get('/players')
    return result.data
  } catch (error) {
    console.error(error)
  }
}

const getResults = async (playerId) => {
  try {
    const result = await api.get(`/results?populate=*&filters[player][id][$eq]=${playerId}`)
    return result.data.data[0]
  } catch (error) {
    console.error(error)
  }
}

const getClassement = async (playerId) => {
  try {
    const result = await api.get('/results?sort=total:desc&populate=player&pagination[pageSize]=3')
    return result.data
  } catch (error) {
    console.error(error)
  }
}

const getWords = async () => {
  try {
    const result = await api.get('/words?pagination[limit]=200')
    return result.data
  } catch (error) {
    console.error(error)
  }
}

const createWord = async (word) => {
  const player = await JSON.parse(window.localStorage.getItem('PLAYER'))
  const data = {
    data: {
      word,
      player: player.id
    }
  }
  try {
    const result = await api.post('/words', data)
    return result.data
  } catch (error) {
    console.error(error)
  }
}

const createPlayer = async (name) => {
  const data = {
    data: {
      name
    }
  }

  try {
    const playerResult = await api.post('/players', data)
    if (playerResult && playerResult.data) {
      const resultData = {
        data: {
          player: playerResult.data.data.id,
          total: 0
        }
      }
      const result = await api.post('/results', resultData)
      if (result) {
        window.localStorage.setItem('RESULT', JSON.stringify(result.data.data))
      }
      return playerResult.data
    }
  } catch (error) {
    console.error(error)
  }
}

const updatePlayer = async (playerId, email) => {
  const data = {
    data: {
      email
    }
  }
  try {
    const result = await api.put(`/players/${playerId}`, data)
    return result.data
  } catch (error) {
    console.error(error)
  }
}

const setResult = async (answeredQuestions, total) => {
  const player = JSON.parse(window.localStorage.getItem('PLAYER'))
  const playerResult = JSON.parse(window.localStorage.getItem('RESULT'))
  const data = {
    data: {
      player: player.id,
      answeredQuestions,
      total
    }
  }
  try {
    const result = await api.put(`/results/${playerResult.id}?populate=*`, data)
    if (result && result.data) {
      window.localStorage.setItem('RESULT', JSON.stringify(result.data.data))
    }
  } catch (error) {
    console.error(error)
  }
}

export {
  createPlayer,
  getQuestions,
  getPlayers,
  getWords,
  getResults,
  getClassement,
  setResult,
  updatePlayer,
  createWord
}
