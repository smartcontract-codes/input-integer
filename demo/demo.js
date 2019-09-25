const csjs = require('csjs-inject')
const inputinteger = require('../')

var colors = {
  bodyFont: `'Nunito', sans-serif`,
  transparent: 'transparent',
  integerSliderBackgroundColor: '#DCD7D6',
  integerSliderFocusBackgroundColor: '#ebebeb',
  integerThumbBackgroundColor: '#00A2F9',
  integerValueFontSize: '1.4rem',
  integerValueTextAlign: 'center',
  integerValueColor: '#ffffff',
  integerValuePlaceholderColor: '#8d8d8d',
  integerValueBackgroundColor: '#2c323c',
  integerValueBorderColor: '#2c323c',
  integerValueBorderRadius: '2px',
  integerValueTextAlign: 'center',
}

document.body.innerHTML = `<style>
@import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
html {
  font-size: 62.5%;
}
body {
  font-size: 1.6rem;
  background-color: #000;
  color: #d9d9d9;
}
.integerValue {
  width: calc(100% - 24px);
  font-family: 'Nunito', sans-serif;
  font-size: ${colors.integerValueFontSize};
  color: ${colors.integerValueColor};
  background-color: ${colors.integerValueBackgroundColor};
  border-radius: ${colors.integerValueBorderRadius};
  border: 1px solid ${colors.integerValueBorderColor};
  text-align: ${colors.integerValueTextAlign};
  padding: 6px 12px;
  outline: none;
  transition: border .6s ease-in-out;
}
.integerValue::placeholder {
  color: ${colors.integerValuePlaceholderColor};
}
.integerSlider {
  -webkit-appearance: none;
  background-color: ${colors.transparent};
  width: 100%;
  max-width: 100%;  
  border-radius: 3px;
  grid-row: 2;
}
/* track */
.integerSlider::-webkit-slider-runnable-track {
  width: 100%;
  height: 6px;
  background-color: ${colors.integerSliderBackgroundColor};
  border-radius: 3px;
  grid-row: 2;
}
.integerSlider:active::-webkit-slider-runnable-track {
  background-color: ${colors.integerSliderFocusBackgroundColor};
}
.integerSlider::-moz-range-track {
  width: 100%;
  height: 6px;
  background-color: ${colors.integerSliderBackgroundColor};
  border-radius: 3px;
  cursor: pointer;
}
input[type="range"]::-ms-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  background:  ${colors.transparent};
  border-color:  ${colors.transparent};
  color:  ${colors.transparent};
}
input[type="range"]::-ms-fill-lower {
  background: ${colors.integerSliderBackgroundColor};
}

input[type="range"]:focus::-ms-fill-lower {
  background: ${colors.integerSliderFocusBackgroundColor};
}

input[type="range"]::-ms-fill-upper {
  background: ${colors.integerSliderBackgroundColor};
}

input[type="range"]:focus::-ms-fill-upper {
  background: #ddd;
}
/* thumb */
.integerSlider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 16px;
  height: 16px;
  background-color: ${colors.integerThumbBackgroundColor};
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  margin-top: -6px;
  cursor: pointer;
}
.integerSlider::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background-color: ${colors.integerThumbBackgroundColor};
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  cursor: pointer;
}
.integerSlider::-ms-range-thumb {
  width: 16px;
  height: 16px;
  background-color: ${colors.integerThumbBackgroundColor};
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, .3);
  margin-top: -2px;
  cursor: pointer;
}
.integerSlider:focus {
  outline: none;
}
.integerSlider::-ms-track {
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  background:  ${colors.transparent};
  border-color:  ${colors.transparent};
  color:  ${colors.transparent};
}
.integerField {
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 40px;
  grid-column-gap: 5px;
  align-items: center;
  max-width: 300px;
}
.focus, .focus.invalidated {
  border: 1px solid #00A4DC;
}
.invalidated {
  border: 1px solid #FF2975;
}
</style>`

const classes = {
  integerValue: 'integerValue',
  integerSlider: 'integerSlider',
  integerField: 'integerField',
  focus: 'focus', 
  invalidated: 'invalidated'
}
const log = document.createElement('pre')
const el = inputinteger({ theme: { classes }, type: 'uint8', cb: (err, e, val) => {
  if (err)  { 
    log.appendChild(document.createTextNode(`${err}\n`))
    e.classList.add(classes.invalidated)
  } else { 
    log.appendChild(document.createTextNode(`ok: ${val}\n`))
    e.classList.remove(classes.invalidated)
  }
}, focus, blur })
function focus(e) {
  if (e.target.classList.contains(classes.integerValue)) {
    e.target.classList.add(classes.focus)
  } else {
    e.target.parentNode.children[1].classList.add(classes.focus)
    e.target.parentNode.children[1].classList.remove(classes.invalidated)
  }
}
function blur(e) {
  if (e.target.classList.contains(classes.integerValue)) {
    e.target.classList.remove(classes.focus)
  } else {
    e.target.parentNode.children[1].classList.remove(classes.focus)
    e.target.parentNode.children[1].classList.remove(classes.invalidated)
  }
}
document.body.appendChild(el)
document.body.appendChild(log)
