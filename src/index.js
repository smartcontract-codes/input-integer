var bel = require('bel')
var csjs = require('csjs-inject')
var validator = require('solidity-validator')

module.exports = displayIntegerInput

/* ---------------------

----------------------- */

function displayIntegerInput({theme: {classes: css}, type, cb}) {
  var min = validator.getRange(type).MIN
  var max = validator.getRange(type).MAX
  var title = `Valid values for type ${type} are from ${min} to ${max}`
  var num = bel`<input type="text" class=${css.integerValue} title=${title} min=${min} max=${max} value="0" oninput=${(e)=>sliderUpdate(e, type)} onkeydown=${(e)=>keysUpdating(e, type)}>`
  var slider = bel`<input class=${css.integerSlider} type="range" title=${title} min=${min} max=${max} value="0" step="1" oninput=${(e)=>numUpdate(e, type)}>`
  return bel`
    <div class=${css.integerField}>
      ${slider}
      ${num}
    </div>
  `
  function numUpdate (e, type) {
    num.value = e.target.value
    validate(e, type)
  }

  function validate (e, type) {
    var msg = validator.getMessage(type, e.target.value)
    if (msg) cb(msg)
    else cb(null)
  }

  function keysUpdating (e, type) {
    var key = e.which
    var val = parseInt(e.target.value)
    if (key === 38 && val != slider.max) {
      slider.value = num.value = val + 1
    }
    else if (key === 40 && val != slider.min) {
      slider.value = num.value = val - 1
    }
    validate(e, type)
  }

  function sliderUpdate (e, type) {
    if (e.target.value === '') {
      slider.value = num.value = 0
    } else {
      slider.value = e.target.value
    }
    validate(e, type)
  }
}
