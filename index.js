let inputNode = document.querySelector('.form__input');
let formButtonNode = document.querySelector('.form__button');
let messageNode = document.querySelector('.message__text');

formButtonNode.addEventListener('click', function () {
    messageNode.textContent = '';

    let value = inputNode.value;
    let reverseValue = value.split('').reverse().join('');

    messageNode.textContent = reverseValue;
});