// Creating variables
let abase = 0
let bbase = 0
let h = 0
let area = 0
// Image of the Formula of a trapezoid
document.getElementById('formulaoftrapezoid').src = 'images/formulaoftrapezoid.png'
// Image of a Trapezoid with labelled variables
document.getElementById('areaoftrapezoid').src = 'images/areaoftrapezoid.png'
document.getElementById('areaoftrapezoid').style.position = 'aboslute'
document.getElementById('areaoftrapezoid').style.float = 'right'
// Calculates area of a trapezoid
document.getElementById('mybutton').addEventListener('click', calculate)
function calculate () {
  abase = document.getElementById('abase').value
  abase = parseInt(abase)
  bbase = document.getElementById('bbase').value
  bbase = parseInt(bbase)
  h = document.getElementById('h').value
  h = parseInt(h)
  area = ((abase + bbase) / 2) * h
  alert(area)
}
