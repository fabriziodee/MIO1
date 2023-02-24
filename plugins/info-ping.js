import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let pp = './media/menus/Menu1.jpg'
let vn = './media/infobot.mp3'
let name = await conn.getName(m.sender)
let old = performance.now()
  //await m.reply('_Realizando test_')
  let neww = performance.now()
  let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  let speed = neww - old

let info = `*✨ Hola ${name}*`
conn.sendButton(m.chat, info, `┌───⊷ ${lb}
┆
┆[🤴🏻] 𝘾𝙧𝙚𝙖𝙙𝙤𝙧: 𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆[#️⃣] *𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙤:*  *wa.me/5492266466080*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆[🎳] *Prefisso:* *${usedPrefix}*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆[🚀] *Attivo da:* *${uptime}*
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆[🐢] *Ping:* *${speed}*   
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆[☑️] *AutoVisualizza:*  ${autoread ? '*Activado ✔*' : '*Desactivado ✘*'}   
┆┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┆[🤖] 𝘽𝙤𝙩𝙨 𝙨𝙚𝙘𝙪𝙣𝙙𝙖𝙧𝙞𝙤𝙨 𝙖𝙘𝙩𝙞𝙫𝙤𝙨: *${totaljadibot.length}*
╰──────────────────`, [
['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨  ✅', '.cuentasgb']], m)
//conn.reply(m.chat, info, m)
conn.sendFile(m.chat, vn, 'infobot.mp3', null, m, true, { type: 'audioMessage', ptt: true, sendEphemeral: true })
}
handler.help = ['ping']
handler.tags = ['main']
handler.command = ['ping', 'speed', 'p']
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
