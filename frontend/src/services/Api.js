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

const createPlayer = async (name) => {
  const data = {
    data: {
      name
    }
  }
  try {
    const result = await api.post('/players', data)
    return result.data
  } catch (error) {
    console.error(error)
  }
}

export {
  createPlayer,
  getQuestions
}
