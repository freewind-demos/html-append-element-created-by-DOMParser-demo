const htmlCode = '<button>Hello</button>';
const newDoc = new DOMParser().parseFromString(htmlCode, 'text/html');
const button = newDoc.querySelector('button')

const iframe = document.getElementById('iframe');

iframe.contentWindow.document.body.appendChild(button);

