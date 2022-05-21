const cssCode = `
/* 画一个皮卡丘，首先给它配个肤色 */
.skin {
  background: #fee433;
}
/* 接下来构建鼻子 */
.nose {
  border-style: solid;
  border-width: 12px;
  border-radius: 11px;
  left: 50%;
  margin-left: -12px;
  top: 58px;
}
/* 它的眼眶 */
.eye {
  border: 2px solid black;
  width: 49px;
  height: 49px;
  left: 50%;
  margin-left: -25px;
  top: 25px;
  border-radius: 50%;
  background: #2e2e2e;
}
/* 左眼归位 */
.eye.left {
  transform: translateX(-116px);
}
/* 右眼归位 */
.eye.right {
  transform: translateX(116px);
}
/* 画丘点睛 */
.eye::before {
  content: '';
  display: block;
  border: 2px solid black;
  background: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  margin-left: 4px;
}
/* 可爱的上嘴唇 */
.mouth::after {
  border: 2px solid black;
  background: #fee433;
  border-bottom-left-radius: 40px 25px;
  border-top: none;
  border-right: none;
  transform: rotate(-20deg);
}

.mouth::before {
  border: 2px solid black;
  background: #fee433;
  border-bottom-right-radius: 40px 25px;
  border-top: none;
  border-left: none;
  transform: rotate(20deg);
}
/* 可爱的下嘴唇 */
.lowerLip {
  border: 2px solid black;
  width: 300px;
  height: 3500px;
  left: 50%;
  margin-left: -150px;
  border-radius: 200px / 2000px;
  bottom: 0;
  background: #990513;
}
/* 可爱的舌头 */
.lowerLip::after {
  width: 100px;
  height: 100px;
  bottom: -20px;
  background: #fc4a62;
  left: 50%;
  margin-left: -50px;
  border-radius: 50px;
}
/* 羞羞的脸颊 */
.cheek {
  border: 2px solid black;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  left: 50%;
  margin-left: -34px;
  top: 108px;
  background: #fc0d1c;
}
/* 咻~ 左脸颊 */
.cheek.left {
  transform: translateX(-160px);
}
/* 咻~ 右脸颊 */
.cheek.right {
  transform: translateX(160px);
}
/* 这只皮卡丘送给你~！ */`



export default cssCode