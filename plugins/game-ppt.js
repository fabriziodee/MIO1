let handler = async (m, { conn, text, command, usedPrefix, args }) => {
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
await conn.sendPresenceUpdate('composing', m.chat)
let reseqv = `🥌SASSO, 📄CARTA, ᴏ ✂️FORBICE\nPUOI USARE QUESTO COMANDO\n🥌.ppt sasso\n📄 .ppt carta\n✂️.ppt forbice\n\nusa la minuscola\n\nEsempio : *${usedPrefix + command}* carta\n`
    if (!text) throw reseqv
var astro = Math.random()
if (astro < 0.34) {
astro = 'sasso' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'forbice' 
} else {
astro = 'carta'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`🔰 PARI! 🤝\n\n👉🏻 TU: ${text}\n👉🏻 IL BOT: ${astro}\n🎁 PREMIO +500 XP`)
} else if (text == 'carta') {
if (astro == 'sasso') {
global.db.data.users[m.sender].exp += 2000
m.reply(`🥳 HAI VINTO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 IL BOT: ${astro}\n🎁 PREMIO +2000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HAI PERSO ! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 IL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'forbice') {
if (astro == 'carta') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HAI VINTO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 IL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HAI PERSO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 IL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'forbice') {
if (astro == 'carta') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HAI VINTO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 IL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HAI PERSO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 IL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'carta') {
if (astro == 'sasso') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HAI VINITO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 IL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HAI PERSO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 I𝒍 𝒃𝒐𝒕: ${astro}\n❌ PREMIO -300 XP`)
}
} else if (text == 'sasso') {
if (astro == 'forbice') {
global.db.data.users[m.sender].exp += 1000
m.reply(`🥳 HAI VINTO! 🎉\n\n👉🏻 TU: ${text}\n👉🏻 IL BOT: ${astro}\n🎁 PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HAI PERSO! 🤡\n\n👉🏻 TU: ${text}\n👉🏻 IL BOT: ${astro}\n❌ PREMIO -300 XP`)
}
}}
handler.help = ['ppt']
handler.tags = ['game']
handler.register = true 
handler.command = /^(ppt)$/i
export default handler
