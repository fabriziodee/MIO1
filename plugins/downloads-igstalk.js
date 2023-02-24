
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `✳️ Inserisci il nome utente di Instagram\n\n📌Esempio: ${usedPrefix + command} _Fabri115` 
    let res = await fg.igStalk(args[0])
    let te = `
╭━─━─━─≪≫─━─━─━╮
│ ≡  *STALKING* 
│——————«•»——————
│🔸 *🔖Nome:* ${res.name} 
│🔸 *🔖Username:* ${res.username}
│🔸 *👥Follower:* ${res.followersH}
│🔸 *🫂Seguiti:* ${res.followingH}
│🔸 *📌Bio:* ${res.description}
│🔸 *🏝️Posts:* ${res.postsH}
│——————«•»——————
│🔸 *🔗 Link* : https://instagram.com/${res.username.replace(/^@/, '')}
╰━─━─━─≪≫─━─━─━╯`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk']
handler.tags = ['downloader']
handler.command = ['igstalk'] 
handler.register = true

export default handler
