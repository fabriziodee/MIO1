let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '*_Inserisci il testo da inviare come spam!_*', m)

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
handler.command = /^(spamchat)$/i

handler.fail = null
handler.exp = 100
handler.limit = true

export default handler
