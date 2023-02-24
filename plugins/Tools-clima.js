import axios from "axios"

let handler = async (m, { args }) => {
  if (!args[0]) throw "⚠️ *_Escriba el nombre de su ciudad o país._*"
  try {
    const response = axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273`
    )
    const res = await response
    const name = res.data.name
    const Country = res.data.sys.country
    const Weather = res.data.weather[0].description
    const Temperature = res.data.main.temp + "°C"
    const Minimum_Temperature = res.data.main.temp_min + "°C"
    const Maximum_Temperature = res.data.main.temp_max + "°C"
    const Humidity = res.data.main.humidity + "%"
    const Wind = res.data.wind.speed + "km/h"
    const wea = `「 📍 」 Località: ${name}\n「 🗺️ 」 Paese: ${Country}\n「 🌤️ 」 Tempo: ${Weather}\n「 🌡️ 」Temperatura: ${Temperature}\n「 💠 」 Temperatura mínima: ${Minimum_Temperature}\n「 📛 」 Temperatura mássima: ${Maximum_Temperature}\n「 💦 」 Umidità: ${Humidity}\n「 🌬️ 」 Vento: ${Wind}
  `

    m.reply(wea)
  } catch (e) {
    return "⚠️ *_Errore, nessun risultato trovato, prova a digitare un paese o una città esistente._*"
  }
}

handler.help = ['clima *<ciudad/país>*']
handler.tags = ['info']

handler.command = /^(clima|meteo)$/i

export default handler
