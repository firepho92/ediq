import axios from 'axios'
import { authenticateURL, getUserURL } from '../api/endpoints'

async function auth(user) {
  try {
    const response = await axios.post(authenticateURL, user)
    return response
  } catch(e) {
    throw e
  }
}

async function getUser(id) {
  try{
    const response = await axios.get(getUserURL + id)
    return response
  } catch(e) {
    console.log(e)
  }
}

export { auth, getUser }