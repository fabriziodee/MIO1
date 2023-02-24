let handler = async (m, { conn }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `• Funzioni totali: ${totalf}`,m)
}

handler.help = ['totalfunciones']
handler.tags = ['info']
handler.command = ['tf']
handler.register = true
handler.limit = false
export default handler 
