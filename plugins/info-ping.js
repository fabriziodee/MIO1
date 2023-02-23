
import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:");
          m.reply(`${ssd}🚀 *sono veloce?* : ${latensi.toFixed(4)} _ms_`);
         let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
   m.reply(`*⌛HEY FRA SONO ATTIVO DA..  \n\n${muptime}`) 

handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed']
handler.register = true

export default handler
