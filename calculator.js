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



