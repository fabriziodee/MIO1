let handler = async(m, { conn, text, participants }) => {
   
    if (!text) return conn.reply(m.chat, 'Inserisci il testo da spammare!', m)

    let pesan = `${text}`
    await m.reply(m.users,'*SPAM INIZIATO!*\n\nNota: il bot invierà spam 30 volte')
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
