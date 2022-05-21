import cssCode from './cssCode'

const player = {
  n: 0,
  id: undefined,
  time: 60,
  ui: {
    code: document.querySelector('.code'),
    cssCode: document.querySelector('#cssCode')
  },
  events: {
    '#btnPause': 'pause',
    '#btnStart': 'start',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast',
    '#btnRestart': 'restart'
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
  pause() {
    window.clearInterval(player.id)
  },
  start() {
    player.pause()
    player.play()
  },
  slow() {
    player.pause()
    player.time = 200
    player.play()
  },
  normal() {
    player.pause()
    player.time = 60
    player.play()
  },
  fast() {
    player.pause()
    player.time = 10
    player.play()
  },
  restart() {
    player.pause()
    player.n = 0
    player.time = 60
    player.play()
  }
}

player.init()









