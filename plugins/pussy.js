const axios = require('axios')
let handler = async(m, { conn }) => {
if (!DATABASE._data.chats[m.chat].nsfw && m.isGroup) throw '*[ ⚠️ ] I comandi +18 sono disabilitati in questo gruppo, se sei un amministratore di questo gruppo e vuoi abilitarli scrivi #enable nsfw*'
let porn = await axios.get('https://meme-api.herokuapp.com/gimme/pussy')
conn.sendFile(m.chat, `${porn.data.url}`, '', `${porn.data.title}`, m)
}
handler.help = ['pussy']
handler.tags = ['images']
handler.command = /^(pussy)$/i
handler.fail = null
handler.exp = 0
module.exports = handler
