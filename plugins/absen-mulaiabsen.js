let handler = async (m, { conn, text, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            dfail('admin', m, conn)
            throw 0
        }
    }
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.send2Button(m.chat, `ci sono ancora sedute assenti in corso!`, wm, 'cancella sessione', `.hapusabsen`, 'controllo', '.cekabsen', m)
        throw false
    }
    conn.absen[id] = [
        await conn.sendButton(m.chat, `inizia la sessione assente!`, wm, 'presente', `.absen`, m),
        [],
        text
    ]
}
handler.help = ['+absen [teks]']
handler.tags = ['absen']
handler.command = /^(start|mulai|\+)(attendance|absen)$/i

module.exports = handler
