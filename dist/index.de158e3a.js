let n = 0;
let cssCode = `.code {
  color: red;
}`;
let id = setInterval(()=>{
    n += 1;
    if (n <= cssCode.length) {
        document.querySelector('.code').innerText = cssCode.substring(0, n);
        document.querySelector('#cssCode').innerHTML = cssCode.substring(0, n);
    }
}, 100);

//# sourceMappingURL=index.de158e3a.js.map
