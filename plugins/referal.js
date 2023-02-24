const crypto = require('crypto')

const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
    5: 40000,
   10: 100000,
   20: 250000,
   50: 1000000,
  100: 10000000,
}

let handler = async (m, { conn, usedPrefix, text }) => {
  let users = global.db.data.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw 'Impossibile utilizzare il codice di riferimento!'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw 'Codice di riferimento non valido'
    let count = users[link_creator].ref_count++
    let extra = xp_bonus[count] || 0
    users[link_creator].exp += xp_link_creator + extra
    users[m.sender].exp += xp_first_time
    users[m.sender].ref_count = 0
    m.reply(`
Congratulazioni!
+${xp_first_time} XP
`.trim())
    m.reply(`
Qualcuno ha usato il tuo codice di riferimento
+${xp_link_creator + extra} XP
`.trim(), link_creator)
  } else {
    let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
    users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
    let command_text = `${usedPrefix}ref ${code}`
    let command_link = `wa.me/${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    let share_text = `
Prendi ${xp_first_time} XP per coloro che utilizzano il link/codice di riferimento di seguito

Codice di riferimento: *${code}*

${command_link}
`.trim()
    m.reply(`
Prendi ${xp_link_creator} XP per ogni nuovo utente che utilizza il tuo codice di riferimento
${users[m.sender].ref_count} le persone hanno usato il tuo codice di riferimento

Il tuo codice di riferimento: ${code}

Condividi il link con gli amici: ${command_link}

o messaggio a un amico wa.me/?text=${encodeURIComponent(share_text)}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} Persone = Bonus ${xp} XP`).join('\n')}
`.trim())
  }
}
handler.help = ['ref']
handler.tags = ['main']

handler.command = ['ref']

handler.register = true

module.exports = handler
