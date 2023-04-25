import axios from 'axios';

//https://viacep.com.br/ws/01310930/json/

//baseURL é a URL base da API que não vai mudar, com 
//exceção da rota, que são os números e a extensão no caso
const api  = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;