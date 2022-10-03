let canvas = document.getElementById("canvas")
let button = document.getElementById("button")

const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return canvas.style.backgroundColor = '#' + n.slice(0, 6);
  };

button.addEventListener("click", randomHexColorCode)

