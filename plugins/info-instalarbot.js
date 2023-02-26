let handler = async (m, { conn, usedPrefix }) => { 
await m.reply(`╰⊱🔰⊱ *ASPETTA* ⊱🔰⊱╮`)
  //conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['Menu', '/menu']], m)
let texto1 = `
/
------------------------------------

*—◉ ᴄᴏᴍᴀɴᴅᴏ ᴛᴇʀᴍᴜx*
>  |
>  |
>  |
>  |
>  |
>  |
>  |
>  |
>  |
>  |
>  |
>  |
(|||)

📌 |

📌 |

 |
 |
let buttonMessage= {
'document': { url: `https://youtu.be/|` },
'mimetype': `application/${document}`,
'fileName': `-𝑴𝑫`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://youtu.be/!',
'mediaType': 2,
'previewType': 'pdf',
'title': 'tutorial del instalación',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '✳️ MENU ✳️'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(instalarbot|instalarbot)$/i
handler.register = true
export default handler
