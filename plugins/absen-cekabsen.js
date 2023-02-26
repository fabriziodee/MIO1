let handler = async (m, { conn }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendButton(m.chat, `non c'è assenteismo!`, wm, 'inizio a contare gli assenti', `zmulaiabsen`, m)
        throw false
    }

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `├ ${i + 1}. ${db.data.users[v].name}`).join('\n')
    let caption = `
${date}
${conn.absen[id][2]}

┌「 appello 」
├ total: ${absen.length}
${list}
└────`.trim()
    await conn.send2ButtonLoc(m.chat, fla + 'appello', caption, wm, 'presente', `zabsen`, 'eliminare sessione', `zhapusabsen`)
}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^(cek)$/i

module.exports = handler
