var qoute_array = [
  qoute1 = {
    name: "asdf",
    qoute: "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all"
  },
  qoute2 = {
    name: "qwer",
    qoute: "God save me from my friends. I can protect myself from my enemies."
  },
  qoute3 = {
    name: "life",
    qoute: "Life is too short and sweet to be spent by cribbing and complaining about things. Here are some random quotes about the most wonderful gift that we've got"
  },
]
var qoute_span = document.querySelector("#quote")
var author_span = document.querySelector(".quote-author")
var button = document.querySelector("button")

button.addEventListener('click', changeqoute)

function changeqoute () {
  random_num = Math.floor(Math.random()*qoute_array.length)
  random_qoute_obj = qoute_array[random_num]

  qoute_span.textContent = random_qoute_obj.qoute
  author_span.textContent = random_qoute_obj.name
}