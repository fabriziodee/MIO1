let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]

if (isBotAdmin && chat.antiArab) {
		
if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].banned = true
m.reply(`Bye Paky`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   
if (m.sender.startsWith('265' || '265')) {
global.db.data.users[m.sender].banned = true
m.reply(`Bye Paky`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('972' || '972')) {
global.db.data.users[m.sender].banned = true
m.reply(`Bye Paky`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
   
if (m.sender.startsWith('381' || '381')) {
global.db.data.users[m.sender].banned = true
m.reply(`Ciao Mark, fai buon ritorno in mask`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
   
if (m.sender.startsWith('44' || '44')) {
global.db.data.users[m.sender].banned = true
m.reply(`Addio Unlimited`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
   
if (m.sender.startsWith('41' || '41')) {
global.db.data.users[m.sender].banned = true
m.reply(`Addio Unlimited`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
   
if (m.sender.startsWith('994' || '994')) {
global.db.data.users[m.sender].banned = true
m.reply(`Bye Paky`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}    
   
}}
export default handler
handler.command = ['antivoip']
