
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, '*_Inserisci il testo da inviare come spam!_*', m)

    let pesan = `${text}`
    await m.reply('*_START SPAM!_*\n\n*_Nota: il Bot invierà il messaggio 30 volte_*')
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
    await m.reply(pesan)

}
handler.help = ['spamchat'].map(v => v + ' <teks>')
handler.tags = ['General']
handler.command = ['spam']
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false
handler.register = true
handler.limit = false

handler.admin = true
handler.botAdmin = true

handler.fail = null
handler.exp = 100
handler.limit = false

module.exports = handler
