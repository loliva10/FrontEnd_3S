import axios from "axios"

//http://localhost:3000

// define a porta onde a API local está rodando 
const apiPort = "3000"

// define o endereço/endpoint da api local
const localApi = `http://localhost:${apiPort}`

// define o endereço para apis externas
const externalApi = null

// cria o objeto do axio com a URL base apontando para a api local 
const api = axios.create({
    baseURL: localApi
})

export default api