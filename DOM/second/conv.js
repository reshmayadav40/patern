const body = document.body
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';


const div = document.createElement('div');

div.style.borderRadius = '10px';
div.style.backgroundColor = 'rgba(0,0,0,0.5)';
div.style.height = '90vh';
div.style.width = '30vw';
div.style.color = 'white';
const heading = document.createElement('h1');
heading.innerText = 'Chat';
heading.style.backgroundColor = 'aqua';
heading.style.textAlign = 'center'
heading.style.fontWeight = 'bold';
heading.style.fontSize = '25px';
heading.style.padding = '14px';
div.appendChild(heading);
body.appendChild(div)

const next = document.createElement('div');
next.style.padding = '14px';
next.style.color = '#ffffff';
next.style.fontFamily = 'roboto';
next.style.fontSize = '14px';

const para = document.createElement('p');
para.innerText = 'Hello, How are you!';
para.style.backgroundColor = '#52606d';
para.style.padding = '14px';
para.style.borderTopLeftRadius = '14px';
para.style.borderTopRightRadius = '14px';
para.style.textAlign = 'left';

const second = document.createElement('p')
second.innerText = 'Hi Varakumar I am good How are you!';
second.style.backgroundColor = '#47a3f3';
second.style.padding = '14px';
second.style.borderTopLeftRadius = '14px';
second.style.borderTopRightRadius = '14px';
second.style.textAlign = 'right';

const third = document.createElement('p')
third.innerText = 'I am good I am learning HTML and CSS.';
third.style.backgroundColor = '#52606d';
third.style.padding = '14px';
third.style.borderTopLeftRadius = '14px';
third.style.borderTopRightRadius = '14px';
third.style.textAlign = 'left';

const forth = document.createElement('p')
forth.innerText = 'HTML and CSS?';
forth.style.backgroundColor = '#47a3f3';
forth.style.padding = '14px';
forth.style.borderTopLeftRadius = '14px';
forth.style.borderTopRightRadius = '14px';
forth.style.textAlign = 'right';


const fifth = document.createElement('p')
fifth.innerText = 'Yes, by doing Projects Parrallely.';
fifth.style.backgroundColor = '#52606d';
fifth.style.padding = '14px';
fifth.style.borderTopLeftRadius = '14px';
fifth.style.borderTopRightRadius = '14px';
fifth.style.textAlign = 'left';

const six = document.createElement('p')
six.innerText = 'Awesome, can you tell how are you doing?';
six.style.backgroundColor = '#47a3f3';
six.style.padding = '14px';
six.style.borderTopLeftRadius = '14px';
six.style.borderTopRightRadius = '14px';
six.style.textAlign = 'right';

const seven = document.createElement('p')
seven.innerText = 'Can I call you?';
seven.style.backgroundColor = '#52606d';
seven.style.padding = '14px';
seven.style.borderTopLeftRadius = '14px';
seven.style.borderTopRightRadius = '14px';
seven.style.textAlign = 'left';

next.appendChild(para);
next.appendChild(second);
next.appendChild(third);
next.appendChild(forth);
next.appendChild(fifth);
next.appendChild(six);
next.appendChild(seven);
div.appendChild(next);

