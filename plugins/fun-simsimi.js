import fetch from 'node-fetch'
let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `Scrivi un testo per parlare con me\n\nEsempio\n*${usedPrefix + command} Hey SuperFabriBot*\n\nScrivi qualcosa per parlare con me\n\nEsempio\n*${usedPrefix + command} Ciao SuperFabri*`
let res = await fetch (`https://api.simsimi.net/v2/?text=${text}&lc=it`)    //(`https://simsimi.info/api/?text=${text}&lc=it`)    
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
//m.reply(`${tes}`) 
conn.sendHydrated(m.chat, `${tes}`, `𝘼𝙄 | ${wm}`, null, null, null, null, null, [
['Torna al menu ☘️', '/menu']
], m)
}
handler.help = ['simsimi']
handler.tags = ['fun']
handler.command = ['bot', 'simi', 'simsimi', 'alexa', 'bixby', 'cortana', 'siri', 'okgoogle']
export default handler



