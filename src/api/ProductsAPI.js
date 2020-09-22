import axios from 'axios'
import { getProducts } from '../api/endpoints'

async function fetchProducts () {
  const response = await axios.get(getProducts)
  return response
}

export { fetchProducts }