const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8e15f6437492a74f16ec87d989c917ac&units=metric`);
    return resp.data.main.temp;
}
module.exports = {
    getClima
}