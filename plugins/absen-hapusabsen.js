let handler = async (m, { conn, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            dfail('admin', m, conn)
            throw false
        }
    }
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) return await conn.sendButton(m.chat, `non c'è assenteismo!`, wm, 'inizio assente', `zmulaiabsen`, m)
    delete conn.absen[id]
    m.reply(`cancellato con successo la sessione assente!`)
}
handler.help = ['-absen']
handler.tags = ['absen']
handler.command = /^(delete|hapus|-)(attendance|absen)$/i

module.exports = handler
