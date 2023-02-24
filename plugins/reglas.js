let handler = async (m, { conn }) => {
let info = `
*╭┅〘🛑 SEGUI LE REGOLE 🛑〙*
*▌║✙*❌PROIBITO CHIAMARE IL BOT O CREATORE📲
*▌║✙*❌PROIBITO SPAMMARE AL BOT☢
*▌║✙*❌PROIBITO AGGIUNGERE IL BOT AI GRUPPI♻
*╰═┅ৡৢ͜͡✦╡SUPERFABRIBOT╞┅ৡৢ͜͡✦═╯*
`.trim() 

handler.help = ['reglas']
handler.tags = ['info']
handler.command = ['reglas', 'regole']

module.exports = handler
