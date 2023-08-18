function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.help = ['creador', 'programador']
handler.tags = ['info']

handler.command = /^(creador|programador)$/i
handler.register = true

export default handler
