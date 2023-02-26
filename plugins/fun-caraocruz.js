let handler = async (m, { conn, command, text, usedPrefix }) => {
let pp = './Menu2.jpg'
let hasil = Math.floor(Math.random() * 50)
let moneda = `*Moneta lanciata*
Risultato: ${['testa', 'croce'].getRandom()} `.trim()

handler.tags = ['fun']
handler.command = /^lancia|toc$/i
//handler.exp = 0
export default handler
