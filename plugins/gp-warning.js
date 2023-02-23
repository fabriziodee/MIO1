
let war = global.maxwarn
let handler = async (m, { conn, text, args, groupMetadata, usedPrefix, command }) => {      
        let who
        if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
        else who = m.chat
        if (!who) throw `✳️ Menziona o rispondi ad un msg di un utente\n\n📌 𝙴sempio : ${usedPrefix + command} @user`
        if (!(who in global.db.data.users)) throw `✳️ L'utente non è nel DATABASE`
        let name = conn.getName(m.sender)
        let warn = global.db.data.users[who].warn
        if (warn < war) {
            global.db.data.users[who].warn += 1
            m.reply(`
╔═════ೋೋ═════╗
╠ ⚠️ UTENTE AVVERTITO ⚠️
╠ ◤━━━━━ ☆. ∆ .☆ ━━━━━◥
╠ • *𝙰𝚍𝚖𝚒𝚗:* ${name}
╠ • *Utente:* @${who.split`@`[0]}
╠ • *Avvertimento:* ${warn + 1}/${war}
╠ • *Motivo:* ${text}
╚═════ೋೋ ═════╝`, null, { mentions: [who] }) 
            m.reply(`
⚠️ *Avvertimento* ⚠️
Hai ricevuto un avvertimento da parte di un admin

• *Avvertimento:* ${warn + 1}/${war} 
se riceverai *${war}* avvertimenti sarai eliminato automaticamente dal gruppo`, who)
        } else if (warn == war) {
            global.db.data.users[who].warn = 0
            m.reply(`⛔l utente ha superato  *${war}* avvertimenti, per tanto sarà eliminato`)
            await time(3000)
            await conn.groupParticipantsUpdate(m.chat, [who], 'remove')
            m.reply(`♻️ é stato eliminato dal gruppo *${groupMetadata.subject}* perchè ha ricevuto troppi avvertimenti *${war}* miao `, who)
        }
}
handler.help = ['warn @user']
handler.tags = ['group']
handler.command = ['warn'] 
handler.group = true
handler.admin = true
handler.owner = true
handler.botAdmin = true
handler.register = true

export default handler

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
