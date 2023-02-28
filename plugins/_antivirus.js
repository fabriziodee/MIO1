let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
    // cancellazione automatica quando ci sono messaggi che non possono essere visti sul desktop wa
    if (m.messageStubType === 68) {
        let log = {
            key: m.key,
            content: m.msg,
            sender: m.sender
        }
        await this.modifyChat(m.chat, 'clear', {
            includeStarred: false
        }).catch(console.log)
    }
}

export default handler
