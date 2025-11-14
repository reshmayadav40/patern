const body = document.body;
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';

const div = document.createElement('div');
div.style.backgroundImage = 'url(https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
div.style.height = '90vh';
div.style.width = '80vh';
div.style.borderStyle = 'solid';
div.style.borderWidth= '6px';
div.style.borderColor = '#48ee59';
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.justifyContent = 'center';
div.style.alignItems = 'center';



const head = document.createElement('h1');
head.innerText = 'Code is more than some bytes in the file';
head.style.borderStyle = 'solid';
head.style.borderWidth = '5px';
head.style.borderColor = '#48ee59';
head.style.color = 'white';
head.style.backgroundColor = '#000000080';
head.style.padding = '15px';
head.style.fontSize = '30px';
head.style.height = '30vh';
head.style.width = '30vh';
div.appendChild(head);
body.appendChild(div);

