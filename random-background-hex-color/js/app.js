//define button
var button = document.getElementById("btn")
//define body
var body = document.querySelector("body")
//define text displaying hex color
var text = document.getElementById("hex-value")
//define hex array of 0-9 and A-F
var hex_possibilities = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
//define initial hex color array
var color = "000000"
var string = "#"
//add click event listener to button
button.addEventListener("click", changecolor)
//define function to generate background color
function changecolor (){
    //...create loop, looping 6 times, each iteration set color array positions to random value in hex array
    for (var i = 0; i < 6; i++){
        random_num = Math.floor(Math.random()*hex_possibilities.length)
        string += hex_possibilities[random_num]
    }
    console.log(string)
    //...set body color equal to the new color array
    body.style.backgroundColor = string
        //...set text equal to hex code
    text.textContent = string
    string = "#"

}
