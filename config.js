gc1 = ''
gc2 = ''
gc3 = ''
global.linkGC = ['https://chat.whatsapp.com/BDhvAxeGwFjGj10KdQMunR', ''] // ganti jadi group lu
global.owner = ['6283188533207'] // Put your number here //owner eval
global.kontak = ['6283188533207'] //Ketika ada yang ngetik #owner
global.mods = [''] // Want some help?
global.prems = ['0'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com', 
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  hunter: 'https://bx-hunter.herokuapp.com',
  amel: 'https://melcanz.com',
  venz: 'https://venz-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian)
  'https://api.xteam.xyz': 'KurrXd',
  'https://api.lolhuman.xyz': 'rey2k21',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://bx-hunter.herokuapp.com': 'FuckBitch',
  'https://venz-api.herokuapp.com': 'VenzKey',
  'https://melcanz.com': 'jokowi3periode',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

lolkey = 'rey2k21'
amel = 'jokowi3periode'
venz = 'VenzKey'
zekskey = 'apivinz'
xteamkey = 'KurrXd'
//xteam        MIMINETBOT
namaig = 'imbyu_ofc'
namagithub = 'imbyu'
kasihcaption = `© LangitBotz`
namakontak1 = 'Developer ByuBotz'
namakontak2 = ''

//kasihcaption = `Nih Kak`

// Sticker WM
global.packname = 'Sticker By' // ganti aja
global.author = 'ByuBotz' // ganti aja

//yyy
bc = 'LangitBotz' //AlyaaXd Broadcast
footer = '\n© LangitBotz'
namabot = 'LangiBotz'
namalu = 'Langitz'


// 
global.watermark = '© LangitBotz By Langitz'
global.wm = 'By ByuBotz'
wait = '*_Sabar_*'
global.wait = '*_Sabar_*'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!'
global.eror = '_*[❗] Server Error*_'
global.thumbfoto = 'https://telegra.ph/file/ea97b54ada797c9ca5fa8.jpg'
global.thumb= 'https://telegra.ph/file/ea97b54ada797c9ca5fa8.jpg'
global.thanks = 'https://telegra.ph/file/01917f7782b70de8f418d.jpg'
global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text='

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 69 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
