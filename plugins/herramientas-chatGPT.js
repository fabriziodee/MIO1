import fetch from 'node-fetch'
let handler = async (m, { text }) => {
m.reply('*⏳ CI STO PENSANDO ⏳*')
await conn.sendPresenceUpdate('composing', m.chat)
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*[❗] PARLA ITALIANO IDIOTA!`
}}
handler.owner = true 
export default handler
