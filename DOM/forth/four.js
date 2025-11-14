const body = document.body;
body.style.display = 'flex';
body.style.flexDirection = 'column';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';

const div = document.createElement('div');
div.style.backgroundImage = "url(https://img.freepik.com/free-photo/people-taking-photos-food_23-2149303525.jpg?w=1380&t=st=1705607469~exp=1705608069~hmac=278471867b312bc0088e9ffac7a2f27addf229e5e57bacefa17334eee38448ad)"
div.style.height = '100vh';
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.justifyContent = 'end';


div.style.alignItems = 'last';
div.style.paddingBottom = '2px'
div.style.width = '50vw';
body.appendChild(div);

const second = document.createElement('div');
second.style.backgroundColor = '#f6c56e';
second.style.borderTopLeftRadius = '17px';
second.style.borderTopRightRadius = '17px';

const h = document.createElement('h1'); 
h.innerText = 'Happy Meals';
h.style.fontFamily = 'Bree Serif, serif';

const pa = document.createElement('p');
pa.innerText = 'Discover the best foods over the 1000 restaurants';
pa.style.color = '#323f4b'
const button = document.createElement('button');
second.style.height = '30vh';
second.style.borderTopRight = '12px';
second.style.borderTopleft = '12px';


second.style.textAlign = 'center'
button.textContent ='Book Now';
button.style.fontFamily = 'Roboto';
button.style.height = '30px'
second.appendChild(h);

button.style.backgroundColor = '#ffffff'
second.appendChild(pa);
second.appendChild(button)
div.appendChild(second);
