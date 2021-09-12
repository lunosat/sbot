let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
    if (m.messageStubType === 68) {
        let log = {
            key: m.key,
            content: m.msg,
            sender: m.sender
        }
        await this.modifyChat(m.chat, 'clear', {
            includeStarred: false
        }).catch(console.log)
        if(isBotAdmin){
            m.reply('Banimento de prevenção.')
            this.groupRemove(m.chat, [m.sender])
        }
    }
}

module.exports = handler