console.log("Weather loading...")


var cookieBar = document.getElementById("agreement")
function hide(){
    cookieBar.remove();
}

/* F = ( °C × 9 5 ) + 32 */
/*
var celciusHigh = document.querySelector(".hightemp")
var celciusLow = document.querySelector(".lowtemp")

var fahrenheitHigh = (celciusHigh * 1.8) + 32;
console.log(fahrenheitHigh)
/* console.log(celciusHighDegrees)
console.log(celciusLowDegrees)

function convert(element){
    celciusHigh.innerText = "Did I work?"
    celciusLow.innerText = "Did I work?"
}
*/

function c2f(temp){
    return Math.round(9 / 5 * temp + 32);
}

function f2c(temp){
    return Math.round(5 / 9 * (temp - 32))
}

function convert(element){
    console.log(element.value)  
    // Should see the values here, 'celcius' or 'fahrenheit' from the HTML
    for (i=1; i<9; i++){
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "&deg;C") {
            tempSpan.innerText = f2c(tempVal) 
        } else {
            tempSpan.innerText = c2f(tempVal) + "°F";;
        }
    }
}