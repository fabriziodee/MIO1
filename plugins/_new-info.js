let handler = async (m, { conn }) => {
let info = `
 INFO BOT
`
const sections = [
   {
    title: `BOT INFORMATION`,
	rows: [
    {title: "MENU", rowId: 'zmenu' },
    {title: "SEWA/PREMIUM", rowId: 'zlistprem'},
	{title: "ATTIVO DA", rowId: 'zuptime'},
	{title: "OWNER", rowId: 'zowner'},
	{title: "SPEED", rowId: 'zping'},
	{title: "GRUPPI", rowId: 'zgrupos'},	
	]
    }, 
    
]

let name = await conn.getName(m.sender)
const listMessage = {
text: `*~ HEYY*`, footer: `
╭┄〔 ≪ •🌐• ≫ 〕┄⊱
┆*ora:* ${time}    
┆*attivato da:* ${uptime}
┆*versione del bot:* ${vs}
*superfabriʙᴏᴛ-ᴍᴅ ✨*`, pp,
title: null,
buttonText: "APRI IL MENU", 
sections }
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}
handler.command = /^vall$/i

handler.premium = false

export default handler
