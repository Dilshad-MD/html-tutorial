var add = document.getElementById('add');
var subtract = document.getElementById('subtract');
var multiply = document.getElementById('multiply');
var divide = document.getElementById('divide');
var Percentage = document.getElementById('Percentage');
var root = document.getElementById('root');



add.addEventListener('click', () => {
    var val1 = document.getElementById('firstnumber').value;
    var val2 = document.getElementById('secondnumber').value;
    var result = document.getElementById('result');
    result.innerText = parseInt(val1) + parseInt(val2);
})
subtract.addEventListener('click', () => {
    var val1 = document.getElementById('firstnumber').value;
    var val2 = document.getElementById('secondnumber').value;
    var result = document.getElementById('result');
    result.innerText = parseInt(val1) - parseInt(val2);
})
multiply.addEventListener('click', () => {
    var val1 = document.getElementById('firstnumber').value;
    var val2 = document.getElementById('secondnumber').value;
    var result = document.getElementById('result');
    result.innerText = parseInt(val1) * parseInt(val2);
})

divide.addEventListener('click', () => {
    var val1 = document.getElementById('firstnumber').value;
    var val2 = document.getElementById('secondnumber').value;
    var result = document.getElementById('result');
    result.innerText = parseInt(val1) / parseInt(val2);
})


Percentage.addEventListener('click', () => {
    var val1 = document.getElementById('firstnumber').value;
    var val2 = document.getElementById('secondnumber').value;
    var result = document.getElementById('result');
    result.innerText = (parseInt(val1) / parseInt(val2)*100);
})

root.addEventListener('click', () => {
    var val1 = document.getElementById('firstnumber').value;
    var result = document.getElementById('result');
    result.innerText = Math.sqrt(parseInt(val1));
})

let addtodoButton = document.getElementById('addtodo');
let todocontainer = document.getElementById('toDoContainer');
let inputfield = document.getElementById('inputfield');


addtodoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputfield.value;
    todocontainer.appendChild(paragraph);
    inputfield.value = "";
    paragraph.addEventListener('click', function(){
       
    })
    paragraph.addEventListener('dblclick', function(){
        todocontainer.removeChild(paragraph);
    })
})