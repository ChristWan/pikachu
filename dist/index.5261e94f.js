var n="\n.skin {\n  background: #fee433;\n}\n\n.nose {\n  border-style: solid;\n  border-width: 12px;\n  border-radius: 11px;\n  left: 50%;\n  margin-left: -12px;\n  top: 58px;\n}\n\n.eye {\n  border: 2px solid black;\n  width: 49px;\n  height: 49px;\n  left: 50%;\n  margin-left: -25px;\n  top: 25px;\n  border-radius: 50%;\n  background: #2e2e2e;\n}\n\n.eye.left {\n  transform: translateX(-116px);\n}\n\n.eye.right {\n  transform: translateX(116px);\n}\n\n.eye::before {\n  content: '';\n  display: block;\n  border: 2px solid black;\n  background: white;\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  margin-left: 4px;\n}\n\n.mouth::after {\n  border: 2px solid black;\n  background: #fee433;\n  border-bottom-left-radius: 40px 25px;\n  border-top: none;\n  border-right: none;\n  transform: rotate(-20deg);\n}\n\n.mouth::before {\n  border: 2px solid black;\n  background: #fee433;\n  border-bottom-right-radius: 40px 25px;\n  border-top: none;\n  border-left: none;\n  transform: rotate(20deg);\n}\n\n.lowerLip {\n  border: 2px solid black;\n  width: 300px;\n  height: 3500px;\n  left: 50%;\n  margin-left: -150px;\n  border-radius: 200px / 2000px;\n  bottom: 0;\n  background: #990513;\n}\n\n.lowerLip::after {\n  width: 100px;\n  height: 100px;\n  bottom: -20px;\n  background: #fc4a62;\n  left: 50%;\n  margin-left: -50px;\n  border-radius: 50px;\n}\n\n.cheek {\n  border: 2px solid black;\n  width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  left: 50%;\n  margin-left: -34px;\n  top: 108px;\n  background: #fc0d1c;\n}\n\n.cheek.left {\n  transform: translateX(-160px);\n}\n\n.cheek.right {\n  transform: translateX(160px);\n}";const e={n:0,id:void 0,time:100,ui:{code:document.querySelector(".code"),cssCode:document.querySelector("#cssCode")},events:{"#btnPause":"pause","#btnStart":"start","#btnSlow":"slow","#btnNormal":"normal","#btnFast":"fast"},bindEvents(){for(let n in e.events)if(e.events.hasOwnProperty(n)){const r=e.events[n];document.querySelector(n).onclick=e[r]}},init(){e.play(),e.bindEvents()},play(){e.id=setInterval((()=>{e.n+=1,e.n>n.length?window.clearInterval(e.id):(e.ui.code.innerText=n.substring(0,e.n),e.ui.cssCode.innerHTML=n.substring(0,e.n),e.ui.code.scrollTop=e.ui.code.scrollHeight)}),e.time)},clear(){window.clearInterval(e.id)},pause(){e.clear()},start(){e.clear(),e.play()},slow(){e.clear(),e.time=300,e.play()},normal(){e.clear(),e.time=100,e.play()},fast(){e.clear(),e.time=10,e.play()}};e.init();
//# sourceMappingURL=index.5261e94f.js.map
