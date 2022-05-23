import cssCode from './cssCode'
import $ from 'jquery'

const player = {
  n: 0,
  id: undefined,
  time: 60,
  ui: {
    $code: $('.code'),
    $cssCode: $('#cssCode')
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
        $(key).on('click', player[player.events[key]])
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
      clearInterval(player.id)
      return
    }
    player.ui.$code.text(cssCode.substring(0, player.n))
    player.ui.$cssCode.html(cssCode.substring(0, player.n))
    player.ui.$code.scrollTop(player.ui.$code[0].scrollHeight)
  }, player.time)
  },
  pause() {
    clearInterval(player.id)
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









