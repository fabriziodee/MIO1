let handler = async (m, { conn, args, usedPrefix, command }) => {
    let isClose = { // Switch Case Like :v
        'open': 'not_announcement',
        'close': 'announcement',
    }[(args[0] || '')]
    if (isClose === undefined)
        throw `
*✳️ DECICI UNA CAZZO DI OPZIONE*
  *🔸️ ${usedPrefix + command} Chiuso*
  *🔸️ ${usedPrefix + command} Aperto*
`.trim()
    await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['gruppo *aperto/chiuso*']
handler.tags = ['group']
handler.command = ['gruppo', 'grupo'] 
handler.admin = true
handler.botAdmin = true
handler.register = true

export default handler
