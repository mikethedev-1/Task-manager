//Getting input data
const form = document.querySelector('input');

//creating checkbox paragraph input as string
const x = '<i class="fa-regular fa-square"></i>';
console.log(x)

//creaing delete paragraph input as string
const y = '<i class="fa-regular fa-trash-can"></i>';
console.log(y)

//creating the onclick function
function add() {
    var paraOne = document.createElement('p');
    paraOne.innerHTML = x;
    paraOne.setAttribute('class', 'check');
    paraOne.setAttribute('onclick', 'check()');

    var paraTwo = document.createElement('p');
    paraTwo.innerHTML = form.value;
    paraTwo.setAttribute('class', 'text');

    var paraThree = document.createElement('p');
    paraThree.innerHTML = y;
    paraThree.setAttribute('class', 'delete')
    paraThree.setAttribute('onclick', 'remove()')

    var parent = document.createElement('li');
    parent.setAttribute('class', 'mylist');
    parent.appendChild(paraOne);
    parent.appendChild(paraTwo);
    parent.appendChild(paraThree);
    console.log(parent.innerHTML)
    
    const ul = document.querySelector('ul');
    ul.appendChild(parent)

    form.value = "";
}


//Creating clear function
function clear() {
    alert('The button is working')
}