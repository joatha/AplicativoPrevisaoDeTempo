import axios from 'axios';

//https://api.hgbrasil.com/weather?key=38d89e7b&lat=-23.682&lon=-46.875

export const key= '38d89e7b';

const api = axios.create({
    baseURL:'https://api.hgbrasil.com'
});

export default api;