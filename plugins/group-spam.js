let handler = async (m, { conn, text, participants, isOwner }) => {
try {  
let users = participants.map(u => conn.decodeJid(u.id))
let q = m.quoted ? m.quoted : m || m.text || m.sender
let c = m.quoted ? await m.getQuotedObj() : m.msg || m.text || m.sender
let msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, { [m.quoted ? q.mtype : 'extendedTextMessage']: m.quoted ? c.message[q.mtype] : { text: '' || c }}, { quoted: m, userJid: conn.user.id }), text || q.text, conn.user.jid, { mentions: users })
await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

} catch {  

let users = participants.map(u => conn.decodeJid(u.id))
let quoted = m.quoted ? m.quoted : m
let mime = (quoted.msg || quoted).mimetype || ''
let more = String.fromCharCode(8206)
let masss = more.repeat(850)
   
    if (!text) return conn.reply(m.chat, 'Inserisci il testo da spammare!', m)

    let pesan = `${text}`
    await m.reply('*SPAM INIZIATO!*\n\nNota: il bot invierà spam 30 volte')
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)
    await m.reply(pesan)

    conn.reply(m.chat, '📮Fine dello spam', m)
}
handler.help = ['groupspam'].map(v => v + ' <teks>')
handler.tags = ['group']
handler.command = /^(gpspam)$/i
handler.owner = true
handler.mods = false
handler.premium = true
handler.group = true
handler.private = false
handler.botAdmin = false

handler.fail = null
handler.exp = 100
handler.limit = true

export default handler 
