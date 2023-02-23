
export async function all(m) {
	
    // cuando alguien envía un enlace de un grupo al dm del bot
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('https://chat') || m.text.startsWith('apri questo collegamento')) && !m.isBaileys && !m.isGroup) {
     this.sendButton(m.chat, `Hola @${m.sender.split('@')[0]} 
  vuoi unirti al tuo gruppo?
  utilizzare il seguente comando.
`.trim(), fgig, null, [['Alquilar', '/buyprem']] , m, { mentions: [m.sender] })
    m.react('💎')
  } 
  
   return !0
}
