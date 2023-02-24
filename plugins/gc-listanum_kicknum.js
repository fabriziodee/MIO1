/*              Codigo Creado Por Bruno Sobrino 
      (https://github.com/BrunoSobrino/TheMystic-Bot-MD) 
*/

let handler = async (m, { conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin }) => {
if (!args[0]) return m.reply(`*[❗] INSERISCI IL PREFISSO DEL PAESE, TUTTI I NUMERO CON QUEL PREFISSO VERRANNO ELIMINATI, ESEMPIO: ${usedPrefix + command} 44*`) 
if (isNaN(args[0])) return m.reply(`*[❗] INSERISCI IL PREFISSO DEL PAESE, TUTTI I NUMERO CON QUEL PREFISSO VERRANNO ELIMINATI, ESEMPIO: ${usedPrefix + command} 91*`) 
let lol = args[0].replace(/[+]/g, '')
let ps = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol)) 
let bot = global.db.data.settings[conn.user.jid] || {}
if (ps == '') return m.reply(`*[❗] IN QUESTO GRUPPO HO ELIMINATO GIA TUTTI CON QUESTO PREFISSO +${lol}*`)
let numeros = ps.map(v=> '🗡️ @' + v.replace(/@.+/, ''))
const delay = time => new Promise(res=>setTimeout(res,time));
switch (command) {
case "listanum": 
conn.reply(m.chat, `*LISTA DEI NUMERI CON IL PREFISSO +${lol} CHE SONO DENTRO IL GRUPPO:*\n\n` + numeros.join`\n`, m, { mentions: ps })
break   
case "kicknum":  
if (!bot.restrict) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] IL PROPRIETARIO HA ATTIVATO LA RESTRIZIONE (#𝚎𝚗𝚊𝚋𝚕𝚎 𝚛𝚎𝚜𝚝𝚛𝚒𝚌𝚝) CONTATTALO PER FARLE DISABILITARE*') 
if (!isBotAdmin) return m.reply('*[❗𝐈𝐍𝐅𝐎❗] IL BOT NON E ADMIN, NON PUO AGIRE*')          
conn.reply(m.chat, `*[❗] INIZIO L ELIMINAZIO DEI PREFIZZI +${lol}, TEMPO 0 E LI ELIMINERO*`, m)            
let ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net'
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid && v.startsWith(lol || lol))
for (let user of users) {
let error = `@${user.split("@")[0]} HA ELIMINATO IL GRUPPO O E GIA STATO ELIMINATO*`    
if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) { 
await delay(2000)    
let responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
if (responseb[0].status === "404") m.reply(error, m.chat, { mentions: conn.parseMention(error)})  
await delay(10000)
} else return m.reply('*[❗] 𝙴𝚁𝚁𝙾𝚁*')}
break            
}}
handler.command = /^(listanum|kicknum)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
