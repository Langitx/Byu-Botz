let handler  = async (m, { conn, command, args, text, usedPrefix }) => {
	let count = args[1] && args[1].length > 0 ? Math.min(9999999999999999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        if (!text) throw `Perintah Salah\nContoh :\n${usedPrefix + command} @tag_member spasi jumlah\n\nContoh :\n${usedPrefix + command} @tag_member 1000`
        let name = `@${who.split`@`[0]}`
        let users = global.db.data.users
	users[who].exp += count * 1
                        conn.reply(m.chat, `Berhasil mentopup ${name} Exp sebesar ${count}`.trim(), m)
                        }
                        
handler.help = ['topup2 <Args>']
handler.tags = ['rpg']
handler.command = /^tpxp|tpl|topupexp$/i
handler.owner = true

module.exports = handler
