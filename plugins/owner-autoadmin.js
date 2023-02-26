let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'Nggk'
  if (isAdmin) throw '*ORA SEI AMMINISTRATORE😀*'
  await conn.groupParticipantsUpdate(m.chat, [m.sender], "promuovere")
}
handler.command = /^admin.|atad|autoadmin$/i
handler.owner = true
handler.botAdmin = true
export default handler
