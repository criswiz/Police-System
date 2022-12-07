import axios from 'axios'

const API_URL = '/api/suspect/'

// Create new goal
const createSuspect = async (suspectData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, suspectData, config)

  return response.data
}

// Get user goals
const getSuspect = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}


const suspectService = {
  createSuspect,
  getSuspect,
}

export default suspectService
