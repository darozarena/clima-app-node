const axios = require("axios");

const getClima = async(lat, lng) => {
    const encodedUrl = encodeURI(direccion);

    const resp = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=7e5741f83e36dfe420384d7ff46cdde1
        &units=metric`);

    return resp.data.main.temp;
};

module.exports = {
    getClima
};