const csjs = require('csjs-inject')
const inputinteger = require('../')

var colors = {
  bodyFont: `'Nunito', sans-serif`,
  transparent: 'transparent',
  inputFieldFontSize: '1.4rem',
  inputFieldColor: '#ffffff',
  inputFieldPlaceholderColor: '#8d8d8d',
  inputFieldBackgroundColor: '#2c323c',
  inputFieldBorder: 'none',
  inputFieldBorderRadius: '2px',
  integerSliderBackgroundColor: '#DCD7D6',
  integerSliderFocusBackgroundColor: '#ebebeb',
  integerThumbBackgroundColor: '#00A2F9',
  integerValueFontSize: '1.4rem',
  integerValueTextAlign: 'center',
  integerValueColor: '#ffffff',
  integerValuePlaceholderColor: '#8d8d8d',
  integerValueBackgroundColor: '#2c323c',
  integerValueBorder: 'none',
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
}
.inputField {
  font-family: 'Nunito', sans-serif;
  font-size: ${colors.inputFieldFontSize};
  color: ${colors.inputFieldColor};
  background-color: ${colors.inputFieldBackgroundColor};
  text-align: ${colors.inputFieldTextAlign};
  padding: 6px 28px 6px 12px;
  border-radius: ${colors.inputFieldBorderRadius};
  border: ${colors.inputFieldBorder};
  width: calc(100% - 40px);
}
.inputField::placeholder {
  color: ${colors.inputFieldPlaceholderColor};
}
.integerValue {
  width: calc(100% - 42px);
  font-family: 'Nunito', sans-serif;
  font-size: ${colors.integerValueFontSize};
  color: ${colors.integerValueColor};
  background-color: ${colors.integerValueBackgroundColor};
  border-radius: ${colors.integerValueBorderRadius};
  border: ${colors.integerValueBorder};
  text-align: ${colors.integerValueTextAlign};
  padding: 6px 30px 6px 12px;
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
</style>`

const classes = {
  inputField: 'inputField',
  integerValue: 'integerValue',
  integerSlider: 'integerSlider',
  integerField: 'integerField'
}
const log = document.createElement('pre')
const el = inputinteger({ theme: { classes }, type: 'uint8', cb: (err, val) => {
  if (err) log.appendChild(document.createTextNode(`${err}\n`))
  else log.appendChild(document.createTextNode(`ok: ${val}\n`))
} })
document.body.appendChild(el)
document.body.appendChild(log)
