//import db from '../lib/database.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
   let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    else who = m.chat
    let user = global.db.data.users[who]
    if (!who) throw `✳️ Tagga o menziona qualcuno per sbannarlo dai comandi`
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `Utente @${who.split`@`[0]} è stato sbannato con successo✅️ ora può utilizzare SuperFabriBot`, m, { mentions: [who] })
}
handler.help = ['unban @user']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.owner = true

export default handler
