import axios from 'axios'
import cheerio from 'cheerio'


let handler = async (m, { text }) => {
	if (!text) throw `✳️ Cosa vuoi cercare discepolo?` 
	
    try {
	const link =  await axios.get(`https://it.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	m.reply(`▢ *La mente di SuperFabri*

‣ Trovato contenuto per : ${wik}

${resulw}`)
} catch (e) {
  m.reply('⚠️ Questo è troppo per SUPERFABRI ')
}
}
handler.help = ['wikipedia']
handler.tags = ['tools']
handler.command = ['wiki','wikipedia'] 
handler.register = true

export default handler
