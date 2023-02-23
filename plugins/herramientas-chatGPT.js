import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `*❗FAMMI UNA DOMANDA O UNA RICHIESTA O DAMMI ORDINE*\n\n*—◉ ESEMPIO*\n*◉ ${usedPrefix + command} COSA PENSI SULL AMORE?*\n*◉ ${usedPrefix + command}*`
try {
m.reply('*⏳ CI STO PENSANDO ⏳*')
await conn.sendPresenceUpdate('composing', m.chat)
let tiores = await fetch(`https://api.lolhuman.xyz/api/openai?apikey=${lolkeysapi}&text=${text}&user=user-unique-id`)
let hasil = await tiores.json()
m.reply(`${hasil.result}`.trim())
} catch {
throw `*[❗] PARLA ITALIANO IDIOTA!`
}}
handler.command = ['openai', 'chatgpt', 'ia', 'io']
export default handler
