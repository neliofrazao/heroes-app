import axios from 'axios'

const BASE_URL = 'https://gateway.marvel.com:443/v1/public/'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    ts: '1589058413',
    apikey: '814953dc97adc8bda38cd48b35e0078e',
    hash: '11ee9101bc29aa7cd885f0c58a18c232',
  },
})

export default axiosInstance
