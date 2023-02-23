
import yts from 'yt-search'

let handler = async (m, {conn, text }) => {
  if (!text) throw '✳️ Cosa vuoi che cerchi su YouTube??'
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
╭━─━─━─≪≫─━─━─━╮
│ 🔸️ ${v.title}
│——————«•»——————
│🔸 *Link* : ${v.url}
│🔸 *Durata* : ${v.timestamp}
│🔸 *Caricato il :* ${v.ago}
│🔸 *Visual:* ${v.views}
╰━─━─━─≪≫─━─━─━╯
   `.trim()
      case 'canal': return `
╭━─━─━─≪≫─━─━─━╮
│ 🔸️ *${v.name}* (${v.url})
│——————«•»——————
│🔸 ${v.subCountLabel} (${v.subCount}) Suscribirse
│🔸 ${v.videoCount} videos
╰━─━─━─≪≫─━─━─━╯
`.trim()
    }
  }).filter(v => v).join('\n\n________________________\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch'] 
handler.tags = ['downloader']
handler.command = ['ytsearch', 'yts'] 
handler.register = true

export default handler
