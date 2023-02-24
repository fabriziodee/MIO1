let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`${pickRandom(global.iq)}`, m)
}
handler.help = ['iqtest']
handler.tags = ['game']
handler.command = /^(iq)$/i
handler.register = true


handler.fail = null

export default handler 

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

global.iq = [
'il tuo IQ è: 1',
'il tuo IQ è: 14',
'il tuo IQ è: 23',
'il tuo IQ è: 35',
'il tuo IQ è: 41',
'il tuo IQ è: 50',
'il tuo IQ è: 67',
'il tuo IQ è: 72',
'il tuo IQ è: 86',
'il tuo IQ è: 99',
'il tuo IQ è: 150',
'il tuo IQ è: 340',
'il tuo IQ è: 423',
'il tuo IQ è: 500',
'il tuo IQ è: 676',
'il tuo IQ è: 780',
'il tuo IQ è: 812',
'il tuo IQ è: 945',
'il tuo IQ è: 1000',
'il tuo IQ è: Ilimitato!!',
'il tuo IQ è: 5000',
'il tuo IQ è: 7500',
'il tuo IQ è: 10000',
]
