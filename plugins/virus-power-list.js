let handler = async (m, { conn }) => {
let info = `
* VIRUS *
          
 🔥BY FABRI🔥
          
                  
–––––– *INFO* ––––––
*📮Usalo per lo scopo giusto. Non fare del male agli altri senza motivo!*
`
const sections = [
   {
    title: `✃ VIRTEX`,
	rows: [
	    {title: "🌀Power 1", rowId: 'zvirtex21', description: 'Non dimenticare di donare' },
	    {title: "🌀Power 2", rowId: 'zvirtex22', description: 'Non dimenticare di donare' },
	{title: "🌀Power 3", rowId: 'zvirtex23', description: 'Non dimenticare di donare' },
	{title: "🌀Power 4", rowId: 'zvirtex24', description: 'Non dimenticare di donare' },
	{title: "🌀Power 5", rowId: 'zvirtex25', description: 'Non dimenticare di donare' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "🔥Download WhatsApp Imune", rowId: 'zimune', description: 'Download WhatsApp Kebal' },
	    {title: "🔥Virus Troli", rowId: 'zvirustroli', description: 'PENTAGRAM' },
	    ]
        }, {
    title: `✃ BUY`,
	rows: [
	    {title: "💸Upgrade Premium", rowId: 'zsewa', description: 'E sblocca altre funzionalità premium!' },
	    ]
        },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "👺GASS",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.command = /^powerlist$/i
handler.premium = false

export default handler
