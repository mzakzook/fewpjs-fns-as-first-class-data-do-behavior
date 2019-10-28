/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let parts = time.split(':')
  let n = parseInt(parts[0], 10)
  if (n < 12) {
    return "Good Morning"
  } else if (n >= 12 && n <= 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  let content = document.getElementById("greeting")
  content.innerText = string
}