
let handler = async (m, { conn, participants, usedPrefix, command }) => {
	
let kickte = `✳️ Uso corretto del comando\n*${usedPrefix + command}* @tag`

if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
m.reply(`✅ Utente eliminato`) 

}

handler.help = ['kick @user']
handler.tags = ['group']
handler.command = ['kick', 'via', 'supervia'] 
handler.admin = true
handler.group = true
handler.botAdmin = true
handler.register = true

export default handler
