import style from './style.css';

var name = require('./name');

console.log('Hello my name is ' + name.name);

var hello = document.getElementsByClassName('hello');
hello[0].innerText = 'hey my name is ' + name.name;
