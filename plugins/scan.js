// Thanks to TOXIC-DEVIL
// https://github.com/TOXIC-DEVIL

let handler = async (m, { conn, args }) => {
    if (!args || !args[0] || args.length === 0) throw '*[❗] Inserisci un numero valido*\n\*Esempio:*\n*#scan 5219991402134*'
    if (args[0].startsWith('0')) throw '*[❗] Inserisci un prefisso!*'
    let user = await conn.isOnWhatsApp(args[0])
    let exists = user && user.exists ? true : false
    if (exists) {
        let sameGroup = [], isInDatabase = false
        let chat = conn.chats.all().filter(v => v.jid.endsWith('g.us') && !v.read_only)
        for (let gc of chat) {
            let participants = gc && gc.metadata && gc.metadata.participants ? gc.metadata.participants : []
            if (participants.some(v => v.jid === user.jid)) sameGroup.push(gc.jid)
        }
        if (user.jid in global.DATABASE._data.users) isInDatabase = true
        let str = ` 
*Nome:* ${conn.getName(user.jid)}
*Numero:* ${splitM(user.jid)}
*Menzione* ${toM(user.jid)}
*Link:* wa.me/${splitM(user.jid)}
*Jid:* ${user.jid}
*Whatsapp Bussines:* ${user.isBusiness ? 'Yes' : 'No'}
*Registrato nel database:* ${isInDatabase ? 'Yes' : 'No'}
*È in un gruppo con il bot:* ${sameGroup.length} *Group*
`.trim()
        m.reply(str, m.chat, { 
            contextInfo: { 
                mentionedJid: conn.parseMention(str)
            }
        })
    } else throw '*[ ⚠️ ] Utente non trovato, controlla che il numero inserito sia corretto *\n\n*👉🏻 Per vedere un esempio scrivi solo #scan*'
}
    
handler.help = ['scan'].map(v => v + ' [nomor]')
handler.tags = ['tools']
handler.command = /^scan$/i

module.exports = handler

function splitM(jid) {
    return jid.split('@')[0]
}

function toM(jid) {
    return '@' + splitM(jid)
}
