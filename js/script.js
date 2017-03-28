

var solve = document.getElementsByClassName("solve");
var x = Math.floor((Math.random() * 10) + 1);
var symb = ['*', '-', '+'];
var result;
var symbvol = symb[Math.floor(Math.random() * symb.length)];
var y = Math.floor((Math.random() * 10) + 1);
var error = document.getElementById("error")
var input = document.getElementsByTagName('input');
var code = document.getElementById("code");
var submit = document.getElementById('submit')
solve[0].innerHTML = x + symbvol + y;
if (symbvol == "+") {
    var result = x + y
} else if (symbvol == "-") {
    var result = x - y;
} else if (symbvol == "*") {
    var result = x * y;
}
var i = 15;
var time = document.getElementById("time");
var count = setInterval(function theTime() {
    if (i == 0) {
        document.write("Time is over");
    }
    else {
        time.innerHTML = "You Have Last  " + i + " Sekonds";
    }
    i--;
}, 1000);
submit.addEventListener("click", function (event) {
    if (input[0].value != '' && input[1].value != '' && code.value == result) {
        clearInterval(count);
        document.write("Congratulation!");
    }
    else if (input[0].value == "" || input[1].value == "" || code.value == "") {
        event.preventDefault();
        error.innerText = "* Fill all rows";
    } else if (code.value != result) {
        event.preventDefault();
        error.innerText = "* Secure Code Failed!";
    }
})

