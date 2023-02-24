
const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i
const linkRegex = /https:/i

export async function before(m, {conn, isAdmin, isBotAdmin }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup) return !1
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isGroupLink = linkRegex.exec(m.text)

    if (chat.antiLink && isGroupLink && !isAdmin) {
        if (isBotAdmin) {
            const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
            if (m.text.includes(linkThisGroup)) return !0
        }
    await m.reply(`*「 ANTI LINKS 」*\n*Ci vediamo piccola👋, ${await this.getName(m.sender)} hai infranto le regole verrai sterminato....!!*`)
    await m.reply(`*Hai 3 secondi per rimuovere il link e ritirare...!!!!*`)
    await m.reply(`*1!!*`)
    if (isAdmin) return m.reply('*Ti sei salvato, sei un amministratore, non posso cancellarti*')
    if (!isBotAdmin) return m.reply('*Il bot non 
        if (isBotAdmin && chat.antiLink) {
        	await conn.sendMessage(m.chat, { delete: m.key })
            await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        } else if (!chat.antiLink) return //m.reply('')
    }
    return !0
}
