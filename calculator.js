// user calculator entries
var entryOne = []
var entryTwo = []
var operator = []

var digits = document.querySelectorAll("button")
  for(var i = 0; i < digits.length; i++){
  var li = digits[i]
  li.addEventListener("click", addDigit)
}

function addDigit(event) {
    var output = document.querySelector("#display")
    output.innerText += event.target.innerText
    }

    
    // baic operators + - * /
    function operation (){
        entryOne.push(display.innerText)
        operator.push(event.target.innerText)
        display.innerText = ""
        var operator2 = document.querySelector("#display")
        operator2.innerText + event.target.innerText
        }
    
        // solve the problem
      function equal (operate) {
        secondEntry.push(display.innerText)
        var equal2 = document.querySelector("#display")
        equal2.innerText += event.target.innerText
        operate = operator[0]
        if  (operate === '+') {
        var z= parseFloat(entryOne) + parseFloat(entryTwo)
        } else if (operate === '-') {
        var z = parseFloat(entryOne) - parseFloat(entryTwo)
        } else if (operate === '*') {
        var z = parseFloat(entryOne) * parseFloat(entryTwo)
        } else if (operate === '/') {
        var z = parseFloat(entryOne) / parseFloat(entryTwo)
        } display.innerText =  z
        }
    
        // clear the display 
      function clearDisplay () {
        display.innerText = ""
        display2.innerText = ""
        entryOne.splice(0)
        entryTwo.splice(0)
        operator.splice(0)
        }