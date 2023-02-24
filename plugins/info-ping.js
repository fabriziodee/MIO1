import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'

let handler = async (m, { conn }) => {
         let _uptime = process.uptime() * 1000
         let tio = clockString(_uptime)
         let time = require('moment-timezone').tz('Central European Standard Time').format('HH:mm:ss')
         let timestamp = speed();
         let latensi = speed() - timestamp;
         exec(`neofetch --stdout`, (error, stdout, stderr) => {
          let child = stdout.toString("utf-8");
          let ssd = child.replace(/Memory:/, "Ram:")
          m.reply(`
          *───「 RUNTIME BOT 」───*
          Runtime : ${tio},
          Waktu : ${time}
          🚀 *MA FABRI HA LA FIBRA* : ${latensi.toFixed(4)}*_ms_*`);
          );
         }
handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed', 'p']
handler.register = true

export default handler

function clockString(ms) {
    let days = Math.floor(ms / (24 * 60 * 60 * 1000));
    let daysms = ms % (24 * 60 * 60 * 1000);
    let hours = Math.floor((daysms) / (60 * 60 * 1000));
    let hoursms = ms % (60 * 60 * 1000);
    let minutes = Math.floor((hoursms) / (60 * 1000));
    let minutesms = ms % (60 * 1000);
    let sec = Math.floor((minutesms) / (1000));
    return days + " Day " + hours + " Hour " + minutes + " Minute " + sec + " Second ";
