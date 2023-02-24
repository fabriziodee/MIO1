let handler = m => m

let linkRegex = /https:/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI LINKS 」*\n*Ci vediamo piccola👋, ${await this.getName(m.sender)} hai infranto le regole verrai sterminato....!!*`)
    await m.reply(`*Hai 3 secondi per rimuovere il link e ritirare...!!!!*`)
    await m.reply(`*3!!*`)
    await m.reply(`*2!!*`)
    await m.reply(`*1!!*`)
    if (isAdmin) return m.reply('*Ti sei salvato, sei un amministratore, non posso cancellarti*')
    if (!isBotAdmin) return m.reply('*Il bot non è amministratore, non può sterminare le persone*')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('*Lol.. hai inviato il link di questo gruppo*')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

handler.command = /^(antilink2)$/i
handler.group = handler.botAdmin = handler.admin = true
handler.fail = null
export default handler
