let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*╭┅〘🛑 SEGUI LE REGOLE 🛑〙*
*▌║✙*❌PROIBITO CHIAMARE IL BOT O CREATORE📲
*▌║✙*❌PROIBITO SPAMMARE AL BOT☢
*▌║✙*❌PROIBITO AGGIUNGERE IL BOT AI GRUPPI♻
*╰═┅ৡৢ͜͡✦╡SUPERFABRIBOT╞┅ৡৢ͜͡✦═╯*
`.trim() 

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*🔥 SUPERFABRIBOT🔥*', 'status@broadcast')
}
handler.help = ['reglas']
handler.tags = ['info']
handler.command = /^(reglas|regole)$/i

module.exports = handler
