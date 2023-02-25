let handler = async (m, { conn }) => {
let info = `
 INFO BOT
`
const sections = [
   {
    title: `BOT INFORMATION`,
	rows: [
    {title: "DONASI", rowId: 'zdonasi' },
    {title: "SEWA/PREMIUM", rowId: 'zsewa'},
	{title: "STORE", rowId: '.zstore'},
	{title: "OWNER", rowId: 'zowner'},
	{title: "SPEED", rowId: 'zspeed'},
	]
    }, 
    
]

const listMessage = {
  text: info,
  footer: '',
  title: null,
  buttonText: "Tap Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "ðŸŒŽ Group Official", null,null, [['Owner','.owner']], m)
}
handler.command = /^vall$/i

handler.premium = false

export default handler
