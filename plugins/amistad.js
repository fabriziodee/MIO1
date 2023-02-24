let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.jid)
let a = ps[Fl(R() * ps.length)]
let b
do b = ps[Fl(R() * ps.length)]
while (b === a)
m.reply(`*🔰 facciamo degli amici 🔰*\n\n*Oye ${toM(a)} parla in privato ${toM(b)} così puoi giocare e diventare amico 🙆*\n\n*Le migliori amicizie iniziano con un gioco 😉*`, null, {
contextInfo: {
mentionedJid: [a, b],
}})}
handler.command = ['amico','amigorandom','amistad']
handler.group = true
module.exports = handler
