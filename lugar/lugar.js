const axios = require("axios");

const getLugarLatLong = async direccion => {
    const encodedUrl = encodeURI(direccion);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: {
            "x-rapidapi-key": "0a2966298bmsh5035b68df3fbe58p15261bjsnee487392d0a5"
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    };
};

module.exports = {
    getLugarLatLong
};