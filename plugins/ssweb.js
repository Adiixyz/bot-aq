let fetch = require('node-fetch')
let handler = async (m, { conn, command, args }) => {
  let full = /f$/i.test(command)
  if (!args[0]) return conn.reply(m.chat, 'Tidak ada url', m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = 'https://caliph-api.herokuapp.com/api/ssweb?' + `delay=1000&url=${url}&full=${full}`
  conn.sendFile(m.chat, ss, 'screenshot.png', url, m)
}
handler.help = ['ss', 'ssf'].map(v => v + ' <url>')
handler.tags = ['internet']
handler.command = /^ss(web)?f?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.limit = 2
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

