//document.getElementById("count").innerText = 0
let saveEl = document.getElementById("save-el")
let countSl = document.getElementById("counts")
console.log(countSl)

let count = 0

function increament () {
    count += 1
    countSl.textContent = count
}

function save() {
    let pre = count + " - "
    saveEl.textContent += pre
    countSl.textContent = 0 
    count = 0
}

