let handler = async function (m, { text}){
    const rows = [
        {title: 'Row 1', description: "Hello it's description 1", rowId:"rowid1"},
        {title: 'Row 2', description: "Hello it's description 2", rowId:"rowid2"}
       ]
       
       const sections = [{title: "Section 1", rows: rows}]
       
       const button = {
        buttonText: 'Click Me!',
        description: "Hello it's list message",
        sections: sections,
        listType: 1
       }
       
       const sendMsg = await conn.sendMessage(id, button, MessageType.listMessage)
}
//handler.help = ['einfo']
//handler.tags = ['main']

handler.command = /^(btn|btn(istrar)?)$/i
handler.limit = true
handler.group = false
handler.register = true

module.exports = handler