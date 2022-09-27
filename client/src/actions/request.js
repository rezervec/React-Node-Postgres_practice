import axios from 'axios'

export const getElems = async () => {
  const req = await axios.get('http://localhost:5000')
  return req.data
}