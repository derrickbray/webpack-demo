import style from './style.css';

var name = require('./name');

console.log('Hello my name is ' + name.name);

var hello = document.getElementsByClassName('hello');
hello[0].innerText = 'Hey my name is ' + name.name;

var age = document.getElementsByClassName('age');
age[0].innerText = 'I am ' + name.age + ' years old';
