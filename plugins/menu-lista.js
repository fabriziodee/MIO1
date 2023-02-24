import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let locale = 'es'
let d = new Date(new Date + 3600000)
let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    }) 

let pp = './src/fg_logo.jpg'
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, diamond, registered, self, level, role } = global.db.data.users[m.sender]
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
}) 
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 


const sections = [  
{
title: `superfabriʙᴏᴛ-ᴍᴅ ✨ seleziona qui bro`,
rows: [
       {title: "ɪɴғᴏ", description: "mostra i gruppi ufficiali del bot", rowId: `${usedPrefix}grouplist`},
        {title: "creatore", description: "numero del creatore", rowId: `${usedPrefix}owner`},
        {title: "ᴍᴇɴᴜᴄᴏᴍᴘʟᴇᴛᴏ", description: "per vedere tutti le funzioni del bot", rowId: `${usedPrefix}menucompleto`},
      {title: "stato", description: "per controllare da quanto è attivo il bot", rowId: `${usedPrefix}estado`},
      {title: "gruppi", description: "mostra i gruppi del bot", rowId: `${usedPrefix}grupos`},
      {title: "ᴘɪɴɢ", description: "mostra la super velocità del bot", rowId: `${usedPrefix}ping`},
      {title: "ᴇɴᴀʙʟᴇ", description: "per attivare le funzioni creatore del bot", rowId: `${usedPrefix}enable`},
      {title: "ʜɪᴅᴇᴛᴀɢ", description: "per menzionare tutti con un testo predefinito", rowId: `${usedPrefix}hidetag`},
      {title: "ᴛᴀɢᴀʟʟ", description: "per menzionare tutti in una lista", rowId: `${usedPrefix}tagall`},
      {title: "ᴅᴇʟ", description: "elimina l ultimo messaggio inviato", rowId: `${usedPrefix}del`},
              {title: "ᴡᴏʀᴋ", description: "lavora per generare esperienza, non ti servirà a nulla", rowId: `${usedPrefix}work`},
]}, ]
let name = await conn.getName(m.sender)
const listMessage = {
text: `*~ HEYY*${taguser}`, footer: `
╭┄〔 ≪ •🌐• ≫ 〕┄⊱
┆benvenuto nel menù lista
┆*ora:* ${time}    
┆*attivato da:* ${uptime}
┆*versione del bot:* ${vs}
┆*Ping:* ${speed}
┆◤━━☆. ∆ .☆ ━━◥
*superfabriʙᴏᴛ-ᴍᴅ ✨*`, pp,
title: null,
buttonText: "APRI IL MENU", 
sections }

conn.sendMessage(m.chat, listMessage)
}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(menu|menú|memu|memú|help|info|comandos|2help|menu1.2|ayuda|commands|commandos|m|\?)$/i
handler.register = true
export default handler


function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function ucapan() {
  const time = moment.tz('America/Los_Angeles').format('HH')  //America/Los_Angeles  Asia/Jakarta   America/Toronto
  let res = `OH BUON GIORNOO!`
  if (time >= 4) {
    res = `OH BUON GIORNO!`
  }
  if (time >= 11) {
    res = `OH BUON POMERIGGIO!`
  }
  if (time >= 15) {
    res = `OH BUON SERA`
  }
  if (time >= 17) {
    res = `OH BUONA NOTTE`
  }
  return res
} 
