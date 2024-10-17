var temp = "";
output = document.querySelector("#output");
problem = document.querySelector("#problem");

//Botton sound 
function soundplay() {
    var audio = new Audio("./audio/button click.mp3");
    audio.play();
}

//clear function
function c() {
    soundplay()
    output.innerHTML = "0";
    problem.innerHTML = "";
}

//setting assigning values
function demo(value) {
    soundplay()
    temp += value;
    problem.innerHTML = temp;
    output.innerHTML = "";
}


//solving problem and displaying result
function main() {
    soundplay()
    var result = eval(temp);
    problem.innerHTML = temp;
    output.innerHTML =  result;
    temp = result
}


function back() {
    
}
