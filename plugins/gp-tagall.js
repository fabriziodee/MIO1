let handler = async (m, { conn, text, participants, isAdmin, isOwner, groupMetadata }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`╔══✪〘 *A TUTTI I PARTECIPANTI* 〙✪══\n╠➥gruppo : *${groupMetadata.subject}*\n╠➥ membri : *${participants.length}*${text ? `\n╠\n╠➥ messaggio : ${text}\n` : ''}\n╠\n╠➥ tag\n` + users.map(v => '╠🔸️ @' + v.replace(/@.+/, '')).join`\n` + '\n╚═〘 *SuperFabriMD* 〙\n\n▌│█║▌║▌║║▌║▌║▌║█', null, {
        mentions: users
    })
}
 
handler.help = ['tagall']
handler.tags = ['group']
handler.command = ['tagall']
handler.admin = true
handler.group = true
handler.register = true

export default handler
