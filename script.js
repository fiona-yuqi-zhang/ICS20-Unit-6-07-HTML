function number() {
 let enter = document.getElementById('numbers').value
 enter = parseInt(enter)
 let total = 0
for (let counter = 0; counter < 3; counter ++) {
total = total + enter
}
alert(total)
}