// let test1 = document.querySelector('h2')
// console.log(test1.innerText);

// test1.innerHTML = 'Exercice 1 <b>test</b>'

// console.log(test1.innerText);



// let test2 = test1.nextElementSibling
// console.log(test2);
// test2.innerHTML = 'JE SUIS BO'
// console.log(test2.innerText);




// let exo4 = document.querySelector('#users').id
// console.log(exo4);



// let exo5 = document.querySelectorAll('h1')

// let exo55 = Array.from(exo5)

// console.log(exo55);

// exo55.forEach(el => {
//     console.log(el.innerText);
// });




let exo6 = document.getElementsByTagName('input')[0]
console.log(exo6.attributes);



//8
let exo8 = document.querySelector('input')
console.log(exo8.getAttribute('type'));


//9
let exo9 = document.querySelector('input#inputPassword3')
exo9.setAttribute('type', 'password')

//10
let exo10 = document.querySelectorAll('input')[0]
exo10.setAttribute('type', 'color')