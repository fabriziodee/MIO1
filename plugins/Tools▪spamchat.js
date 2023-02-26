let handler = async(m, { conn, text }) => {
    try {  
let users = participants.map(u => conn.decodeJid(u.id))
let q = m.quoted ? m.quoted : m || m.text || m.sender
let c = m.quoted ? await m.getQuotedObj() : m.msg || m.text || m.sender
let msg = conn.cMod(m.chat, generateWAMessageFromContent(m.chat, { [m.quoted ? q.mtype : 'extendedTextMessage']: m.quoted ? c.message[q.mtype] : { text: '' || c }}, { quoted: m, userJid: conn.user.id }), text || q.text, conn.user.jid, { mentions: users })
await conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
    if (!text) return conn.reply(m.chat, '*_Inserisci il testo da inviare come spam!_*', m)
    let users = participants.map(u => conn.decodeJid(u.id))
    let quoted = m.quoted ? m.quoted : m
    let mime = (quoted.msg || quoted).mimetype || ''
    let isMedia = /image|video|sticker|audio/.test(mime)
    let more = String.fromCharCode(8206)
    let masss = more.repeat(850)
    }
    let pesan = `${text}`
    await m.reply('*_START SPAM!_*\n\n*_Nota: il Bot invierà il messaggio 30 volte_*')

await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
await conn.reply(m.chat, (pesan))
    
 }
handler.help = ['spamchat'].map(v => v + ' *<texto>*')
handler.tags = ['tools']
handler.command = ['spam']

handler.fail = null
handler.owner = true

export default handler
