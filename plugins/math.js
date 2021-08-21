let handler = async (m, { conn, args, usedPrefix }) => {
  conn.math = conn.math ? conn.math : {}
  if (args.length < 1) throw `
*Modos:* ${Object.keys(modes).join(' | ')}

*Exemplo de uso:* ${usedPrefix}mat medio
`.trim()
  let mode = args[0].toLowerCase()
  if (!(mode in modes)) throw `
Modo: ${Object.keys(modes).join(' | ')}

*Exemplo de uso:* ${usedPrefix}mat medio
`.trim()
  let id = m.chat
  if (id in conn.math) return conn.reply(m.chat, 'Ainda há perguntas sem resposta neste chat', conn.math[id][0])
  let math = genMath(mode)
  conn.math[id] = [
    await conn.reply(m.chat, `Qual é o resultado de *${math.str}*?\n\nTempo: ${(math.time / 1000).toFixed(2)} segundos\nBônus de acerto: ${math.bonus} XP`, m),
    math, 4,
    setTimeout(() => {
      if (conn.math[id]) conn.reply(m.chat, `O tempo acabou!\nA resposta é ${math.result}`, conn.math[id][0])
      delete conn.math[id]
    }, math.time)
  ]
}
handler.help = ['mat (dificuldade)']
handler.tags = ['game']
handler.command = /^mat/i

handler.group = true

module.exports = handler

let modes = {
  noob: [-3, 3,-3, 3, '+-', 15000, 10],
  facil: [-10, 10, -10, 10, '*/+-', 20000, 40],
  medio: [-40, 40, -20, 20, '*/+-', 40000, 150],
  dificil: [-100, 100, -70, 70, '*/+-', 60000, 250],
  extremo: [-999999, 999999, -999999, 999999, '*/', 40000, 400],
  impossivel: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 15000, 500],
  impossivel2: [-999999999999999, 999999999999999, -999, 999, '/', 10000, 600]
} 

let operators = {
  '+': '+',
  '-': '-',
  '*': '×',
  '/': '÷'
}

function genMath(mode) {
  let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
  let a = randomInt(a1, a2)
  let b = randomInt(b1, b2)
  let op = pickRandom([...ops])
  let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
  if (op == '/') [a, result] = [result, a]
  return {
    str: `${a} ${operators[op]} ${b}`,
    mode,
    time,
    bonus,
    result
  }
}

function randomInt(from, to) {
  if (from > to) [from, to] = [to, from]
  from = Math.floor(from)
  to = Math.floor(to)
  return Math.floor((to - from) * Math.random() + from)
}

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
