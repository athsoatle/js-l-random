let form = document.getElementById('auth form');

document.getElementsByTagName('input');
document.querySelector('#auth');
document.querySelector('[name="login"]');

let elements = document.querySelectorAll('input,button');
let elList = Array.from(elements);
elList.forEach(() => {});

form.getAttribute('action');
form.hasAttribute('what');

let errSpan = document.createElement('span');
errSpan.className = 'error';
errSpan.setAttribute('id', 'auth-err');
errSpan.setAttribute('status', 'auth-err');
errSpan.textContent = 'Wrong credentials';

document.body.appendChild(errSpan);

let clone = errSpan.cloneNode(true);
clone.id = 'mail-error';
clone.textContent = 'Unable to send message';

document.body.appendChild(clone);
