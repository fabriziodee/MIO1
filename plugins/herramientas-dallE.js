let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `❗INSERISCI UN TESTO PER CREARE UN IMMAGINE DALL INTELLIGENZA ARTIFICIALIE*\n\n*—◉ ESEMPI DI COMANDI*\n*◉ ${usedPrefix + command} GATTINI CHE PIANGONO*\n*◉ ${usedPrefix + command} Cr7 piange su Cassano*`
try {
m.reply('*[❗] Aspetta un momento [❗]*')
let tiores = await conn.getFile(`https://api.lolhuman.xyz/api/dall-e?apikey=${lolkeysapi}&text=${text}`)
await conn.sendFile(m.chat, tiores.data, null, null, m)
} catch {
throw `*[❗] errore non è nelle mie capacita inventare cose simili, riprova con meno dati*`
}}
handler.command = ['dall-e', 'dalle', 'ia2', 'cimg', 'openai2']
export default handler
