document.addEventListener('DOMContentLoaded', (e) => {
  let pressedKeys = [];
  const secretCode = 'Kilian'
  window.addEventListener('keyup', (e) => {
    pressedKeys.push(e.key)
    pressedKeys.splice(-secretCode.length - 1, pressedKeys.length - secretCode.length)
    if(pressedKeys.join('').includes(secretCode)) {
      cornify_add();
    }
  })
})