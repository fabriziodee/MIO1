let handler = async (m, { conn, usedPrefix, args, command }) => {
  conn.war = conn.war ? conn.war : {}
  conn.war2 = conn.war2 ? conn.war2 : {}

  if (!args[0] || args[0] == "help") return m.reply(`*❏  W A R - Z O N E*

[1] War Zone è un gioco di guerra con un sistema di _turn attack_ o attacchi a turni
[2] I giochi possono iniziare con 1v1 fino a 5v5
[3] La capitale di guerra è il bottino di guerra se la tua squadra vince
[4] Ogni giocatore riceverà 5000 HP (Health Point)
[5] Il successo dell'attacco dipende dal tuo livello con il livello del nemico da attaccare
[6] La possibilità di attaccare è di 40 secondi, più di questo è considerato AFK (2500 HP ridotti)
[7] Una squadra vincerà se la squadra avversaria perde tutto (HP <= 0) e ottiene il bottino di guerra

*❏  C O M M A N D S*
*${usedPrefix + command} join A/B* = Unisciti al gioco
*${usedPrefix + command} left* = Esci dal gioco
*${usedPrefix + command} money 10xx* = Scommettere denaro
*${usedPrefix + command} player* = Nome del giocatore
*${usedPrefix + command} start* = Start game`)


  if (args[0] == "money"){
    if (!(m.chat in conn.war)) return m.reply(`*Si prega di creare prima una stanza (Tipo .war join)*`)
    if(m.sender == conn.war[m.chat][0].user){
      if (args[1] != "undefined" && !isNaN(args[1])){
        args[1] = parseInt(args[1])
        if (args[1] < 1000000) return m.reply('*Minimal Rp. 1.000.000*')
        conn.war2[m.chat].money = args[1]
        return m.reply("*Impostare con successo la capitale di guerra di Rp. " + Number(args[1]).toLocaleString() + "*")
      }else {
        return m.reply("*Inserisci il capitale delle scommesse di guerra sotto forma di numeri (non è consentito utilizzare punti) *\n\n.denaro di guerra 100000000")
      }
    }else {
      return conn.reply(m.chat,`*Soltanto @${conn.war[m.chat][0].user.split('@')[0]}come room maker che può sostituire il capitale iniziale della guerra*`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
    }
  }

  // JOIN
  if (args[0] == "join"){
    
    if (global.db.data.users[m.sender].money < 10000) return m.reply("*I tuoi soldi sono almeno Rp. 10.000 per giocare a questo gioco.*")
    // FIRST PLAYER
    if (!(m.chat in conn.war)) {
      conn.war2[m.chat] = {"war" : false, "turn" : 0, "time" : 0, "money" : 0}
      conn.war[m.chat] = []
      let exp = global.db.data.users[m.sender].exp
      conn.war[m.chat][0] = {"user": m.sender, "hp": 5000, "lvl": global.db.data.users[m.sender].level, "turn" : false}
      for (let i=1;i<10;i++){
        conn.war[m.chat][i] = {"user": "", "hp" : 0, "lvl" : 0, "turn" : false}
      }
      return m.reply(`*Entra con successo nel gioco come Squadra A*\n\n*.war join a/b* = partecipa al gioco\n*.war start* = inizia il gioco`)
    }else {   // NOT FIRST PLAYER
      // IF FULL
      if (conn.war2[m.chat].war) {
        return m.reply(`*Il gioco è iniziato, non posso partecipare.*`)
      }
      // IF YOU ALREADY JOIN THE GAME
      for (let i = 0; i < conn.war[m.chat].length ; i++) {
        if (m.sender == conn.war[m.chat][i].user){
          let total = 0
          for (let i = 0 ; i < 10 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              total += 1
            }
          }
          return m.reply(`*Sei entrato nel gioco*\n\n*.war join a/b* = unisciti al gioco\n*.war start* = inizia il gioco`)
        }
      }
      
      // JOIN MILIH TIM
      if (args[1]){
        if (args[1].toLowerCase() == "a"){
          if (conn.war2[m.chat].money == 0) return conn.reply(m.chat,`*Aiuto @${conn.war[m.chat][0].user.split('@')[0]} impostare la capitale di guerra iniziale (minimo Rp. 1.000.000)*\n\n.war money 1000000`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
          return m.reply('a')
          if (global.db.data.users[m.sender].money < conn.war2[m.chat].money) return m.reply(`*I tuoi soldi sono almeno Rp. ${conn.war2[m.chat].money.toLocaleString()} per giocare a questo gioco.*`)
          for (let i = 1 ; i < 5 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              let exp = global.db.data.users[m.sender].exp
              conn.war[m.chat][i] = {"user" : m.sender, "hp" : 5000, "lvl" : global.db.data.users[m.sender].level, "turn" : false}
              let total = 0
              for (let i = 0 ; i < 10 ; i++) {
                if (conn.war[m.chat][i].user == ""){
                  total += 1
                }
              }
              return m.reply(`*Entrato con successo nel gioco come Squadra A*\n\n*.war join a/b* = unisciti al gioco\n*.war start* = inizia il gioco`)
            }
          } 
        }else if (args[1].toLowerCase() == "b"){
          if (conn.war2[m.chat].money == 0) return conn.reply(m.chat,`*Aiuto @${conn.war[m.chat][0].user.split('@')[0]} impostare la capitale iniziale della guerra (minimal Rp. 1000000)*\n\n.war money 1000000`,m, {contextInfo : {mentionedJid : [conn.war[m.chat][0].user]}})
          if (global.db.data.users[m.sender].money < conn.war2[m.chat].money) return m.reply(`*I tuoi soldi sono almeno Rp. ${conn.war2[m.chat].money.toLocaleString()}per giocare a questo gioco.*`)
          for (let i = 5 ; i < 10 ; i++) {
            if (conn.war[m.chat][i].user == ""){
              let exp = global.db.data.users[m.sender].exp
              conn.war[m.chat][i] = {"user" : m.sender, "hp" : 5000, "lvl" : global.db.data.users[m.sender].level, "turn" : false}
              let total = 0
              for (let i = 0 ; i < 10 ; i++) {
                if (conn.war[m.chat][i].user == ""){
                  total += 1
                }
              }
              return m.reply(`*Entrato con successo nel gioco come Squadra B*\n\n*.war join a/b* = join game\n*.war start* = iniziare i giochi`)
            }
          }
        }else {
          return m.reply(`*Scegli la squadra A o B*\n\n.war unisciti ad A\n.war unisciti a B`)
        }
      }else {
        // JOIN SESUAI URUTAN
        return m.reply(`*Scegli una squadra A o B*\n\n.war unisciti ad A\n.war unisciti a B`)
      }
      

      // CHECK IF ROOM FULL
      for (let i = 0 ; i < conn.war[m.chat].length ; i++) {
        let total = 0
        if (conn.war[m.chat][i].user != ""){
          total += 1
        }
        if (total == 10) conn.war2[m.chat].war = true
      }
    }
  }

  // LEFT GAME
  if (args[0] == "left"){
    // IF GAME START
    if (conn.war2[m.chat].war) {
      m.reply(`*La guerra è iniziata, non puoi uscire*`)
    }else {   // IF NOT
      for (let i = 0 ; i < 10 ; i++) {
        if (m.sender == conn.war[m.chat][i].user){
          return m.reply(`*Esci dal gioco con successo*`)
        }
      }
      return m.reply(`*Non sei nel gioco*`)
    }
  }

  // CEK PLAYER
  if (args[0] == "player"){ 
    if (!(m.chat in conn.war)) return m.reply(`*Non ci sono giocatori che si uniscono alla stanza War Zone*`)
    var teamA = []
    var teamB = []
    var teamAB = []
    for (let i = 0 ; i < conn.war[m.chat].length ; i++){
      if (i < 5){
        if (conn.war[m.chat][i].user != "") teamA.push(conn.war[m.chat][i].user)
      }else {
        if (conn.war[m.chat][i].user != "") teamB.push(conn.war[m.chat][i].user)
      }
      teamAB.push(conn.war[m.chat][i].user)
    }
    // return m.reply(teamA[0])
    conn.reply(m.chat, `${conn.war2[m.chat].war ? '*Giliran : ' + '@' + conn.war[m.chat][conn.war2[m.chat].turn].user.split('@')[0] + '*\n*Taruhan : Rp. ' + Number(conn.war2[m.chat].money).toLocaleString() + '*\n\n' : '*Taruhan : Rp. ' + Number(conn.war2[m.chat].money).toLocaleString() + '*\n\n' }*TEAM A :*\n` + teamA.map((v, i )=> `${conn.war[m.chat][i].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (Lv.${conn.war[m.chat][i].lvl} HP: ${conn.war[m.chat][i].hp})`).join`\n` + "\n\n*TEAM B :*\n" + teamB.map((v, i) => `${conn.war[m.chat][i+5].hp > 0 ? '❤️ ' : '☠️ ' }@${v.split('@')[0]} (Lv.${conn.war[m.chat][i+5].lvl} HP: ${conn.war[m.chat][i+5].hp})`).join`\n`,m, {contextInfo: {
      mentionedJid: teamAB
    }})
  }

  // START GAME
  if (args[0] == "start"){
    if (conn.war2[m.chat].war) return m.reply(`*Perang sudah dimulai, tidak bisa join.*`)
    teamA = 0
    teamB = 0
    for (let i=0;i<10;i++){
      if(i<5){
        if (conn.war[m.chat][i].user != "") teamA += 1
      }else{
        if (conn.war[m.chat][i].user != "") teamB += 1
      }
    }

    if (teamA == teamB && teamA > 0){
      conn.war2[m.chat].war = true
      for (let i=0;i<5;i++){
        if (conn.war[m.chat][i].user != ""){
          let user = conn.war[m.chat][i].user
          return conn.reply(m.chat,`*Il gioco è iniziato correttamente*\n*Per favore @${user.split('@')[0]} per attaccare il nemico*\n\n.war player = statistiche giocatore\n.attack @tag = attacca l'avversario`, m, {contextInfo: { mentionedJid: [user] }})
        }
      }
    }else {
      if (teamA > teamB){
        m.reply(`*Il team B ha bisogno di ${teamA-teamB} più persone per rendere il gioco equo.*`)
      }else {
        m.reply(`*Il team A ha bisogno di ${teamB-teamA} più persone per rendere il gioco equo.*`)
      }
    }
  }

}
handler.help = ['war']
handler.tags = ['game']
handler.command = /^(war)$/i
handler.group = true
export default handler
