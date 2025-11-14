const body = document.body
const div = document.createElement('div');
div.style.backgroundImage = "url(https://img.freepik.com/free-photo/flat-lay-notebook-with-list-desk_23-2148938724.jpg?w=1380&t=st=1705589139~exp=1705589739~hmac=bf9e192e8095ceb6b0a426d7b81a0d08eae620dade1c54099a7304bc0510370a)";
div.style.backgroundColor = 'rgba(0,0,0,0.5)';
div.style.height = '600px';
div.style.color = 'white';
div.style.width = '400px';
div.style.marginLeft = '30%'
body.appendChild(div);


const start = document.createElement('div');
const h = document.createElement('h1');
h.innerText = "TodoList";
h.style.textAlign = 'center';
start.style.display = 'flex';
start.style.flexDirection = 'column';
start.style.justifyContent = 'center';
start.style.alignItems = 'center';
start.appendChild(h);
div.appendChild(start);
const para = document.createElement('p');
para.innerText = 'Each day I will accomplish one thing on my list';
para.style.fontSize = '20px';
start.appendChild(para);
div.appendChild(start)

const h2 = document.createElement('h2');
h2.innerText = 'Read a Book';
div.appendChild(h2);

const pa = document.createElement('p');
pa.innerText = 'I do not think that the human race will survive the next thousant years, unless we spreat into space. There are too many accidents that can befall life or a single planet. But I am an optimist..';
pa.style.fontSize = '20px';
div.appendChild(pa);

const first = document.createElement('div');
const button = document.createElement('button');
first.style.display = 'flex';
first.style.flexDirection = 'column';
first.style.justifyContent = 'center';
first.style.alignItems = 'center';
button.textContent = 'Start';
button.style.backgroundColor = 'orange'
button.style.width = '20%';
button.style.height = '4vh';
first.appendChild(button);
div.appendChild(first)


const lik = document.createElement('p');
lik.innerText = 'Dont skip introduction';
lik.style.textDecoration = 'underline'
first.appendChild(lik);



 



