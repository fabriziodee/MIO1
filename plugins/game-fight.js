let handler = async (m, { conn, usedPrefix, participants }) => {
  conn.level = global.db.data.users[m.sender]
  conn.fight = conn.fight ? conn.fight : {}
  const delay = time => new Promise(res => setTimeout(res, time));

  if (typeof conn.fight[m.sender] != "undefined" && conn.fight[m.sender] == true) return m.reply(`Stai ancora combattendo.`)

  let users = participants.map(u => u.id)
  var contro
  contro = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.data.users[contro] == "undefined" || contro == m.sender) {
    contro = users[Math.floor(users.length * Math.random())]
  }

  let VecchiaSfida = getRandom(0, 1)

  m.reply(`*Voi* (level ${global.db.data.users[m.sender].level}) sfida *'@' +${conn.getName(contro)}* (level ${global.db.data.users[contro].level}) ed è in battaglia.\n\nAspetta ${VecchiaSfida} Un altro minuto e vediamo chi vince.`)

  conn.fight[m.sender] = true

  await delay(1000 * 60 * VecchiaSfida)

  let perdente = ['Nabbo', 'Cupo', 'non eccezionale', '', 'sconfitto']
  let vincente = ['Grande', 'Pro', 'Master Game', 'Legenda game', 'Molto Pro', 'Spingere forte']

  let opportunità = []
  for (let i = 0; i < global.db.data.users[m.sender].level; i++) opportunità.push(m.sender)
  for (let i = 0; i < global.db.data.users[lawan].level; i++) opportunità.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (let i = 0; i < 10; i++) {
    let unggul = getRandom(0, opportunità.length - 1)
    if (opportunità[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan) {
    let hadiah = (pointPemain - pointLawan) * 10000
    global.db.data.users[m.sender].gold += hadiah
    global.db.data.users[m.sender].limit += 1
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(contro)}*\n\n*Voi* (level ${global.db.data.users[m.sender].level}) perdere contro *${conn.getName(contro)}* (level ${global.db.data.users[contro].level}) grazie a te ${vincente[getRandom(0, vincente.length - 1)]}\n\nRegalo . ${hadiah.toLocaleString()}\n+1 Limit`)
  } else if (pointPemain < pointLawan) {
    let denda = (pointLawan - pointPemain) * 100000
    global.db.data.users[m.sender].money -= denda
    global.db.data.users[m.sender].limit += 1
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(contro)}*\n\n*Voi* (level ${global.db.data.users[m.sender].level}) perdere contro *${conn.getName(contro)}* (level ${global.db.data.users[contro].level}) grazie a te ${perdente[getRandom(0, perdente.length - 1)]}\n\nIl tuo oro è ridotto ${denda.toLocaleString()}\n+1 Limit`)
  } else {
    m.reply(`*${conn.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${conn.getName(contro)}*\n\nIl risultato è un pareggio, sorellina, non ottieni niente`)
  }

  delete conn.fight[m.sender]
}
handler.help = ['fighting']
handler.tags = ['rpg']
handler.command = /^(fight(ing)?)$/i
handler.limit = false
handler.group = true

export default handler

function getRandom(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}
