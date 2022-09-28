import axios from 'axios'

export const getRows = async () => {
  // отправляем get запрос по адресу
  const responce = await axios.get('http://localhost:5000')
  // возвращаем полученные данные, нужные нам хранятся в data.rows
  return responce.data.rows
}