var button = document.querySelector("button")
var body = document.body
var colors = ['purple', 'red', 'blue', 'green']
button.addEventListener('click', changebackground)
var index = 0

function changebackground (){
	body.style.backgroundColor = colors[index]
	index += 1 //increment the color index

	// reset color index if it reaches the end
	if (index === colors.length){
		index = 0
	}
}