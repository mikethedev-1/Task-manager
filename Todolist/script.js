//Getting input data
const form = document.querySelector('input');

//creating checkbox paragraph input as string
//var x = '<i class="fa-regular fa-square"></i>';
var x = '<input type="checkbox">';
console.log(x)

//creaing delete paragraph input as string
var y = '<i class="fa-regular fa-trash-can"></i>';
console.log(y)

//creating the onclick function
function add() {
    var paraOne = document.createElement('p');
    paraOne.innerHTML = x;
    paraOne.setAttribute('class', 'check');

    var paraTwo = document.createElement('p');
    paraTwo.innerHTML = form.value;
    paraTwo.setAttribute('class', 'text');

    var paraThree = document.createElement('p');
    paraThree.innerHTML = y;
    paraThree.setAttribute('class', 'delete');
    paraThree.setAttribute('onclick', 'this.parentElement.style.display = "none"')

    var parent = document.createElement('li');
    parent.setAttribute('class', 'mylist');
    parent.appendChild(paraOne);
    parent.appendChild(paraTwo);
    parent.appendChild(paraThree);
    console.log(parent.innerHTML)
    
    const ul = document.querySelector('ul');
    ul.appendChild(parent)

    form.value = "";
};


//Creating clear function
function erase() {
    var arr = document.querySelectorAll('li');
    var ul = document.querySelector('ul');
    
    for(i=0;i<arr.length;i++){
        ul.removeChild(arr[i])
    }
};

//Creating date() element
setInterval(update, 1000);
var da = document.getElementById('setTime');
function update() {
    var d = new Date();
    da.innerHTML = d.toUTCString();
}


//Developed by Adesanya Ademola