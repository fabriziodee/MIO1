let handler = async(m, { conn, text }) => {
   
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
handler.tags = ['owner']
handler.command = /^(gpspam)$/i
handler.owner = true
handler.mods = false
handler.group = true

export default handler 
