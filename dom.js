let itemList = document.querySelector("#items");
// //parents node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "red";

// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = "yellow";

console.log(itemList.parentElement.parentElement);

// children node
console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.childNodes[1]);

// itemList.childNodes[1].style.backgroundColor = "yellow";

//first child
console.log(itemList.firstChild);

//first ElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent="hellow 1";

//last child
console.log(itemList.lastChild);

//last ElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent="hellow 4";

//next sibling
console.log(itemList.nextSibling);

//nextElement Sibling
console.log(itemList.nextElementSibling);

//previous sibling
console.log(itemList.previousSibling);

//previousElement Sibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = "red";

// create a Element

//create a div
let newdiv = document.createElement("div");

// //add class
// newdiv.className = "hellow";

// //add id
// newdiv.id = "hellow222";

// //add title  attribute
// newdiv.setAttribute("title","hellow Div");

//create a text node
let newdivText = document.createTextNode("HEllo word");

//add text to div
newdiv.appendChild(newdivText);

let container = document.querySelector("header .container");
let h1 = document.querySelector("header h1")

console.log(newdiv);

newdiv.style.fontSize = "20px";

container.insertBefore(newdiv,h1);


//Now go head and add HEllo word before Item 1
const itemLists = document.querySelector('#items');
const containers = document.querySelector('#main');

const newli = document.createElement('li');
const litext = document.createTextNode('HEllo word');
newli.appendChild(litext);
newli.setAttribute('class', "list-group-item");

itemLists.insertBefore(newli, itemLists.childNodes[0]);