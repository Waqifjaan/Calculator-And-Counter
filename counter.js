let count = 0;

function waqif() {
    count++
    document.getElementById('counter').innerHTML = count;
}

function khan() {
    count = 0;
    document.getElementById('counter').innerHTML = count;
}





























function counting(value) {
    document.getElementById('text').value += value;
}

function clearScreen() {
    document.getElementById('text').value = "";
}

function calculate() {
    var p = document.getElementById('text').value;
    var w = eval(p)
    document.getElementById('text').value = w;
}