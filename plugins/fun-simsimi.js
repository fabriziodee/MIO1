import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
  
 let name = conn.getName(m.sender)
  if (!text) throw `Scrivi un testo per parlare con me\n\nEsempio\n*${usedPrefix + command} Hey SuperFabriBot*\n\nScrivi qualcosa per parlare con me\n\nEsempio\n*${usedPrefix + command} Ciao SuperFabri*`
  m.react('🗣️') 
  await conn.sendPresenceUpdate('composing', m.chat)
  //let res = await fetch(global.API('https://api.simsimi.net', '/v2/', { text: encodeURIComponent(m.text), lc: "es" }, ''))
  let res = await fetch (`https://api.simsimi.net/v2/?text=${text}&lc=it`)    //(`https://simsimi.info/api/?text=${text}&lc=it`)    
  let json = await res.json()
  let (json.success) = m.reply(json.success.replace('simsimi', 'DyLux').replace('Simsimi', 'DyLux').replace('sim simi', 'DyLux'))
  //m.reply(`${tes}`) 

handler.help = ['simsimi']
handler.tags = ['fun']
handler.command = ['bot', 'simi', 'simsimi', 'alexa', 'bixby', 'cortana', 'siri', 'okgoogle']
export default handler



