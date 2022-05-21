import cssCode from './cssCode'

const player = {
  n: 0,
  id: undefined,
  time: 100,
  ui: {
    code: document.querySelector('.code'),
    cssCode: document.querySelector('#cssCode')
  },
  events: {
    '#btnPause': 'pause',
    '#btnStart': 'start',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents() {
    for (let key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  init() {
    player.play()
    player.bindEvents()
  },
  play() {
  player.id = setInterval(() => {
    player.n += 1
    if (player.n > cssCode.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.code.innerText = cssCode.substring(0, player.n)
    player.ui.cssCode.innerHTML = cssCode.substring(0, player.n)
    player.ui.code.scrollTop = player.ui.code.scrollHeight
  }, player.time)
  },
  clear() {
    window.clearInterval(player.id)
  },
  pause() {
    player.clear()
  },
  start() {
    player.clear()
    player.play()
  },
  slow() {
    player.clear()
    player.time = 300
    player.play()
  },
  normal() {
    player.clear()
    player.time = 100
    player.play()
  },
  fast() {
    player.clear()
    player.time = 10
    player.play()
  }
}

player.init()










