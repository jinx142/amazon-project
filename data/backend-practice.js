const xhr = new XMLHttpRequest();

xhr.addEventListener('load', () => {
  console.log(xhr.response);
});

xhr.open('GET', 'http://127.0.0.1:5500/checkout.html');
xhr.send();