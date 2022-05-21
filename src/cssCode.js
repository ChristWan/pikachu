const cssCode = `
.skin {
  background: #fee433;
}

.nose {
  border-style: solid;
  border-width: 12px;
  border-radius: 11px;
  left: 50%;
  margin-left: -12px;
  top: 58px;
}

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

.eye.left {
  transform: translateX(-116px);
}

.eye.right {
  transform: translateX(116px);
}

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

.lowerLip::after {
  width: 100px;
  height: 100px;
  bottom: -20px;
  background: #fc4a62;
  left: 50%;
  margin-left: -50px;
  border-radius: 50px;
}

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

.cheek.left {
  transform: translateX(-160px);
}

.cheek.right {
  transform: translateX(160px);
}`

export default cssCode