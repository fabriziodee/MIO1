
let handler = m => m

handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner } ) {
	
	if (!m.isGroup) return !1
	let chat = global.db.data.chats[m.chat]
	if (isBotAdmin && chat.onlyLatinos && !isAdmin && !isOwner) {
   if (m.sender.startsWith('212')) {
  global.db.data.users[m.sender].banned = true
m.reply(`Bye Paky`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   } 
   if (m.sender.startsWith('92')) {
global.db.data.users[m.sender].banned = true
m.reply(`Bye Paky`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   } 
   if (m.sender.startsWith('234')) {
global.db.data.users[m.sender].banned = true
m.reply(`Bye Paky`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   } 
   if (m.sender.startsWith('91')) {
global.db.data.users[m.sender].banned = true
m.reply(`Bye Paky`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   } 
   if (m.sender.startsWith('263')) {
global.db.data.users[m.sender].banned = true
m.reply(`Bye Paky`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   } 
   if (m.sender.startsWith('967')) {
  m.reply(te, m.sender)
global.db.data.users[m.sender].banned = true
m.reply(`Bye Paky`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   } 
   if (m.sender.startsWith('20')) {
  m.reply(te, m.sender)
global.db.data.users[m.sender].banned = true
m.reply(`Bye Paky`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   } 
   
   //---
}  
}
export default handler
