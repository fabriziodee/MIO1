
let handler = m => m

handler.before = async function (m, {conn, isAdmin, isBotAdmin, isOwner } ) {
	
	if (!m.isGroup) return !1
	let chat = global.db.data.chats[m.chat]
	let te = `In questo gruppo sono consentiti solo autorizzati\nMi dispiace che verrai espulso dal gruppo`
	if (isBotAdmin && chat.onlyLatinos && !isAdmin && !isOwner) {
   if (m.sender.startsWith('212')) {
  //global.db.data.users[m.sender].banned = true
 m.reply(te, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('92')) {
  m.reply(te, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('234')) {
  m.reply(te, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('91')) {
  m.reply(te, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('263')) {
  m.reply(te, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('967')) {
  m.reply(te, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   if (m.sender.startsWith('20')) {
  m.reply(te, m.sender)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   
   //---
}  
}
export default handler
