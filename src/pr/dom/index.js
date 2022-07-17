let form = document.getElementById('auth');
let button = document.querySelector('button')

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

function submitHandler (event) {
    if(event.altKey) {
        console.log('alt reto');
    }
    console.log(event.target);
    console.log(this, event);
}

form.addEventListener('submit', (event) => {
    console.log(this, event);
    event.stopPropagation();
    event.preventDefault();
}, true);//capturing, propagation stop; .stopImmediatePropagation - blocks all other

button.addEventListener('click', () => {
    console.log(this, event);
});

//delegation
document.addEventListener('click', (event) => {
    event.preventDefault();
    if(event.target.tagName === 'A') {
        if (event.target.classList.contains('more')) {
            openMorePopup();
        } else {
            console.log(event.target.href);
        }
    }
});