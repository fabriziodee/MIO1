let handler = async (m, { conn, usedPrefix }) => {
await m.reply(`╰⊱🔰⊱ *ASPETTA* ⊱🔰⊱╮`)
//conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['Menu', '/menu']], m)  
let texto1 = 'SE SARAI BUONO TI SPIEGHERO..USA IL COMANDO !owner PER CONTATTARMI'

handler.command = /^(ib|instalarbot)$/i
handler.register = true
export default handler
